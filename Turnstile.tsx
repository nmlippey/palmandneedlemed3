import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        turnstile?: {
            render: (container: HTMLElement, options: any) => string;
            remove: (widgetId: string) => void;
            reset: (widgetId: string) => void;
        };
    }
}

interface TurnstileProps {
    siteKey: string;
    onVerify: (token: string) => void;
    onExpire?: () => void;
    onError?: () => void;
}

export const Turnstile: React.FC<TurnstileProps> = ({ siteKey, onVerify, onExpire, onError }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);

    useEffect(() => {
        // Load Turnstile script if not already loaded or in progress
        const scriptId = 'cloudflare-turnstile-script';
        let script = document.getElementById(scriptId) as HTMLScriptElement | null;
        
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }

        let isMounted = true;

        const renderWidget = () => {
            if (!isMounted || !containerRef.current || !window.turnstile) return;

            try {
                // If there's an existing widget, remove it first
                if (widgetIdRef.current) {
                    window.turnstile.remove(widgetIdRef.current);
                    widgetIdRef.current = null;
                }

                widgetIdRef.current = window.turnstile.render(containerRef.current, {
                    sitekey: siteKey,
                    callback: onVerify,
                    'expired-callback': () => {
                        if (onExpire) onExpire();
                    },
                    'error-callback': () => {
                        if (onError) onError();
                    },
                });
            } catch (err) {
                console.error('Error rendering Turnstile:', err);
            }
        };

        const checkAndRender = () => {
            if (window.turnstile) {
                renderWidget();
            } else {
                setTimeout(checkAndRender, 100);
            }
        };

        checkAndRender();

        return () => {
            isMounted = false;
            if (widgetIdRef.current && window.turnstile) {
                try {
                    window.turnstile.remove(widgetIdRef.current);
                } catch (e) {
                    console.warn('Silent error removing turnstile widget:', e);
                }
                widgetIdRef.current = null;
            }
        };
    }, [siteKey, onVerify, onExpire, onError]);

    return <div ref={containerRef} className="my-2 flex justify-center" />;
};

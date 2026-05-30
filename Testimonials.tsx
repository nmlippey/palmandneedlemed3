import React, { useState, useEffect, useCallback, useRef } from 'react';

const TESTIMONIALS = [
    {
        quote: "Dr. Lippey has her own practice in Redwood City now. She definitely is the best doctor I've had. Very caring, and spends a lot of time with her patients. In this world where there's less and less human connection, and Doctors barely spend any time with you-- Dr. Lippey is the opposite. I've been so frustrated with how hard it is to get simple questions answered from other doctors, but that's not the case with her.",
        author: "Patient Testimonial"
    },
    {
        quote: "Dr. Lippey is one of the best doctors I’ve ever had. She's trustworthy, caring, professional and respectful. I 100% recommend!",
        author: "Patient Testimonial"
    },
    {
        quote: "I’ve had a couple OMT and acupuncture treatments with Dr. Lippey. She’s is very gentle and respectful. Her knowledge base is solid in primary care as well. My back feels so much better after my treatments with her.",
        author: "Patient Testimonial"
    },
    {
        quote: "I'm tired of waiting weeks if not months to see my primary for a simple issue or checkup. With Dr. Lippey I can come in to see her on short notice and get care without being rushed or given a prescription for meds I don't need. The care you get is truly personalized. She's attentive, accessible, and caring. Going to her office is like going to a friend's place. Yes it is that welcoming.",
        author: "Patient Testimonial"
    },
    {
        quote: "Dr. Nina Lippey is wonderful. She is professional, caring, kind, and very easy to talk to. You can tell she truly listens and wants to help her patients feel better, not just treat symptoms. As a DO, her approach to healthcare is very interesting and refreshing because she looks at the whole person and takes time to understand what’s going on. I was honestly tired of waiting months for appointments elsewhere, so finding her clinic was such a relief. The office is also very clean, peaceful, and welcoming. I highly recommend Palm & Needle Medical Clinic.",
        author: "Patient Testimonial"
    },
    {
        quote: "Dr. Lippey is amazing! She’s kind, attentive, and makes you feel comfortable during every visit. Highly recommend her to anyone looking for a caring and professional doctor.",
        author: "Patient Testimonial"
    },
    {
        quote: "Dr. Lippey is a great doctor super attentive and easy going. Great listener and very empathetic with her patients, always making sure you feel heard and comfortable.",
        author: "Patient Testimonial"
    }
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = useCallback(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
    }, []);

    const handlePrev = useCallback(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    }, []);

    const handleDotClick = (index: number) => {
        if (index !== currentIndex) {
            setIsAnimating(true);
            setCurrentIndex(index);
        }
    };

    // Reset loop when index changes
    useEffect(() => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
        autoPlayRef.current = setInterval(handleNext, 8500); // Shift every 8.5 seconds
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, [handleNext]);

    useEffect(() => {
        // Simple animation throttle to clean up state
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), 800);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    return (
        <section id="testimonials" className="py-24 md:py-32 bg-sage-light/50 relative border-t border-slate-100 overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 blur-xl bg-[#c5a059] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 blur-2xl bg-[#8da399] pointer-events-none rounded-full" />

            <div className="max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center">
                {/* Header Section */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif">Patient Testimonials</h2>
                    <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full"></div>
                </div>

                {/* Main Carousel Viewer */}
                <div className="w-full max-w-4xl min-h-[380px] md:min-h-[300px] flex items-center justify-between relative px-4 md:px-12">
                    {/* Left Button */}
                    <button 
                        onClick={handlePrev} 
                        aria-label="Previous testimonial"
                        className="hidden md:flex absolute left-0 w-12 h-12 items-center justify-center rounded-full bg-white border border-slate-100 text-slate-400 hover:text-[#5b6d64] hover:shadow-lg hover:-translate-x-0.5 transition-all outline-none"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Testimonial Quote wrapper - Key forces fade rerun */}
                    <div 
                        key={currentIndex} 
                        className="animate-fade-in text-center flex flex-col items-center space-y-8 w-full select-none"
                    >
                        {/* Gold Quotes */}
                        <div className="text-5xl md:text-6xl text-[#c5a059]/30 font-serif leading-none italic select-none">“</div>
                        
                        {/* Quote Text */}
                        <p className="text-[#5b6d64] text-lg md:text-xl md:text-2xl font-serif italic max-w-3xl leading-relaxed md:leading-loose px-2 md:px-6">
                            {TESTIMONIALS[currentIndex].quote}
                        </p>
                        
                        {/* Author */}
                        <div className="space-y-1">
                            <span className="text-[#c5a059] uppercase tracking-[0.25em] font-bold text-xs block">
                                {TESTIMONIALS[currentIndex].author}
                            </span>
                            <div className="flex justify-center space-x-1">
                                {[...Array(5)].map((_, idx) => (
                                    <span key={idx} className="text-[#c5a059] text-sm">★</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Button */}
                    <button 
                        onClick={handleNext} 
                        aria-label="Next testimonial"
                        className="hidden md:flex absolute right-0 w-12 h-12 items-center justify-center rounded-full bg-white border border-slate-100 text-slate-400 hover:text-[#5b6d64] hover:shadow-lg hover:translate-x-0.5 transition-all outline-none"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Carousel Pagination & Swipe Actions */}
                <div className="flex flex-col items-center mt-12 space-y-4">
                    <div className="flex items-center space-x-3">
                        {TESTIMONIALS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? "w-8 bg-[#c5a059]" 
                                        : "w-2 bg-slate-300 hover:bg-slate-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

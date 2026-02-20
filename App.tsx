import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { SERVICES } from './constants';
import AboutPage from './AboutPage';
import DpcPage from './DpcPage';
import OmmPage from './OmmPage';
import AcupuncturePage from './AcupuncturePage';
import ReferralsPage from './ReferralsPage';

export type ViewType = 'home' | 'about' | 'dpc' | 'omm' | 'acupuncture' | 'referrals';

const Marquee = () => {
    const text = "Pre-Enrollment Now Open!";
    // Restored to 10 items for a denser, more continuous marquee effect
    const repeatedItems = Array(10).fill(text);
    
    return (
        <div className="fixed top-32 w-full bg-[#c5a059] text-white py-2 z-40 overflow-hidden border-b border-white/10 shadow-md">
            <div className="animate-marquee whitespace-nowrap">
                {repeatedItems.map((item, i) => (
                    <span key={i} className="mx-8 text-[10px] font-bold uppercase tracking-[0.4em]">
                        {item}
                    </span>
                ))}
                {/* Second set for seamless loop */}
                {repeatedItems.map((item, i) => (
                    <span key={`loop-${i}`} className="mx-8 text-[10px] font-bold uppercase tracking-[0.4em]">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [view, setView] = useState<ViewType>('home');

    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const CARD1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Card_1.jpg";
    const BUILDING_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Pic_2.jpg";
    const NINA_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Headshot_1.jpg";
    const OMM10_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_10.jpg";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const navigateTo = (newView: ViewType, hash?: string) => {
        setView(newView);
        if (hash) {
            setTimeout(() => {
                const el = document.getElementById(hash.replace('#', ''));
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const LandingPage = () => (
        <>
            <header id="home" className="relative pt-80 pb-24 bg-sage-light overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in relative z-10">
                        <div className="space-y-4">
                            <div className="text-left">
                                <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif leading-tight">Palm & Needle</h1>
                                <p className="text-xl md:text-2xl tracking-[0.4em] uppercase text-[#c5a059] font-bold mt-2">Medical Clinic</p>
                            </div>
                            <p className="text-[#5b6d64] text-2xl md:text-3xl font-bold serif italic">
                                Nina Lippey, DO
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#8da399] serif leading-tight italic">
                                Healthcare Rooted <br className="hidden md:block" />
                                in Relationship.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="#about" onClick={(e) => { e.preventDefault(); navigateTo('about'); }} className="bg-[#5b6d64] text-white px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#c5a059] transition-all shadow-xl hover:-translate-y-1 text-center">About Dr. Lippey</a>
                        </div>
                    </div>
                    <div className="relative animate-fade-in">
                        <div className="absolute -inset-8 bg-[#8da399] opacity-10 rounded-2xl -rotate-2 blur-3xl"></div>
                        <img src={BUILDING_URL} alt="Clinic Office" className="relative z-10 rounded-lg shadow-2xl border-[16px] border-white object-cover aspect-[4/3] w-full" />
                    </div>
                </div>
            </header>

            <section id="services" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20 space-y-8">
                        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white bg-white">
                            <img src={CARD1_URL} className="w-full h-auto" alt="Clinic Services" />
                        </div>
                        <div className="space-y-4">
                            <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs">A Comprehensive Approach</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif">Services</h2>
                            <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full"></div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {SERVICES.map((s, i) => (
                            <div 
                                key={i} 
                                onClick={() => navigateTo(i === 0 ? 'dpc' : i === 1 ? 'omm' : 'acupuncture')}
                                className="group p-10 bg-white rounded-lg border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden cursor-pointer"
                            >
                                <h3 className="text-2xl font-bold text-[#5b6d64] serif mb-4">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                                <span className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest border-b border-transparent group-hover:border-[#c5a059] transition-all">Learn More →</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about-preview" className="py-32 bg-sage-light/40 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="max-w-xs w-full relative group">
                            <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-3 group-hover:rotate-0 transition-transform blur-lg"></div>
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-8 border-white bg-slate-100">
                                <img src={NINA_URL} alt="Dr. Nina Lippey" className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 object-cover object-[70%_center] aspect-[4/5]" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-[#c5a059] text-white px-8 py-5 rounded shadow-2xl z-20 border-2 border-white/10">
                                <p className="font-bold text-lg serif italic leading-none">Dr. Nina Lippey, DO</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mt-2">Founder & Physician</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="flex items-center space-x-4">
                            <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs">Meet Your Doctor</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif leading-tight">Whole-Person Care Rooted in Balance</h2>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>Growing up between the United States and Japan gave Dr. Lippey a unique perspective on healing. She believes that health is an active process of restoring balance across mind, body, and spirit.</p>
                            <p>As a family medicine physician, she provides comprehensive primary care to patients of all ages, from newborns to seniors. As a DO, or osteopathic physician, Dr. Lippey specializes in OMM. She will be offering acupuncture soon.</p>
                        </div>
                        <div className="pt-6">
                             <button onClick={() => navigateTo('about')} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.2em] hover:text-[#5b6d64] flex items-center group">
                                Read Full Bio & Mission <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                             </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-32 bg-[#5b6d64] text-white relative z-10">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                     <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none -rotate-12 translate-x-1/4">
                          <img src={LOGO_URL} className="w-[1000px] h-[1000px] object-contain invert scale-[1.5]" alt="" />
                     </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-24 relative z-10">
                    <div className="space-y-12">
                        <h2 className="text-5xl font-bold serif leading-tight">Schedule Your Appointment</h2>
                        <p className="text-slate-200 text-xl leading-relaxed max-w-lg opacity-90">
                            Join our membership-based practice for personalized, unhurried healthcare.
                        </p>
                        <div className="space-y-10 pt-10">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner">📍</div>
                                <div>
                                    <p className="font-bold text-xl">400 Seaport Court, Suite 203</p>
                                    <p className="text-sm opacity-60">Redwood City, CA 94063</p>
                                    <p className="text-xs italic opacity-80 mt-2 max-w-[280px]">Turn right upon entering the marina, and look for the sign "Seaport Health Collective"</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner">✉️</div>
                                <div><p className="font-bold text-xl">care@palmandneedlemed.com</p><p className="text-sm opacity-60">Membership Inquiries</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded shadow-2xl relative text-slate-800 flex flex-col items-center justify-center min-h-[300px]">
                        <div className="absolute -top-44 -left-12 w-48 h-48 bg-white rounded flex items-center justify-center shadow-2xl border-4 border-[#c5a059] transform hover:rotate-12 transition-transform overflow-hidden p-0 z-20">
                            <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.5]" alt="" />
                        </div>
                        <div className="text-center space-y-8 w-full">
                            <p className="text-slate-600 serif italic text-lg">Ready to begin your journey to better health?</p>
                            <button 
                                onClick={() => window.location.href = 'mailto:care@palmandneedlemed.com?subject=Appointment Inquiry'}
                                className="w-full bg-[#c5a059] text-white py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#5b6d64] transition-all shadow-xl hover:-translate-y-1"
                            >
                                Schedule your appointment now
                            </button>
                            <div className="pt-8">
                                <img 
                                    src={OMM10_URL} 
                                    alt="Osteopathic Treatment" 
                                    className="w-full h-48 object-cover rounded shadow-md border border-slate-100"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

    const renderContent = () => {
        switch (view) {
            case 'about': return <AboutPage />;
            case 'dpc': return <DpcPage />;
            case 'omm': return <OmmPage />;
            case 'acupuncture': return <AcupuncturePage />;
            case 'referrals': return <ReferralsPage />;
            default: return <LandingPage />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onNavigate={navigateTo} />
            <Marquee />
            
            {renderContent()}
        </div>
    );
};

export default App;
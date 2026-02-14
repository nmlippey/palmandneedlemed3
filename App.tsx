import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { SERVICES } from './constants';
import AboutPage from './AboutPage';
import DpcPage from './DpcPage';
import OmmPage from './OmmPage';
import AcupuncturePage from './AcupuncturePage';

export type ViewType = 'home' | 'about' | 'dpc' | 'omm' | 'acupuncture';

const App = () => {
    const [view, setView] = useState<ViewType>('home');
    const [contactForm, setContactForm] = useState({ firstName: '', lastName: '', email: '', inquiry: '' });

    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo.png";
    const BUILDING_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Building.jpg";
    const NINA_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Nina-Lippey.jpg";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [view]);

    const handleInquirySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `New Clinic Inquiry from ${contactForm.firstName} ${contactForm.lastName}`;
        const body = `Name: ${contactForm.firstName} ${contactForm.lastName}\nEmail: ${contactForm.email}\n\nInquiry:\n${contactForm.inquiry}`;
        window.location.href = `mailto:care@palmandneedlemed.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

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
            <header id="home" className="relative pt-64 pb-24 bg-sage-light overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in relative z-10">
                        <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full text-[#c5a059] text-xs font-bold uppercase tracking-[0.2em] shadow-sm border border-slate-100 overflow-hidden">
                            <img src={LOGO_URL} className="w-10 h-10 object-contain scale-[1.5]" alt="" /><span>Redwood City, California</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif leading-tight">
                            Healthcare Rooted <br />
                            <span className="text-[#8da399]">in Relationship.</span>
                        </h1>
                        <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
                            Integrative primary care blending modern medical science with hands-on osteopathic healing and traditional acupuncture. 
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="#contact" onClick={(e) => { e.preventDefault(); navigateTo('home', '#contact'); }} className="bg-[#5b6d64] text-white px-10 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#c5a059] transition-all shadow-xl hover:-translate-y-1 text-center">Schedule Meet & Greet</a>
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
                    <div className="text-center mb-20 space-y-4">
                        <div className="w-80 h-80 bg-sage-light rounded-full flex items-center justify-center mx-auto shadow-inner border border-slate-50 mb-6 overflow-hidden p-0">
                            <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.3]" alt="" />
                        </div>
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs">A Comprehensive Approach</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif">Services</h2>
                        <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {SERVICES.map((s, i) => (
                            <div 
                                key={i} 
                                onClick={() => navigateTo(i === 0 ? 'dpc' : i === 1 ? 'omm' : 'acupuncture')}
                                className="group p-10 bg-white rounded-lg border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden cursor-pointer"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-5 w-64 h-64 transform group-hover:scale-110 transition-transform -translate-y-12 translate-x-12">
                                    <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.5]" alt="" />
                                </div>
                                <div className="text-5xl mb-10 transform group-hover:scale-110 transition-all">{s.icon}</div>
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
                                <img src={NINA_URL} alt="Dr. Nina Lippey" className="w-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 object-cover aspect-[4/5]" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-[#c5a059] text-white px-8 py-5 rounded shadow-2xl z-20 border-2 border-white/10">
                                <p className="font-bold text-lg serif italic leading-none">Dr. Nina Lippey, DO</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-80 mt-2">Founder & Physician</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 overflow-hidden flex items-center justify-center border border-slate-100 rounded-sm">
                                <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.5]" alt="" />
                            </div>
                            <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs">Meet Your Doctor</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#5b6d64] serif leading-tight">Whole-Person Care Rooted in Balance</h2>
                        <p className="text-slate-600 leading-relaxed italic border-l-4 border-[#8da399] pl-8 py-4 text-xl">
                            "I blend modern medical science with traditional wisdom to see the person beyond the symptoms."
                        </p>
                        <div className="space-y-6 text-slate-600 leading-relaxed">
                            <p>Growing up between the United States and Japan gave Dr. Lippey a unique perspective on healing. She believes that health is an active process of restoring balance across mind, body, and spirit.</p>
                            <p>As an Osteopathic physician, she specializes in OMM and acupuncture, using a gentle hands-on approach to improve function and alleviate pain.</p>
                        </div>
                        <div className="pt-6">
                             <button onClick={() => navigateTo('about')} className="text-[#c5a059] font-bold text-xs uppercase tracking-[0.2em] hover:text-[#5b6d64] flex items-center group">
                                Read Full Bio & Mission <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                             </button>
                        </div>
                        <div className="pt-10 border-t border-slate-200 flex space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
                            <div>Board Certified</div>
                            <div>Redwood City, CA</div>
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
                        <h2 className="text-5xl font-bold serif leading-tight">Restore Your Balance</h2>
                        <p className="text-slate-200 text-xl leading-relaxed max-w-lg opacity-90">
                            Join our membership-based practice for personalized, unhurried healthcare.
                        </p>
                        <div className="space-y-10 pt-10">
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner">📍</div>
                                <div><p className="font-bold text-xl">400 Seaport Court, Suite 203</p><p className="text-sm opacity-60">Redwood City, CA 94063</p></div>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 text-3xl shadow-inner">✉️</div>
                                <div><p className="font-bold text-xl">care@palmandneedlemed.com</p><p className="text-sm opacity-60">Membership Inquiries</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded shadow-2xl relative text-slate-800">
                        <div className="absolute -top-44 -left-12 w-48 h-48 bg-white rounded flex items-center justify-center shadow-2xl border-4 border-[#c5a059] transform hover:rotate-12 transition-transform overflow-hidden p-0 z-20">
                            <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.5]" alt="" />
                        </div>
                        <form className="space-y-6" onSubmit={handleInquirySubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                <input required type="text" placeholder="First Name" value={contactForm.firstName} onChange={e => setContactForm({...contactForm, firstName: e.target.value})} className="w-full bg-slate-50 p-5 rounded-sm text-sm border-none outline-none focus:ring-2 focus:ring-[#8da399]" />
                                <input required type="text" placeholder="Last Name" value={contactForm.lastName} onChange={e => setContactForm({...contactForm, lastName: e.target.value})} className="w-full bg-slate-50 p-5 rounded-sm text-sm border-none outline-none focus:ring-2 focus:ring-[#8da399]" />
                            </div>
                            <input required type="email" placeholder="Email Address" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-50 p-5 rounded-sm text-sm border-none outline-none focus:ring-2 focus:ring-[#8da399]" />
                            <textarea required placeholder="How can we help you?" value={contactForm.inquiry} onChange={e => setContactForm({...contactForm, inquiry: e.target.value})} className="w-full bg-slate-50 p-5 rounded-sm text-sm border-none outline-none focus:ring-2 focus:ring-[#8da399] min-h-[120px]" />
                            <button type="submit" className="w-full bg-[#c5a059] text-white py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#5b6d64] transition-all shadow-xl hover:-translate-y-1">Send Inquiry</button>
                        </form>
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
            default: return <LandingPage />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar onNavigate={navigateTo} />
            
            {renderContent()}

            <footer className="py-32 bg-slate-900 text-slate-400">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <div className="flex flex-col items-center mb-16">
                        <div className="w-80 h-80 bg-white rounded-sm flex items-center justify-center mb-8 shadow-2xl overflow-hidden p-0 border-4 border-slate-800">
                            <img src={LOGO_URL} className="w-full h-full object-contain scale-[1.3]" alt="" />
                        </div>
                        <h3 className="serif text-white text-5xl">Palm & Needle</h3>
                        <p className="text-[12px] tracking-[0.6em] uppercase text-[#c5a059] font-bold mt-4">Medical Clinic</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-[10px] opacity-40 leading-loose uppercase tracking-[0.4em]">
                            © {new Date().getFullYear()} Palm & Needle Medical Clinic • Redwood City, CA
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
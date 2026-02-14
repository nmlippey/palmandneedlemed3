import React, { useState } from 'react';
import { ViewType } from './App';

interface NavbarProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleLinkClick = (e: React.MouseEvent, view: ViewType, hash?: string) => {
        e.preventDefault();
        onNavigate(view, hash);
        setIsOpen(false);
    };

    const CALENDLY_URL = "https://calendly.com/nlippey-palmandneedlemed";

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-40 items-center">
                    <div className="hidden md:flex space-x-4 lg:space-x-6 items-center">
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="text-slate-600 hover:text-[#c5a059] nav-link whitespace-nowrap">Home</a>
                        <a href="#dpc" onClick={(e) => handleLinkClick(e, 'dpc')} className="text-slate-600 hover:text-[#c5a059] nav-link whitespace-nowrap">DPC</a>
                        <a href="#omm" onClick={(e) => handleLinkClick(e, 'omm')} className="text-slate-600 hover:text-[#c5a059] nav-link whitespace-nowrap">OMM</a>
                        <a href="#acupuncture" onClick={(e) => handleLinkClick(e, 'acupuncture')} className="text-slate-600 hover:text-[#c5a059] nav-link whitespace-nowrap">Acupuncture</a>
                        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-slate-600 hover:text-[#c5a059] nav-link whitespace-nowrap text-[10px]">Meet Dr. Lippey</a>
                        <div className="flex space-x-2">
                            <a href="#contact" onClick={(e) => handleLinkClick(e, 'home', '#contact')} className="bg-[#5b6d64] text-white px-4 py-2.5 rounded-sm nav-link hover:bg-[#c5a059] whitespace-nowrap text-[10px]">Contact</a>
                            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-[#c5a059] text-white px-4 py-2.5 rounded-sm nav-link hover:bg-[#5b6d64] whitespace-nowrap text-[10px]">Schedule Appointment</a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[#5b6d64] p-2">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex items-center space-x-6">
                        <div className="text-right hidden sm:block">
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif leading-none cursor-pointer" onClick={(e) => handleLinkClick(e as any, 'home', '#home')}>Palm & Needle</h2>
                            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c5a059] font-bold mt-1">Medical Clinic</p>
                        </div>
                        <div onClick={(e) => handleLinkClick(e as any, 'home', '#home')} className="w-36 h-36 bg-white rounded-sm flex items-center justify-center shadow-xl transform hover:rotate-3 transition-transform cursor-pointer overflow-hidden border-2 border-slate-50">
                            <img src="https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo.png" className="w-full h-full object-contain scale-[1.3]" alt="Palm & Needle Logo" />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-4 animate-fade-in shadow-2xl overflow-y-auto max-h-[calc(100vh-160px)]">
                    <a href="#home" onClick={(e) => handleLinkClick(e, 'home', '#home')} className="block text-slate-600 nav-link">Home</a>
                    <a href="#dpc" onClick={(e) => handleLinkClick(e, 'dpc')} className="block text-slate-600 nav-link">DPC</a>
                    <a href="#omm" onClick={(e) => handleLinkClick(e, 'omm')} className="block text-slate-600 nav-link">OMM</a>
                    <a href="#acupuncture" onClick={(e) => handleLinkClick(e, 'acupuncture')} className="block text-slate-600 nav-link">Acupuncture</a>
                    <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="block text-slate-600 nav-link">Meet Dr. Lippey</a>
                    <a href="#contact" onClick={(e) => handleLinkClick(e, 'home', '#contact')} className="block bg-[#5b6d64] text-white text-center py-3 rounded-sm nav-link">Contact</a>
                    <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="block bg-[#c5a059] text-white text-center py-3 rounded-sm nav-link">Schedule Appointment</a>
                </div>
            )}
        </nav>
    );
};
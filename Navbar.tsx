import React, { useState } from 'react';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-40 items-center">
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-slate-600 hover:text-[#c5a059] nav-link">Home</a>
                        <a href="#services" className="text-slate-600 hover:text-[#c5a059] nav-link">Services</a>
                        <a href="#about" className="text-slate-600 hover:text-[#c5a059] nav-link">Dr. Nina Lippey</a>
                        <a href="#contact" className="bg-[#5b6d64] text-white px-6 py-2.5 rounded-sm nav-link hover:bg-[#c5a059]">Contact</a>
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
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif leading-none">Palm & Needle</h2>
                            <p className="text-[10px] tracking-[0.4em] uppercase text-[#c5a059] font-bold mt-1">Medical Clinic</p>
                        </div>
                        <div className="w-36 h-36 bg-white rounded-sm flex items-center justify-center shadow-xl transform hover:rotate-3 transition-transform cursor-pointer overflow-hidden border-2 border-slate-50">
                            <img src="logo.png" className="w-full h-full object-contain scale-[1.3]" alt="Palm & Needle Logo" />
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white border-b border-slate-100 py-6 px-4 space-y-4 animate-fade-in shadow-2xl">
                    <a href="#home" onClick={() => setIsOpen(false)} className="block text-slate-600 nav-link">Home</a>
                    <a href="#services" onClick={() => setIsOpen(false)} className="block text-slate-600 nav-link">Services</a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-600 nav-link">Dr. Nina Lippey</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block bg-[#5b6d64] text-white text-center py-3 rounded-sm nav-link">Contact</a>
                </div>
            )}
        </nav>
    );
};
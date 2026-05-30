import React from 'react';

const AcupuncturePage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const ACU1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Acupuncture_1.jpg";

    return (
        <div id="acupuncture" className="animate-fade-in bg-white">
            {/* Hero Section */}
            <section className="pt-80 pb-16 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none text-right">
                    <img src={LOGO_URL} className="inline-block h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Integrative Care</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Acupuncture</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto serif italic">
                        Finding balance through traditional Chinese medicine and modern clinical insight.
                    </p>
                </div>
            </section>

            {/* Featured Image Section - Enhanced Bottom Visibility */}
            <section className="relative h-auto md:h-[80vh] w-full overflow-hidden bg-sage-light">
                <img 
                    src={ACU1_URL} 
                    className="w-full h-auto md:h-full md:object-cover object-center shadow-inner relative z-10 opacity-90" 
                    alt="Acupuncture Session" 
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-sage-light via-transparent to-white pointer-events-none"></div>
                {/* Reduced gradient height to show more of the bottom of the picture */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20"></div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="space-y-16">
                        {/* Section 1: Membership Introduction */}
                        <div className="space-y-6 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5b6d64] serif">Acupuncture as Part of Your Membership</h2>
                            <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full mb-8"></div>
                            <p className="text-xl text-slate-700 leading-relaxed font-light">
                                Acupuncture is now available for Palm & Needle Direct Primary Care members as part of an individualized, whole-person approach to care.
                            </p>
                        </div>

                        {/* Description block */}
                        <div className="bg-slate-50 p-8 md:p-12 rounded-lg border border-slate-100 shadow-sm leading-relaxed text-slate-600 text-lg">
                            As a physician, I am currently undergoing advanced training in acupuncture and have begun incorporating acupuncture into care for established DPC patients. Offering acupuncture within the membership model allows me to thoughtfully integrate treatments into each patient's broader health plan while continuing to deepen my clinical training and experience.
                        </div>

                        {/* Section 2: An Integrated Approach */}
                        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-slate-100">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#5b6d64] serif border-l-4 border-[#8da399] pl-6">An Integrated Approach</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Acupuncture is a gentle, evidence-informed treatment that supports the body's natural healing processes. It can be used alongside primary care and Osteopathic Manipulative Medicine (OMM) to help address concerns such as pain, stress, tension, headaches, sleep difficulties, and overall wellness.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#5b6d64] serif border-l-4 border-[#8da399] pl-6">Coordinated Care</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    One of the unique benefits of receiving acupuncture within a Direct Primary Care practice is that your treatment is coordinated with your overall care rather than provided as a standalone service.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Coming Soon */}
                        <div className="pt-12 border-t border-slate-100 text-center max-w-3xl mx-auto space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#5b6d64] serif">Coming Soon: Acupuncture for Non-Members</h3>
                            <p className="text-slate-600 leading-relaxed">
                                At this time, acupuncture is offered exclusively to Palm & Needle DPC members. Once my advanced training is complete, I plan to expand availability and offer standalone acupuncture appointments for non-members as well.
                            </p>
                            <div className="p-8 bg-[#8da399]/10 rounded-lg max-w-xl mx-auto italic text-[#5b6d64] font-medium text-sm">
                                If you're interested in learning more about membership or would like to be notified when standalone acupuncture visits become available, please contact us.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <section className="py-24 bg-[#5b6d64] text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <img src="https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_3.jpg" className="w-24 h-24 rounded shadow-lg border-2 border-white/20" alt="Palm & Needle Logo" />
                                <h3 className="text-xl font-bold serif">Palm & Needle<br/>Medical Clinic</h3>
                            </div>
                        </div>
                        <a href="mailto:care@palmandneedlemed.com" className="space-y-2 hover:opacity-80 transition-opacity block">
                            <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Location</p>
                            <p className="text-lg">400 Seaport Court, Suite 203</p>
                            <p className="text-sm opacity-80">Redwood City, CA 94063</p>
                        </a>
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Contact</p>
                            <a href="tel:650-977-4518" className="text-lg font-bold block hover:opacity-80 transition-opacity">650-977-4518</a>
                            <a href="mailto:care@palmandneedlemed.com" className="text-lg font-bold block hover:opacity-80 transition-opacity">care@palmandneedlemed.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcupuncturePage;
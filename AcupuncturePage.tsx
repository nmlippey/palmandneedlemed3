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
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Integrative Acupuncture</h1>
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
                        {/* Section 1: Introduction */}
                        <div className="space-y-6 text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5b6d64] serif">Acupuncture is offered at Palm & Needle in two ways:</h2>
                            <div className="w-16 h-1 bg-[#c5a059] mx-auto rounded-full mb-8"></div>
                        </div>

                        {/* Members vs Non-Members Grid */}
                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                            {/* DPC Members */}
                            <div className="bg-[#5b6d64]/5 border border-[#5b6d64]/10 rounded-lg p-8 md:p-10 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <span className="text-[#c5a059] uppercase tracking-[0.2em] font-bold text-xs block">Option 1</span>
                                    <h3 className="text-2xl font-bold text-[#5b6d64] serif">Direct Primary Care Members</h3>
                                    <p className="text-slate-600 leading-relaxed text-base">
                                        Acupuncture is included as part of your Direct Primary Care membership when clinically appropriate and may be incorporated into your individualized treatment plan at no additional cost.
                                    </p>
                                </div>
                            </div>

                            {/* Non-Members */}
                            <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 md:p-10 flex flex-col justify-between space-y-6">
                                <div className="space-y-4">
                                    <span className="text-slate-400 uppercase tracking-[0.2em] font-bold text-xs block">Option 2</span>
                                    <h3 className="text-2xl font-bold text-[#5b6d64] serif">Non-Members</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        At this time, acupuncture for non-members is offered as part of an Integrative OMM + Acupuncture visit rather than as a standalone acupuncture appointment.
                                    </p>
                                    <p className="text-slate-500 leading-relaxed text-xs md:text-sm italic">
                                        This way, acupuncture can be thoughtfully combined with Osteopathic Manipulative Medicine (OMM), creating a comprehensive treatment that addresses musculoskeletal function, pain, nervous system regulation, and overall wellness.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: A Thoughtful, Integrated Approach */}
                        <div className="pt-16 border-t border-slate-100 max-w-3xl mx-auto space-y-8">
                            <div className="text-center space-y-4">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5b6d64] serif">A Thoughtful, Integrated Approach</h3>
                                <div className="w-12 h-0.5 bg-[#c5a059] mx-auto rounded-full"></div>
                            </div>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                                <p>
                                    As a physician, I am currently completing advanced training in acupuncture. During this stage, I have chosen to integrate acupuncture into comprehensive osteopathic treatment rather than offer standalone acupuncture visits.
                                </p>
                                <p className="bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-100 shadow-sm font-light italic">
                                    This approach allows me to combine the hands-on principles of Osteopathic Manipulative Medicine (OMM) with physician-delivered acupuncture to create personalized treatments that address pain, mobility, nervous system regulation, stress, and overall wellness while continuing to advance my acupuncture training and clinical expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrative OMM + Acupuncture Pricing */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">Integrative OMM + Acupuncture Pricing</h2>
                        <div className="w-24 h-1 bg-[#c5a059] mx-auto"></div>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
                        {/* Adults Column */}
                        <div className="space-y-6">
                            <div className="border-b border-slate-200 pb-4">
                                <h3 className="text-xl font-bold text-[#5b6d64] serif">Adults</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Integrative OMM + Acupuncture", time: "60 minutes", price: "$375" },
                                    { title: "Extended Integrative OMM + Acupuncture", time: "90 minutes", price: "$475" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-[#5b6d64] text-sm md:text-base">{item.title}</h4>
                                            <p className="text-slate-500 text-xs">{item.time}</p>
                                        </div>
                                        <div className="text-xl font-bold text-[#c5a059] whitespace-nowrap pl-4">
                                            {item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Children Column */}
                        <div className="space-y-6">
                            <div className="border-b border-slate-200 pb-4">
                                <h3 className="text-xl font-bold text-[#5b6d64] serif">Children</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { title: "Integrative OMM + Acupuncture", time: "60 minutes", price: "$150" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-[#5b6d64] text-sm md:text-base">{item.title}</h4>
                                            <p className="text-slate-500 text-xs">{item.time}</p>
                                        </div>
                                        <div className="text-xl font-bold text-[#c5a059] whitespace-nowrap pl-4">
                                            {item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DPC Members Integration */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-[#5b6d64]/5 border border-[#5b6d64]/10 rounded-lg p-8 md:p-10 text-center space-y-4">
                            <span className="text-[#c5a059] uppercase tracking-[0.2em] font-bold text-xs block">DPC Membership Benefit</span>
                            <h3 className="text-2xl font-bold text-[#5b6d64] serif">Included for Direct Primary Care Members</h3>
                            <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed md:text-base">
                                One of the unique benefits of Palm & Needle Direct Primary Care is that both OMM and acupuncture are included as part of your membership whenever clinically appropriate.
                            </p>
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
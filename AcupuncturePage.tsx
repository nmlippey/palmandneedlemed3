import React from 'react';

const AcupuncturePage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const ACU1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Acupuncture_1.jpg";

    return (
        <div className="animate-fade-in bg-white">
            {/* Hero Section */}
            <section className="pt-80 pb-16 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none text-right">
                    <img src={LOGO_URL} className="inline-block h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Integrative Care</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Acupuncture</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto serif italic">
                        "Finding balance through traditional Chinese medicine and modern clinical insight."
                    </p>
                </div>
            </section>

            {/* Featured Image Section - Enhanced Bottom Visibility */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-sage-light"></div>
                <img 
                    src={ACU1_URL} 
                    className="w-full h-full object-cover object-center shadow-inner relative z-10 opacity-90" 
                    alt="Acupuncture Session" 
                />
                <div className="absolute inset-0 z-20 bg-gradient-to-b from-sage-light via-transparent to-white pointer-events-none"></div>
                {/* Reduced gradient height to show more of the bottom of the picture */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-20"></div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <div className="text-center space-y-12">
                        <div className="inline-block px-6 py-2 bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full shadow-lg">
                            Expanding Soon
                        </div>
                        
                        <div className="space-y-8 text-left">
                            <p className="text-2xl text-slate-700 leading-relaxed font-light text-center">
                                Integrative care is expanding—acupuncture is coming to support your health.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-12 pt-8">
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#5b6d64] serif border-l-4 border-[#8da399] pl-6">Deepening My Practice</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        I am currently undergoing advanced training in acupuncture and look forward to offering this service as a core part of my practice soon. Acupuncture is a gentle, evidence-based integrative therapy that stimulates the body’s natural healing processes.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#5b6d64] serif border-l-4 border-[#8da399] pl-6">Holistic Benefits</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Once available, these services will focus on pain management, stress reduction, and overall constitutional wellness. It will seamlessly complement our current osteopathic and primary care offerings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-12 rounded-lg border border-slate-100 shadow-sm mt-16 italic text-slate-600">
                            "While I continue my training, I remain focused on providing comprehensive primary care and OMM, ensuring you receive personalized care tailored to your immediate needs."
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
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Location</p>
                            <p className="text-lg">400 Seaport Court, Suite 203</p>
                            <p className="text-sm opacity-80">Redwood City, CA 94063</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest opacity-60 font-bold">Contact</p>
                            <p className="text-lg font-bold">care@palmandneedlemed.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcupuncturePage;
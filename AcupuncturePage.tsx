import React from 'react';

const AcupuncturePage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/6d64e62329402d24158f1ed6765522794adca21d/Logo.png";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-64 pb-24 bg-sage-light relative overflow-hidden min-h-[70vh] flex items-center">
                <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                    <img src={LOGO_URL} className="w-1/2 object-contain scale-[2]" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-4 py-1 bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full mb-8">
                        Expanding Soon
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Acupuncture</h1>
                    <p className="text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto serif italic mb-12">
                        Integrative care expanding soon—acupuncture coming to support your health.
                    </p>
                    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-12 rounded shadow-2xl border border-white/50 space-y-8">
                        <p className="text-slate-700 leading-relaxed text-lg">
                            I am currently training in acupuncture and look forward to offering this service as part of my practice soon. Acupuncture is a gentle, integrative therapy that can help with pain relief, stress reduction, and overall wellness by stimulating the body’s natural healing processes.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            While I continue my training, I focus on providing comprehensive primary care and osteopathic manipulative medicine, ensuring you receive personalized, hands-on care tailored to your needs. I am excited to expand my services with acupuncture in the near future to further support your health and wellbeing.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AcupuncturePage;
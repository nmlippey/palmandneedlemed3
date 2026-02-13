import React from 'react';

const OmmPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/6d64e62329402d24158f1ed6765522794adca21d/Logo.png";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-64 pb-24 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Hands-On Healing</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Osteopathic Manipulative Medicine</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto serif italic">
                        "The body is a unit; the person is a unit of body, mind, and spirit."
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif leading-tight">What is OMM?</h2>
                            <p className="text-xl text-[#8da399] font-medium leading-relaxed">
                                Hands-on care that helps your body heal itself.
                            </p>
                            <div className="prose prose-lg text-slate-700 leading-relaxed">
                                <p>
                                    Osteopathic Manipulative Medicine, or OMM, is a gentle, hands-on approach to healthcare that supports your body’s natural ability to heal and function at its best. Using carefully guided techniques, I evaluate and treat areas of tension, misalignment, or restricted movement in the muscles, joints, and connective tissues.
                                </p>
                                <p>
                                    OMM can help relieve pain, improve mobility, enhance circulation, and reduce stress on the body. It’s often used alongside traditional medical care, preventive health measures, and integrative therapies like acupuncture to provide a truly whole-person approach.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-lg border border-slate-100 space-y-8">
                            <div className="w-16 h-px bg-[#c5a059]"></div>
                            <p className="text-slate-800 leading-relaxed text-lg">
                                OMM is a gentle, hands-on approach that helps the body heal itself. Using specific techniques, I assess and treat areas of tension, misalignment, or restricted movement to relieve pain, improve mobility, enhance circulation, and restore balance. 
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                OMM complements your primary care by addressing the root causes of discomfort and supporting your body’s natural function. Every treatment is personalized to your needs and comfort, helping you feel better physically and emotionally.
                            </p>
                            <div className="pt-8 border-t border-slate-200">
                                <p className="text-lg serif italic text-[#5b6d64]">
                                    "The goal is not just to address symptoms, but to support your overall health, restore balance, and help you feel your best—both physically and emotionally."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OmmPage;
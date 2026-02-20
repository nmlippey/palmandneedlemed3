import React from 'react';

const OmmPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo.png";
    const OMM2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_2.jpg";
    const OMM9_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_9.jpg";
    const OMM11_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_11.jpg";
    const OMM12_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_12.jpg";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-80 pb-24 bg-sage-light relative overflow-hidden">
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

            {/* Main Content with Scattered Images */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left Column: Text & Small Image */}
                        <div className="lg:col-span-7 space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-bold text-[#5b6d64] serif leading-tight">What is OMM?</h2>
                                <p className="text-xl text-[#8da399] font-medium leading-relaxed">
                                    Hands-on care that helps your body heal itself.
                                </p>
                                <div className="prose prose-lg text-slate-700 leading-relaxed">
                                    <p>
                                        Osteopathic Manipulative Medicine, or OMM, is a gentle, hands-on approach to healthcare that supports your body’s natural ability to heal and function at its best. Using carefully guided techniques, I evaluate and treat areas of tension, misalignment, or restricted movement in the muscles, joints, and connective tissues.
                                    </p>
                                    
                                    {/* Scattered Image 1: OMM_2 (Small) */}
                                    <div className="py-8 flex justify-start">
                                        <div className="relative group max-w-[280px]">
                                            <div className="absolute -inset-2 bg-sage-light rounded rotate-2 group-hover:rotate-0 transition-transform"></div>
                                            <img src={OMM2_URL} className="relative z-10 w-full rounded shadow-md border-4 border-white" alt="OMM Technique Detail" />
                                        </div>
                                    </div>

                                    <p>
                                        OMM can help relieve pain, improve mobility, enhance circulation, and reduce stress on the body. It’s often used alongside traditional medical care, preventive health measures, and integrative therapies like acupuncture to provide a truly whole-person approach.
                                    </p>
                                </div>
                            </div>

                            {/* Scattered Image 2: OMM_9 (Small) */}
                            <div className="flex justify-end pr-12">
                                <div className="relative group max-w-[240px]">
                                    <div className="absolute -inset-2 bg-sage-light rounded -rotate-2 group-hover:rotate-0 transition-transform"></div>
                                    <img src={OMM9_URL} className="relative z-10 w-full rounded shadow-md border-4 border-white" alt="Hands-on healing" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Gray Box & More Small Images */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="bg-slate-50 p-12 rounded-lg border border-slate-100 space-y-8 relative overflow-hidden">
                                <div className="w-16 h-px bg-[#c5a059]"></div>
                                <p className="text-slate-800 leading-relaxed text-lg">
                                    OMM is a gentle, hands-on approach that helps the body heal itself. Using specific techniques, I assess and treat areas of tension, misalignment, or restricted movement to relieve pain, improve mobility, enhance circulation, and restore balance. 
                                </p>
                                
                                {/* Scattered Image 3: OMM_11 (Small, inside box flow) */}
                                <div className="flex justify-center">
                                    <img src={OMM11_URL} className="w-48 h-auto rounded shadow-sm border-2 border-white" alt="OMM Clinical Focus" />
                                </div>

                                <p className="text-slate-700 leading-relaxed">
                                    OMM complements your primary care by addressing the root causes of discomfort and supporting your body’s natural function. Every treatment is personalized to your needs and comfort.
                                </p>
                                
                                <div className="pt-8 border-t border-slate-200">
                                    <p className="text-lg serif italic text-[#5b6d64]">
                                        "The goal is not just to address symptoms, but to support your overall health, restore balance, and help you feel your best—both physically and emotionally."
                                    </p>
                                </div>
                            </div>

                            {/* Scattered Image 4: OMM_12 (Small) */}
                            <div className="flex justify-center pt-8">
                                <div className="relative group max-w-[320px]">
                                    <div className="absolute -inset-3 bg-[#c5a059]/5 rounded rotate-1 group-hover:rotate-0 transition-transform blur-md"></div>
                                    <img src={OMM12_URL} className="relative z-10 w-full rounded-lg shadow-xl border-8 border-white" alt="Care and Connection" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OmmPage;
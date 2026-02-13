import React from 'react';

const AboutPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/6d64e62329402d24158f1ed6765522794adca21d/Logo.png";
    const NINA_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/6d64e62329402d24158f1ed6765522794adca21d/Nina-Lippey.jpg";

    return (
        <div className="animate-fade-in">
            {/* Header Section */}
            <section className="pt-64 pb-20 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Our Foundation</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Dr. Nina Lippey, DO</h1>
                    <p className="text-xl text-slate-600 serif italic leading-relaxed max-w-2xl mx-auto">
                        "Healthcare is a collaboration—an active process of restoring balance across mind, body, and spirit."
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-px bg-[#c5a059]"></div>
                            <h2 className="text-2xl font-bold text-[#5b6d64] serif">Mission Statement</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            My mission is to provide thoughtful, personalized primary care that treats the whole person—not just symptoms. By integrating evidence-based medicine with osteopathic manipulative treatment and acupuncture, I partner with my patients to support healing, restore balance, and promote long-term health and wellbeing.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="w-12 h-px bg-[#c5a059]"></div>
                            <h2 className="text-2xl font-bold text-[#5b6d64] serif">Vision</h2>
                        </div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                            My vision is to create a medical practice where care is unhurried, relationships matter, and patients feel truly heard. I aim to redefine primary care by blending modern medicine with hands-on and integrative therapies, empowering individuals to take an active role in their health and live fuller, healthier lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs block mb-4">What We Stand For</span>
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Relationship-Centered Care', text: 'I believe strong doctor–patient relationships are the foundation of excellent healthcare. I view healthcare as a collaboration.' },
                            { title: 'Whole-Person Medicine', text: 'I treat the body as an interconnected system. Care plans address physical, emotional, and lifestyle factors—not just isolated symptoms.' },
                            { title: 'Time & Access', text: 'I value time, availability, and continuity. Longer visits and direct communication allow for deeper understanding and better outcomes.' },
                            { title: 'Hands-On Healing', text: 'Osteopathic manipulative medicine and acupuncture are integral tools I use to support the body’s natural ability to heal and maintain balance.' },
                            { title: 'Transparency & Integrity', text: 'I believe healthcare should be straightforward and honest. I am committed to clear pricing, ethical practice, and evidence-based care.' },
                            { title: 'Prevention & Sustainability', text: 'I focus on prevention, education, and long-term health—helping patients stay well, not just get well.' }
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-8 rounded border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#8da399] serif mb-4">{v.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bio */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 sticky top-48">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-2 blur-lg"></div>
                            <img src={NINA_URL} alt="Dr. Nina Lippey" className="relative z-10 w-full rounded-lg shadow-2xl border-8 border-white object-cover aspect-[4/5]" />
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center space-x-4">
                            <img src={LOGO_URL} className="w-12 h-12 object-contain" alt="" />
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif">Biography</h2>
                        </div>
                        
                        <div className="space-y-6 text-slate-700 leading-relaxed text-lg font-light">
                            <p>
                                I bring an integrative approach to primary care shaped by growing up in both the United States and Japan. Being immersed in two cultures from an early age influenced my interest in blending Western medicine with Eastern healing traditions and in caring for patients as whole individuals.
                            </p>
                            <p>
                                I completed my undergraduate education at Brown University, earned my Doctor of Osteopathic Medicine degree from Marian College of Osteopathic Medicine, and completed my Family Medicine residency at St. Joseph’s Medical Center in Stockton, California, where I received comprehensive training in full-spectrum primary care.
                            </p>
                            <p>
                                I have always been drawn to family medicine because of its emphasis on whole-person care, continuity, and cultural awareness. I believe health is influenced not only by physical symptoms, but also by lifestyle, environment, and personal values. Incorporating osteopathic manipulative medicine (OMM) and acupuncture into my practice allows me to offer integrative, evidence-informed options for pain, stress-related conditions, and chronic illness.
                            </p>
                            <p>
                                I chose to practice Direct Primary Care (DPC) because it allows me to practice medicine in alignment with my values. By removing the constraints of insurance-based care, the DPC model allows for longer visits, improved access, and a stronger patient–physician relationship. This enables me to focus on prevention, education, and individualized care rather than treating symptoms in isolation.
                            </p>
                            <p>
                                My goal is to provide thoughtful, culturally responsive, and comprehensive primary care that supports patients throughout their healthcare journey.
                            </p>
                        </div>

                        <div className="pt-12 border-t border-slate-100">
                             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Education</p>
                                    <p className="serif text-[#5b6d64]">Brown University</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Medical Degree</p>
                                    <p className="serif text-[#5b6d64]">Marian College</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Residency</p>
                                    <p className="serif text-[#5b6d64]">St. Joseph's</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Focus</p>
                                    <p className="serif text-[#5b6d64]">Integrative DPC</p>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
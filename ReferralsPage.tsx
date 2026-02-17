import React from 'react';

const ReferralsPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo.png";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-72 pb-24 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Coordinated Care</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Referrals & Imaging</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto serif italic">
                        "Expert guidance across the broader medical landscape, coordinated with your primary care."
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-[#5b6d64] serif leading-tight">Specialty Coordination</h2>
                            <p className="text-xl text-[#8da399] font-medium leading-relaxed">
                                Seamless connection to specialists when you need them.
                            </p>
                            <div className="prose prose-lg text-slate-700 leading-relaxed">
                                <p>
                                    As your primary care physician, I act as your health navigator. If you require specialized care, I coordinate directly with top specialists in the Redwood City area and beyond.
                                </p>
                                <p>
                                    In the Direct Primary Care model, I have the time to research the best providers for your specific condition, share your medical history securely (with your consent), and follow up after your consultation to ensure the specialist's recommendations are integrated into your overall care plan.
                                </p>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-12 rounded-lg border border-slate-100 space-y-8">
                            <h3 className="text-2xl font-bold text-[#5b6d64] serif">How Referrals Work</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                    <p className="text-slate-700"><strong>Evaluation:</strong> We discuss your needs during an unhurried visit to determine the right path forward.</p>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                    <p className="text-slate-700"><strong>Coordination:</strong> I facilitate the referral, ensuring the specialist has the context they need to help you best.</p>
                                </li>
                                <li className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-[#c5a059] text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                    <p className="text-slate-700"><strong>Integration:</strong> We review the specialist's findings together and adjust your primary care plan accordingly.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-6">🩻</div>
                            <h3 className="text-xl font-bold text-[#5b6d64] serif mb-4">Imaging Services</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Need an X-ray, MRI, or CT scan? I coordinate with local imaging centers. Through our DPC network, we often secure significant cash-pay discounts for our members.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-6">🧪</div>
                            <h3 className="text-xl font-bold text-[#5b6d64] serif mb-4">Laboratory Tests</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Routine and specialized blood work is easy to arrange. I can help you find the most cost-effective lab options, whether using insurance or low-cost cash pricing.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-6">📋</div>
                            <h3 className="text-xl font-bold text-[#5b6d64] serif mb-4">Direct Communication</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Unlike traditional practices where communication breaks down between providers, I am committed to staying connected with your whole medical team.
                            </p>
                        </div>
                    </div>

                    <div className="mt-24 bg-[#5b6d64] text-white p-12 rounded shadow-2xl text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold serif mb-6">Transparent & Cost-Effective</h2>
                        <p className="text-lg opacity-90 leading-relaxed mb-8">
                            Many patients find that the cash-pay prices we negotiate for imaging and labs are significantly lower than what they would pay out-of-pocket using insurance before meeting a deductible.
                        </p>
                        <div className="w-16 h-1 bg-[#c5a059] mx-auto mb-8"></div>
                        <p className="italic font-light">
                            "I believe navigating the medical system shouldn't be stressful. I'm here to handle the details so you can focus on getting well."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReferralsPage;
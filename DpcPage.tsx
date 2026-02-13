import React from 'react';

const DpcPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/6d64e62329402d24158f1ed6765522794adca21d/Logo.png";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-64 pb-24 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Care Redefined</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Direct Primary Care</h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto serif italic">
                        "Healthcare is about time, access, and connection. Direct Primary Care restores all three."
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="space-y-12">
                        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                            <p className="text-xl font-light">
                                Through Direct Primary Care (DPC), I offer unhurried, relationship-based healthcare designed around your needs. Your membership provides access to preventive care, routine visits, chronic disease management, and ongoing support, with predictable, transparent pricing. When appropriate, I can also provide a superbill for possible out-of-network insurance reimbursement. This model allows me to spend more time with you, build a strong doctor–patient relationship, and focus on your overall health—not paperwork.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-12 rounded-lg border border-slate-100">
                            <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-8 text-center">What is Direct Primary Care (DPC)?</h2>
                            <div className="space-y-6 text-center max-w-3xl mx-auto">
                                <p className="text-lg font-medium text-[#8da399]">Direct Primary Care restores time, access, and connection to healthcare.</p>
                                <p className="text-slate-600">Direct Primary Care is a healthcare model built around a direct relationship between you and your physician—without insurance in the middle.</p>
                                <p className="text-slate-600">Instead of billing your insurance for each visit, Direct Primary Care works through a simple monthly membership fee. This covers most primary care services and allows me to focus on what matters most: your health, your time, and our relationship.</p>
                                <p className="text-lg serif italic text-[#5b6d64]">Direct Primary Care allows me to truly know my patients and care for them over time.</p>
                            </div>
                        </div>

                        {/* How DPC is different */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                            {[
                                { title: 'No Insurance Billing', text: 'I do not bill insurance for routine care. This means fewer administrative barriers, more transparency, and more time spent with you—not paperwork.' },
                                { title: 'Longer, Unhurried Visits', text: 'Appointments are not rushed. We take the time needed to fully address your concerns, ask questions, and create thoughtful care plans.' },
                                { title: 'Direct Access to Your Doctor', text: 'You have easier access to me for questions, follow-ups, and guidance—often without needing an office visit.' },
                                { title: 'Clear, Upfront Pricing', text: 'Your membership fee is predictable and transparent. There are no surprise bills or copays.' },
                                { title: 'Care Focused on You, Not Volume', text: 'Because I care for a smaller number of patients, I can provide more personalized, attentive care.' }
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 border-[#c5a059] pl-6 py-4">
                                    <h3 className="text-lg font-bold text-[#5b6d64] serif mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Coverage Section */}
                        <div className="py-16 border-t border-slate-100">
                            <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-10">What DPC Covers</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <ul className="space-y-4">
                                    {[
                                        'Preventive care and wellness visits',
                                        'Acute care (same-day or next-day visits when available)',
                                        'Chronic disease management',
                                        'Coordination of care with specialists',
                                        'Osteopathic manipulative treatment and integrative therapies, when appropriate'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start space-x-3 text-slate-700">
                                            <span className="text-[#c5a059] mt-1">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-sage-light p-8 rounded border border-slate-200">
                                    <p className="text-xs text-slate-500 italic uppercase tracking-wider mb-2">Note</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Services outside primary care—such as imaging, labs, or specialty care—are not included but are often available at reduced cash prices.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="py-16">
                            <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-10 text-center">Direct Primary Care vs. Traditional Primary Care</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white text-xs uppercase tracking-[0.2em]">
                                            <th className="p-6 text-left border-r border-slate-800">Feature</th>
                                            <th className="p-6 text-left border-r border-slate-800">Direct Primary Care (DPC)</th>
                                            <th className="p-6 text-left">Traditional Primary Care</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-slate-700">
                                        {[
                                            ['Pricing', 'Monthly membership fee with clear, predictable pricing', 'Visits billed to insurance with copays, deductibles, and surprise bills'],
                                            ['Insurance', 'No insurance billing for routine care', 'Care driven by insurance requirements and billing codes'],
                                            ['Appointments', 'Longer, unhurried appointments', 'Short, time-limited visits'],
                                            ['Patient Volume', 'Smaller patient panel', 'Large patient panels'],
                                            ['Access', 'Easier access to your doctor for questions and follow-up', 'Limited access outside scheduled visits'],
                                            ['Philosophy', 'Focus on relationship-based, personalized care', 'Focus on visit volume and documentation'],
                                            ['Focus Area', 'Emphasis on prevention and root causes', 'Often focused on problem-based visits'],
                                            ['Transparency', 'Transparent pricing for visits and services', 'Costs often unclear until after the visit'],
                                            ['Integrative Care', 'Integrative care options such as OMM and acupuncture', 'Limited time or coverage for integrative therapies']
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="p-6 font-bold text-[#5b6d64] serif border-r border-slate-200">{row[0]}</td>
                                                <td className="p-6 border-r border-slate-200">{row[1]}</td>
                                                <td className="p-6">{row[2]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Insurance Info */}
                        <div className="py-24 border-t border-slate-100">
                            <div className="max-w-4xl mx-auto space-y-8">
                                <h2 className="text-3xl font-bold text-[#5b6d64] serif text-center">Do I Still Need Insurance?</h2>
                                <p className="text-slate-700 leading-relaxed text-center text-lg">
                                    Direct Primary Care is not insurance, but it works well alongside it. I encourage patients to carry a high-deductible or catastrophic insurance plan for added peace of mind in the event of emergencies, hospitalizations, or specialty care.
                                </p>
                                <div className="bg-[#5b6d64] text-white p-12 rounded shadow-xl">
                                    <p className="leading-relaxed">
                                        Direct Primary Care is designed to meet your everyday healthcare needs—preventive care, routine visits, and chronic condition management—with an emphasis on access and personalized attention. When appropriate, I can also provide a superbill for services you receive, which you may submit to your insurance company for possible out-of-network reimbursement, depending on your plan.
                                    </p>
                                    <p className="mt-6 leading-relaxed opacity-90 italic">
                                        This approach allows you to enjoy the benefits of direct, relationship-based primary care while still having insurance coverage for life’s unexpected events.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DpcPage;
import React from 'react';

const DpcPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const CARD2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Card_2.jpg";
    const DPC1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/DPC_1.jpg";
    const DPC2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/DPC_2.jpg";
    const TOYS1_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Toys_1.jpg";

    return (
        <div className="animate-fade-in relative min-h-screen bg-white">
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="pt-80 pb-16 bg-sage-light relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                        <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                        <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Care Redefined</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Direct Primary Care</h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto serif italic">
                            Healthcare is about time, access, and connection. Direct Primary Care restores all three.
                        </p>
                    </div>
                </section>

                {/* Main Content with Scattered Small Images */}
                <section className="py-24 bg-white relative">
                    <div className="max-w-6xl mx-auto px-4 relative z-10">
                        <div className="space-y-32">
                            
                            {/* Definition Box */}
                            <div className="bg-slate-50/95 p-16 rounded-lg border border-slate-100 backdrop-blur-md shadow-sm text-center relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2">
                                    <img src={LOGO_URL} className="w-full h-full object-contain" alt="" />
                                </div>
                                <h2 className="text-3xl font-bold text-[#5b6d64] serif mb-8">What is Direct Primary Care (DPC)?</h2>
                                <div className="space-y-6 max-w-3xl mx-auto">
                                    <p className="text-xl font-medium text-[#8da399]">Direct Primary Care restores time, access, and connection to healthcare.</p>
                                    <p className="text-slate-600 text-lg">Direct Primary Care is a healthcare model built around a direct relationship between you and your physician—without insurance in the middle.</p>
                                    <p className="text-slate-600">Instead of billing your insurance for each visit, Direct Primary Care works through a simple monthly membership fee. This covers most primary care services and allows me to focus on what matters most: your health, your time, and our relationship.</p>
                                    <p className="text-xl serif italic text-[#5b6d64] pt-4">"Direct Primary Care allows me to truly know my patients and care for them over time."</p>
                                </div>
                            </div>

                            {/* Section 1: Intro with DPC_1 (Reduced Size) */}
                            <div className="grid lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-8 space-y-8">
                                    <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                                        <p className="text-2xl font-light text-[#5b6d64] serif">
                                            Unhurried, relationship-based healthcare designed around your needs.
                                        </p>
                                        <p className="text-slate-600 mt-6">
                                            Your membership provides access to preventive care, routine visits, chronic disease management, and ongoing support, with predictable, transparent pricing. When appropriate, I can also provide a superbill for possible out-of-network insurance reimbursement. This model allows me to spend more time with you, build a strong doctor–patient relationship, and focus on your overall health—not paperwork.
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                                    <div className="relative group max-w-[320px]">
                                        <div className="absolute -inset-3 bg-sage-light rounded-lg rotate-3 group-hover:rotate-0 transition-transform blur-lg opacity-40"></div>
                                        <img src={DPC1_URL} className="relative z-10 w-full h-auto object-cover rounded shadow-xl border-4 border-white" alt="Clinic Consultation Room" />
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Features Grid */}
                            <div className="space-y-12">
                                <div className="text-center">
                                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-[10px] mb-2 block">The Difference</span>
                                    <h2 className="text-3xl font-bold text-[#5b6d64] serif">How DPC is Different</h2>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        { title: 'No Insurance Billing', text: 'I do not bill insurance for routine care. This means fewer administrative barriers, more transparency, and more time spent with you—not paperwork.' },
                                        { title: 'Longer, Unhurried Visits', text: 'Appointments are not rushed. We take the time needed to fully address your concerns, ask questions, and create thoughtful care plans.' },
                                        { title: 'Direct Access to Your Doctor', text: 'You can schedule same day or next day appointments, as well as telehealth visits. You have easier access to me for questions, follow-ups, and guidance—often without needing an office visit.' },
                                        { title: 'Clear, Upfront Pricing', text: 'Your membership fee is predictable and transparent. There are no surprise bills or copays.' },
                                        { title: 'Care Focused on You, Not Volume', text: 'Because I care for a smaller number of patients, I can provide more personalized, attentive care.' }
                                    ].map((item, i) => (
                                        <div key={i} className="border-l-2 border-[#c5a059] pl-6 py-6 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
                                            <h3 className="text-lg font-bold text-[#5b6d64] serif mb-3">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Coverage with Toys_1 (Small) */}
                            <div className="grid lg:grid-cols-12 gap-16 items-center">
                                <div className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
                                    <div className="relative group max-w-[280px]">
                                        <div className="absolute -inset-2 bg-[#8da399]/10 rounded rotate-[-4deg] group-hover:rotate-0 transition-transform blur-lg opacity-40"></div>
                                        <img src={TOYS1_URL} className="relative z-10 w-full rounded shadow-lg border-2 border-white" alt="Family Friendly Atmosphere" />
                                    </div>
                                </div>
                                <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">What DPC Covers</h2>
                                    <ul className="space-y-6">
                                        {[
                                            'Same-day or next-day appointments (in-person and virtual visits) when needed',
                                            'Extended appointment times',
                                            'Annual physical exams/wellness visits',
                                            'Well woman exams with pap smear',
                                            'Preventative care, exercise, and nutritional counseling',
                                            'Chronic disease management',
                                            'Acute care (injuries, rashes, infections, UTIs, etc.)',
                                            'Basic procedures (joint injections, earwax removal, skin biopsies, OMM, acupuncture, etc.)',
                                            'Coordination of care with specialists',
                                            'Transparent costs for additional services',
                                            'In office lab drawing',
                                            'Select medications offered at cost'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start space-x-4 text-slate-700">
                                                <span className="w-2 h-2 rounded-full bg-[#c5a059] mt-2.5 shrink-0"></span>
                                                <span className="text-lg font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-sage-light/50 p-6 rounded border-l-4 border-[#8da399] max-w-2xl">
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            <span className="font-bold uppercase tracking-wider text-[10px] block mb-1">Clinic Policy</span>
                                            Services outside primary care—such as imaging, labs, or specialty care—are not included but are often available at reduced cash prices.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Comparison Table with Card_2 (Small) */}
                            <div className="space-y-16">
                                <div className="text-center max-w-3xl mx-auto space-y-4">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">Direct Primary Care vs. Traditional Care</h2>
                                    <p className="text-slate-500">A side-by-side look at the membership experience.</p>
                                </div>
                                
                                <div className="grid lg:grid-cols-12 gap-12 items-center">
                                    <div className="lg:col-span-9 overflow-x-auto rounded-lg shadow-sm border border-slate-200">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="bg-slate-900 text-white text-[10px] uppercase tracking-[0.2em]">
                                                    <th className="p-6 text-left border-r border-slate-800">Feature</th>
                                                    <th className="p-6 text-left border-r border-slate-800">DPC Membership</th>
                                                    <th className="p-6 text-left">Traditional Care</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm text-slate-700">
                                                {[
                                                    ['Pricing', 'Monthly fee, predictable', 'Copays & surprise bills'],
                                                    ['Insurance', 'No insurance middleman', 'Care driven by billing codes'],
                                                    ['Appointments', 'Longer, unhurried', 'Short, time-limited'],
                                                    ['Access', 'Direct and easy', 'Limited outside visits'],
                                                    ['Philosophy', 'Relationship-based', 'Volume-based']
                                                ].map((row, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                        <td className="p-5 font-bold text-[#5b6d64] serif border-r border-slate-200">{row[0]}</td>
                                                        <td className="p-5 border-r border-slate-200">{row[1]}</td>
                                                        <td className="p-5">{row[2]}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="lg:col-span-3 space-y-4 flex flex-col items-center">
                                        <div className="relative rounded overflow-hidden shadow-lg border-2 border-white max-w-[200px] rotate-2">
                                            <img src={CARD2_URL} className="w-full h-auto" alt="Membership Card" />
                                        </div>
                                        <p className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold text-center">Membership Model</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section: How Does DPC Save You Money? */}
                            <div className="space-y-16 py-16 border-t border-slate-100">
                                <div className="text-center max-w-3xl mx-auto space-y-4">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">How Does DPC Save You Money?</h2>
                                    <p className="text-slate-500">Investing in your health today can prevent significant costs tomorrow.</p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Emergency Room</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            A single ER visit can cost $1000-$3000 or more. Sometimes, this is necessary, but oftentimes, patients are unsure if their symptoms warrant immediate medical attention. Here, you have direct access to your doctor even after hours to assess possible medical emergencies and potentially save you a couple thousand dollars.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Urgent Care</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Many patients go to urgent care because the wait times to see their primary care doctor are so long or they do not have insurance. A single urgent care visit can cost $100-$300 out of pocket (even before additional testing). If follow-up treatment is needed, that could cost another couple hundred dollars. Here we offer same-day or next-day appointments, you don't need insurance, and your visits are included.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Prevention</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Early intervention can avert bigger health issues later. If you're a member, you've already removed the barrier to access timely preventative care, and you can focus on a healthier you. Treating smaller issues early on is usually much easier and cheaper than what those smaller issues can grow into later.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* FAQ Section */}
                            <div className="space-y-12 pt-16 border-t border-slate-100">
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Do I Still Need Insurance?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Direct Primary Care is not insurance, but it works well alongside it. I encourage patients to have health insurance, such as a PPO, high-deductible health plan, or catastrophic insurance plan for added peace of mind in the event of emergencies, hospitalizations, or specialty care. We recommend against HMO plans with our membership, which can make referrals challenging. This approach allows you to enjoy the benefits of direct, relationship-based primary care while still having insurance coverage for life’s unexpected events.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">How is DPC different from concierge medicine?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            DPC is generally more affordable and insurance-free. DPC charges a simple monthly fee without billing insurance, while concierge medicine typically has higher fees to be a member, and still bills insurance.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">How is the fee structure set?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            As a Direct Primary Care clinic, Palm & Needle Medical Clinic has a straightforward monthly billing structure after an additional enrollment fee to start being seen. You can cancel at anytime with advanced notice. You can also pay quarterly if this is preferred.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Do you take Flexible Spending Account (FSA)/Health Savings Account (HSA) cards?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Yes. You can use your HSA or FSA card for your membership and visit fees. We can then provide receipts if your plan requires any documentation.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">How do labs, referrals, and imaging work?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            I can place referrals, lab orders, and imaging orders that can be billed through your insurance, permitting you do not have an HMO insurance plan.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold text-[#5b6d64] serif">Are OMM and acupuncture included in the DPC membership?</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Yes. They can be included as part of your Direct Primary Care (DPC) membership when it is medically appropriate for your care.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Membership Pricing Section */}
                            <div className="space-y-12 pt-16 border-t border-slate-100">
                                <div className="text-center max-w-3xl mx-auto space-y-6">
                                    <h2 className="text-4xl font-bold text-[#5b6d64] serif">Membership Pricing</h2>
                                    <div className="bg-slate-50 p-8 rounded-lg space-y-4">
                                        <p className="text-xl font-bold text-[#5b6d64] serif">Monthly Membership Pricing:</p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li>Adults (18+): $400/month</li>
                                            <li>Families of Two: $500/month</li>
                                            <li>Children: $25/month with parent membership</li>
                                        </ul>
                                        <div className="pt-4 text-sm text-slate-500 italic space-y-1">
                                            <p>*Please reach out with questions or concerns regarding pricing.</p>
                                            <p>First Enrollment fee waived. Any cancellations with reenrollment will be $150 to reenroll.</p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <a 
                                            href="https://calendly.com/nlippey-palmandneedlemed" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-block bg-[#c5a059] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#5b6d64] transition-colors uppercase tracking-widest text-sm"
                                        >
                                            schedule meet & greet
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Previous Patients Section */}
                            <div className="space-y-8 pt-16 border-t border-slate-100 text-center max-w-3xl mx-auto">
                                <h2 className="text-4xl font-bold text-[#5b6d64] serif">Previous Patients</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    If you are a previous patient of mine and would prefer to skip the Meet & Greet, you can schedule your appointment directly using the link below. I look forward to continuing your care at Palm & Needle Medical Clinic!
                                </p>
                                <div className="pt-4">
                                    <a 
                                        href="https://calendly.com/nlippey-palmandneedlemed" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-block bg-[#5b6d64] text-white px-8 py-4 rounded-sm font-bold hover:bg-[#c5a059] transition-colors uppercase tracking-widest text-sm"
                                    >
                                        schedule appointment
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

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

export default DpcPage;
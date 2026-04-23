import React from 'react';

import { ViewType } from './App';

interface OmmPageProps {
    onNavigate: (view: ViewType, hash?: string) => void;
}

const OmmPage: React.FC<OmmPageProps> = ({ onNavigate }) => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const OMM2_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_2.jpg";
    const OMM9_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_9.jpg";
    const OMM11_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_11.jpg";
    const OMM12_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_12.jpg";

    return (
        <div id="omm" className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-80 pb-24 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Hands-On Healing</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Osteopathic Manipulative Medicine</h1>
                    <div className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-left space-y-8">
                        <p className="text-lg">
                            Osteopathic manipulative medicine (OMM) was developed in 1874 by Dr. Andrew Taylor Still, who founded the American School of Osteopathy to teach a hands-on approach emphasizing the body’s structure–function relationship and self-healing capacity. Over time, it became a core component of osteopathic medical training in the United States, integrated with modern medical science and practiced by Doctors of Osteopathic Medicine (DOs) as part of comprehensive patient care.
                        </p>
                        <div className="space-y-6">
                            <p className="font-bold text-[#5b6d64] serif text-xl">The Four Tenets of OMM express the underlying philosophy of osteopathic medicine:</p>
                            <div className="space-y-4 pl-6 border-l-2 border-[#c5a059]">
                                <p>1. The body is a unit; the person is a unit of body, mind and spirit.</p>
                                <p>2. The body is capable of self-regulation, self-healing and health maintenance.</p>
                                <p>3. Structure and function are reciprocally interrelated.</p>
                                <p>4. Rational treatment is based upon an understanding of the basic principles of body unity, self-regulation and the interrelationship of structure and function.</p>
                            </div>
                        </div>
                    </div>
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

            {/* Common Conditions Treated */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">Common Conditions Treated</h2>
                        <div className="w-24 h-1 bg-[#c5a059] mx-auto mt-6"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl mx-auto">
                        {[
                            "Acute pain",
                            "Back/neck pain",
                            "Joint pain",
                            "Musculoskeletal pain",
                            "Headaches/migraines",
                            "Chronic conditions such as GI issues (reflux, constipation, IBS), fibromyalgia, breathing difficulties due to rib dysfunction or diaphragm restriction",
                            "Pregnancy-related or postpartum pain",
                            "Infants: torticollis, plagiocephaly, feeding difficulties, reflux"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-2 shrink-0"></span>
                                <span className="text-slate-700 leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OMM FAQ Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#5b6d64] serif">How often will I receive OMM?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                New/acute conditions can sometimes be treated in one visit. In the beginning, I typically see patients more frequently- about every 3-4 weeks (sooner if needed). For chronic conditions, I will usually start by treating you 2-3 times to see if OMM is beneficial. Chronic/more complicated conditions often need visits every 4-6 weeks for maintenance if the condition does not resolve and OMM is helping. If you graduate, you can always come back and see me on an as-needed basis without being considered a new patient. You can also do physical therapy while doing OMM.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-[#5b6d64] serif">Do you accept insurance for visits?</h3>
                            <div className="space-y-4">
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    You will pay for the visit fee at the time of your appointment. I can provide you with a detailed receipt (called a superbill) that you may submit to your insurance company for possible reimbursement. Many patients receive partial reimbursement through their out-of-network benefits.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    If your insurance covered OMM when you saw me at my previous practice, there is a good chance it may still be covered. The main difference is that my new practice does not bill insurance directly, so you would pay at the time of the visit and submit the superbill to your insurance yourself.
                                </p>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    If you'd like to check ahead of time, you can call your insurance company and ask whether OMM is covered using CPT codes <strong>98926</strong>, <strong>98927</strong>, or <strong>98928</strong>, which are the codes I commonly use during those visits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OMM Pricing */}
            <section className="py-24 bg-white border-t border-slate-100">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#5b6d64] serif">OMM Pricing</h2>
                        <h3 className="text-2xl font-bold text-[#5b6d64] serif mt-8">DPC members: free as OMM is included</h3>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#5b6d64] serif mb-8 text-center">Non-members:</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: "New Patient Visit: Adult 18+", time: "60 minutes", price: "$350" },
                                { title: "New Patient Visit: Ages 0-17", time: "60 minutes", price: "$200" },
                                { title: "Follow-up Patient Visit: Adult 18+", time: "60 minutes", price: "$250" },
                                { title: "Follow-up Patient Visit: Ages 0-17", time: "60 minutes", price: "$100" }
                            ].map((item, i) => (
                                <div key={i} className="bg-slate-50 p-8 rounded border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center space-y-2">
                                    <h4 className="font-bold text-[#5b6d64] serif text-lg">{item.title}</h4>
                                    <p className="text-slate-500 text-sm">{item.time}</p>
                                    <p className="text-2xl font-bold text-[#c5a059] pt-2">{item.price}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center pt-16">
                        <a 
                            href="https://app.elationemr.com/book/palmandneedlemed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#5b6d64] text-white px-10 py-4 rounded-sm font-bold hover:bg-[#c5a059] transition-colors uppercase tracking-widest text-sm text-center"
                        >
                            schedule here
                        </a>
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

export default OmmPage;
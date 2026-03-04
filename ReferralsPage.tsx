import React, { useState } from 'react';

const ReferralsPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";
    const OMM7_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/OMM_7.jpg";

    const [formData, setFormData] = useState({
        patientFirstName: '',
        patientLastName: '',
        patientDob: '',
        patientPhone: '',
        patientEmail: '',
        clinicianFirstName: '',
        clinicianLastName: '',
        clinicianPractice: '',
        clinicianPhone: '',
        clinicianFax: '',
        reason: '',
        urgency: 'Routine'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `New Patient Referral from ${formData.clinicianFirstName} ${formData.clinicianLastName}`;
        const body = `
REFERRAL FORM DETAILS

PATIENT INFORMATION
Name: ${formData.patientFirstName} ${formData.patientLastName}
DOB: ${formData.patientDob}
Phone: ${formData.patientPhone}
Email: ${formData.patientEmail}

REFERRING CLINICIAN INFORMATION
Name: ${formData.clinicianFirstName} ${formData.clinicianLastName}
Practice: ${formData.clinicianPractice}
Phone: ${formData.clinicianPhone}
Fax: ${formData.clinicianFax}

REFERRAL DETAILS
Reason for Referral: ${formData.reason}
Urgency: ${formData.urgency}
        `;
        window.location.href = `mailto:care@palmandneedlemed.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const inputClasses = "w-full bg-slate-50 p-4 rounded-sm text-sm border border-slate-200 outline-none focus:ring-2 focus:ring-[#8da399] transition-all";
    const labelClasses = "block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-2";

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="pt-80 pb-24 bg-sage-light relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 pointer-events-none">
                    <img src={LOGO_URL} className="w-full h-full object-contain scale-150 transform -translate-x-1/2" alt="" />
                </div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <span className="text-[#c5a059] uppercase tracking-[0.4em] font-bold text-xs mb-6 block">Coordinated Care</span>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#5b6d64] serif mb-8">Referrals</h1>
                    <p className="text-xl text-[#5b6d64] leading-relaxed max-w-2xl mx-auto serif italic mb-12">For other clinicians</p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Image Column */}
                        <div className="lg:col-span-4 sticky top-48 hidden lg:block">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-2 blur-lg"></div>
                                <img 
                                    src={OMM7_URL} 
                                    alt="Clinician Collaboration" 
                                    className="relative z-10 w-full rounded-lg shadow-2xl border-8 border-white object-cover" 
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-8">
                            <div className="text-center lg:text-left mb-16 space-y-6">
                                <p className="text-xl text-slate-700 leading-relaxed font-light">
                                    Do you think your patient would benefit from OMM, acupuncture, or both?
                                </p>
                                <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                                    If so, please fill out the information below:
                                </p>
                            </div>

                            {/* Mobile Image (Visible only on small screens) */}
                            <div className="lg:hidden mb-12 flex justify-center">
                                <div className="relative group max-w-sm">
                                    <div className="absolute -inset-4 bg-[#8da399] opacity-10 rounded-lg rotate-2 blur-lg"></div>
                                    <img 
                                        src={OMM7_URL} 
                                        alt="Clinician Collaboration" 
                                        className="relative z-10 w-full rounded-lg shadow-2xl border-8 border-white object-cover" 
                                        referrerPolicy="no-referrer"
                                    />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-16">
                        {/* Patient Information */}
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-2xl font-bold text-[#5b6d64] serif">Patient Information</h2>
                                <div className="flex-grow h-px bg-slate-100"></div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>First Name (required)</label>
                                    <input required type="text" value={formData.patientFirstName} onChange={e => setFormData({...formData, patientFirstName: e.target.value})} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Last Name (required)</label>
                                    <input required type="text" value={formData.patientLastName} onChange={e => setFormData({...formData, patientLastName: e.target.value})} className={inputClasses} />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div>
                                    <label className={labelClasses}>Date of Birth</label>
                                    <input type="text" placeholder="MM/DD/YYYY" value={formData.patientDob} onChange={e => setFormData({...formData, patientDob: e.target.value})} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Phone (required)</label>
                                    <input required type="tel" value={formData.patientPhone} onChange={e => setFormData({...formData, patientPhone: e.target.value})} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email</label>
                                    <input type="email" value={formData.patientEmail} onChange={e => setFormData({...formData, patientEmail: e.target.value})} className={inputClasses} />
                                </div>
                            </div>
                        </div>

                        {/* Referring Clinician Information */}
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <h2 className="text-2xl font-bold text-[#5b6d64] serif">Referring Clinician Information</h2>
                                <div className="flex-grow h-px bg-slate-100"></div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>First Name (required)</label>
                                    <input required type="text" value={formData.clinicianFirstName} onChange={e => setFormData({...formData, clinicianFirstName: e.target.value})} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Last Name (required)</label>
                                    <input required type="text" value={formData.clinicianLastName} onChange={e => setFormData({...formData, clinicianLastName: e.target.value})} className={inputClasses} />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Practice Name</label>
                                <input type="text" value={formData.clinicianPractice} onChange={e => setFormData({...formData, clinicianPractice: e.target.value})} className={inputClasses} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Phone</label>
                                    <input type="tel" value={formData.clinicianPhone} onChange={e => setFormData({...formData, clinicianPhone: e.target.value})} className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Fax</label>
                                    <input type="tel" value={formData.clinicianFax} onChange={e => setFormData({...formData, clinicianFax: e.target.value})} className={inputClasses} />
                                </div>
                            </div>

                            <div>
                                <label className={labelClasses}>Reason for Referral (required)</label>
                                <textarea required rows={4} value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} className={inputClasses} placeholder="Please describe the patient's condition and goals for OMM/Acupuncture..." />
                            </div>

                            <div>
                                <label className={labelClasses}>Urgency</label>
                                <select value={formData.urgency} onChange={e => setFormData({...formData, urgency: e.target.value})} className={inputClasses}>
                                    <option value="Routine">Routine</option>
                                    <option value="Urgent">Urgent</option>
                                </select>
                            </div>
                        </div>

                        <div className="pt-8">
                            <button type="submit" className="w-full bg-[#c5a059] text-white py-6 font-bold uppercase tracking-[0.4em] text-xs hover:bg-[#5b6d64] transition-all shadow-xl hover:-translate-y-1 rounded-sm">
                                Submit Referral
                            </button>
                        </div>
                    </form>
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

export default ReferralsPage;
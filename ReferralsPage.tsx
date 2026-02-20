import React, { useState } from 'react';
import Footer from './Footer';

const ReferralsPage = () => {
    const LOGO_URL = "https://raw.githubusercontent.com/nmlippey/palmandneedlemed-assets/main/Logo_2.png";

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
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="text-center mb-16 space-y-6">
                        <p className="text-xl text-slate-700 leading-relaxed font-light">
                            Do you think your patient would benefit from OMM, acupuncture, or both?
                        </p>
                        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
                            If so, please fill out the information below:
                        </p>
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
                            <p className="mt-4 text-center text-slate-400 text-[10px] uppercase tracking-widest">
                                This will open your default email client to send the referral details.
                            </p>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ReferralsPage;
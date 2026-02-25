import { Calendar, CheckCircle } from 'lucide-react';
import React from 'react'

const ImportantDate = () => {
    const importantDates = [
        { event: "Application Start Date", date: "March 01, 2026" },
        { event: "Application End Date", date: "June 10, 2026" },
        { event: "Entrance Exam Date", date: "June 20, 2026" },
        { event: "Results Declaration", date: "June 25, 2026" },
        { event: "Counseling Dates", date: "July 1-20, 2026 *" },
        { event: "Classes Commence", date: "August 1, 2026" },
    ];

    const documents = [
        "10th Mark Sheet and Certificate",
        "12th Mark Sheet and Certificate",
        "Graduation Mark Sheets (for PG programs)",
        "Transfer Certificate (TC)",
        "Migration Certificate (if applicable)",
        "Caste Certificate (if applicable)",
        "Aadhar Card",
        "Recent Passport Size Photographs",
        "Entrance Exam Score Card",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl mb-6 text-blue-900 font-bold">Important Dates</h2>
                        <p className="text-gray-600 mb-8">
                            Mark your calendar with these key dates for the admission process
                        </p>
                        <div className="space-y-4">
                            {importantDates.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-[#C9A961]/10 transition-colors"
                                >
                                    <Calendar className="w-10 h-10 text-blue-600 shrink-0" />
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900">{item.event}</h4>
                                        <p className="text-gray-600">{item.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl mb-6 text-blue-900 font-bold">Required Documents</h2>
                        <p className="text-gray-600 mb-8">
                            Keep these documents ready for a smooth admission process
                        </p>
                        <div className="bg-[#C9A961]/10 rounded-xl p-6">
                            <ul className="space-y-3">
                                {documents.map((doc, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{doc}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='mt-5'>
                    <strong>Note:</strong> Counseling as per government scheduled as UGC.
                </p>
            </div>
        </section>
    )
}

export default ImportantDate;
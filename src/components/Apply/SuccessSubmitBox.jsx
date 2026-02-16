import { CheckCircle2 } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const SuccessSubmitBox = () => {
    return (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
                Application Submitted!
            </h1>
            <p className="text-foreground/70 mb-6 leading-relaxed">
                Thank you for applying to RIME. We have received your application and will review it carefully. You'll receive an email confirmation shortly.
            </p>
            <div className="bg-[#C9A961]/15 border border-[#C9A961]/30 rounded-lg p-4 mb-6">
                <p className="text-sm text-[#1a2847] font-semibold">
                    Expected Response: Within 15 days
                </p>
            </div>
            <Link
                to={'/'}
            >
                <button className="w-full bg-[#1a2847] hover:bg-[#1a2847]/90 cursor-pointer text-white font-bold py-3 rounded-lg transition-all">
                    Return to Home
                </button>
            </Link>
        </div>
    )
}

export default SuccessSubmitBox;
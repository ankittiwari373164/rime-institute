import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ProgressBar from './ProgressBar.jsx';
import ApplicationForm from './ApplicationForm.jsx';
import SuccessSubmitBox from './SuccessSubmitBox.jsx';

const ApplyForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    
    // 1. ADDED 'trigger' to the destructured useForm object
    const { register, handleSubmit, formState: { errors }, watch, trigger } = useForm({
        mode: "onChange",
    });

    const formData = watch();
    const totalSteps = 5;
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

    // 2. UPDATED nextStep to be async and validate fields before moving forward
    const nextStep = async () => {
        let fieldsToValidate = [];

        // Map out which inputs belong to which step
        switch (currentStep) {
            case 1:
                fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'dob', 'gender', 'nationality'];
                break;
            case 2:
                fieldsToValidate = ['board10', 'percentage10', 'board12', 'percentage12', 'college', 'gpa'];
                break;
            case 3:
                fieldsToValidate = ['program', 'specialization'];
                break;
            case 4:
                // Assuming Step 4 is Address based on the previous code
                fieldsToValidate = ['street', 'city', 'state', 'pincode']; 
                break;
            case 5:
                // Add any field names for Step 5 here if they need validation before final submit
                fieldsToValidate = []; 
                break;
            default:
                fieldsToValidate = [];
        }

        // Wait for react-hook-form to validate the specified fields
        const isStepValid = await trigger(fieldsToValidate);

        // Only move to the next step if validation passes
        if (isStepValid && currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    if (submitted) {
        return (
            <div className="mt-20 min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <SuccessSubmitBox />
            </div>
        );
    }

    return (
        <div className="mt-30 min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 overflow-y-hidden">
                        Admission Application
                    </h1>
                    <p className="text-foreground/70">
                        Join RIME and Shape Your Future
                    </p>
                </div>

                {/* Progress Bar */}
                <ProgressBar currentStep={currentStep} totalSteps={totalSteps} progress={progress} />

                {/* Form Container */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                    <ApplicationForm 
                        currentStep={currentStep} 
                        totalSteps={totalSteps} 
                        register={register} 
                        prevStep={prevStep} 
                        handleSubmit={handleSubmit} 
                        nextStep={nextStep} 
                        formData={formData} 
                        errors={errors} 
                        setSubmitted={setSubmitted} 
                    />
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border border-primary/20 rounded-lg p-6 text-center">
                    <p className="text-sm text-foreground/70">
                        All fields marked with <span className="text-red-500 font-bold">*</span> are required.
                        <br />
                        Your information will be kept confidential and secure.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ApplyForm;
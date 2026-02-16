import React from 'react'
import { cn } from '../utils/cn.js';

const ProgressBar = ({currentStep, totalSteps, progress}) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
                {[1, 2, 3, 4, 5].map((step) => (
                    <div
                        key={step}
                        className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                            currentStep >= step
                                ? "bg-[#C9A961] text-white"
                                : "bg-gray-300 text-gray-600"
                        )}
                    >
                        {step}
                    </div>
                ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="text-center text-sm text-foreground/70 mt-2">
                Step {currentStep} of {totalSteps}
            </p>
        </div>
    )
}

export default ProgressBar;
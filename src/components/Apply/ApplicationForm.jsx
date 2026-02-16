import { AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react'
import { cn } from '../utils/cn.js';

const ApplicationForm = ({currentStep, register, prevStep, totalSteps, handleSubmit, nextStep, formData, errors, setSubmitted}) => {

    const onSubmit = (data) => {
        console.log("Form submitted:", data);
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                First Name *
                            </label>
                            <input
                                type="text"
                                {...register("firstName", {
                                    required: "First name is required",
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.firstName && "border-red-500"
                                )}
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                {...register("lastName", {
                                    required: "Last name is required",
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.lastName && "border-red-500"
                                )}
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.email && "border-red-500"
                                )}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.phone && "border-red-500"
                                )}
                                placeholder="+91 98765 43210"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Date of Birth *
                            </label>
                            <input
                                type="date"
                                {...register("dob", { required: "DOB is required" })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.dob && "border-red-500"
                                )}
                            />
                            {errors.dob && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                                    <AlertCircle className="w-4 h-4" />
                                    {errors.dob.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Gender *
                            </label>
                            <select
                                {...register("gender", {
                                    required: "Gender is required",
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.gender && "border-red-500"
                                )}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Nationality *
                        </label>
                        <input
                            type="text"
                            {...register("nationality", {
                                required: "Nationality is required",
                            })}
                            className={cn(
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                errors.nationality && "border-red-500"
                            )}
                            placeholder="e.g., Indian"
                        />
                    </div>
                </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Academic Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                10th Board *
                            </label>
                            <input
                                type="text"
                                {...register("board10", {
                                    required: "Board name is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="e.g., CBSE, State Board"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                10th Percentage *
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("percentage10", {
                                    required: "Percentage is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="e.g., 85.5"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                12th Board *
                            </label>
                            <input
                                type="text"
                                {...register("board12", {
                                    required: "Board name is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="e.g., CBSE, State Board"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                12th Percentage *
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("percentage12", {
                                    required: "Percentage is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="e.g., 90.5"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Current College (if any)
                            </label>
                            <input
                                type="text"
                                {...register("college")}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="College name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Current CGPA/GPA
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("gpa")}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="e.g., 8.5"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Program Selection */}
            {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Program Selection
                    </h2>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Select Program *
                        </label>
                        <select
                            {...register("program", {
                                required: "Program is required",
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Choose a program</option>
                            <option value="btech">B.Tech Engineering</option>
                            <option value="mba">MBA Management</option>
                            <option value="bca">BCA</option>
                            <option value="mca">MCA</option>
                            <option value="m.ed">M.ED</option>
                            <option value="b.ed">B.ED</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Specialization *
                        </label>
                        <select
                            {...register("specialization", {
                                required: "Specialization is required",
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Choose a specialization</option>
                            {formData.program === "btech" && (
                                <>
                                    <option value="mechanical">Mechanical Engineering (ME)</option>
                                    <option value="electrical">Electrical Engineering (EE)</option>
                                    <option value="cse">Computer Science Engineering (CSE)</option>
                                    <option value="cse-aiml">Computer Science Engineering (AIML)</option>
                                    <option value="cse-ai">Computer Science Engineering (AI)</option>
                                    <option value="ece">Electronics & Communication Engineering (ECE)</option>
                                </>
                            )}
                            {formData.program === "mba" && (
                                <>
                                    <option value="finance">Finance</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="hr">Human Resources</option>
                                    <option value="operations">Operations</option>
                                    <option value="international_business">International Business</option>
                                    <option value="logistic_and_supply_chain">Logistic & Supply Chain</option>
                                    <option value="hospitality">Hospitality</option>
                                    <option value="hospital_administration">Hospital Administration</option>
                                </>
                            )}
                            {formData.program === "bca" && (
                                <>
                                    <option value="bca">BCA</option>
                                </>
                            )}
                            {formData.program === "mca" && (
                                <>
                                    <option value="mca">MCA</option>
                                </>
                            )}
                            {formData.program === "m.ed" && (
                                <>
                                    <option value="m-ed">M.ED</option>
                                </>
                            )}
                            {formData.program === "b.ed" && (
                                <>
                                    <option value="b-ed">B.ED</option>
                                </>
                            )}
                        </select>
                    </div>

                    <div className="bg-blue-50 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm text-primary">
                            Selected Program: <span className="font-semibold capitalize">{formData.program || "Not selected"}</span>
                        </p>
                        <p className="text-sm text-primary mt-1">
                            Specialization: <span className="font-semibold capitalize">{formData.specialization || "Not selected"}</span>
                        </p>
                    </div>
                </div>
            )}

            {/* Step 4: Address */}
            {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Address Information
                    </h2>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Address *
                        </label>
                        <input
                            type="text"
                            {...register("address", {
                                required: "Address is required",
                            })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                            placeholder="Street address"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                City *
                            </label>
                            <input
                                type="text"
                                {...register("city", {
                                    required: "City is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="City"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                State *
                            </label>
                            <input
                                type="text"
                                {...register("state", {
                                    required: "State is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="State"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Pincode *
                            </label>
                            <input
                                type="text"
                                {...register("pincode", {
                                    required: "Pincode is required",
                                })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="000000"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Step 5: Additional Information */}
            {currentStep === 5 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Additional Information
                    </h2>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Work Experience (Years)
                        </label>
                        <input
                            type="number"
                            {...register("experience")}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                            placeholder="e.g., 2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Achievements & Awards
                        </label>
                        <textarea
                            {...register("achievements")}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Tell us about your academic or professional achievements..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">
                            Why do you want to join RIME?
                        </label>
                        <textarea
                            {...register("essays")}
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all resize-none"
                            placeholder="Share your motivation and goals..."
                        />
                    </div>
                </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 mt-8 pt-8 border-t border-border">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={cn(
                        "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all cursor-pointer",
                        currentStep === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-gray-100 text-foreground hover:bg-gray-200"
                    )}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                </button>

                {currentStep < totalSteps ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto bg-[#1a2847] hover:bg-[#1a2847]/90 cursor-pointer flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                        Next
                        <ChevronRight className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="ml-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all cursor-pointer flex items-center gap-2"
                    >
                        <CheckCircle2 className="w-5 h-5" />
                        Submit Application
                    </button>
                )}
            </div>
        </form>
    )
}

export default ApplicationForm;
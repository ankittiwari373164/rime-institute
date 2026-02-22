import { AlertCircle, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import React from 'react';
import { cn } from '../utils/cn.js';
import { toast } from 'react-toastify';
import axios from 'axios';

const ApplicationForm = ({ currentStep, register, prevStep, totalSteps, handleSubmit, nextStep, formData, errors, setSubmitted }) => {

    const server_url = import.meta.env.VITE_SERVER_URL;

    const onSubmit = async (data) => {
        // Transform flat form data into schema structure
        const formattedData = {
            personalInformation: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: Number(data.phone),
                dob: data.dob,
                gender: data.gender,
                nationality: data.nationality,
            },

            academicInformation: {
                matriculationBoard: data.board10,
                matriculationPercentage: Number(data.percentage10),
                intermediateBoard: data.board12,
                intermediatePercentage: Number(data.percentage12),
                collegeName: data.college || "",
                collegeCgpa: data.gpa ? Number(data.gpa) : undefined,
            },

            programApplied: {
                program: data.program,
                specialization: data.specialization,
            },

            addressInformation: {
                address: data.street,
                city: data.city,
                state: data.state,
                pincode: Number(data.pincode),
            },
        };

        try {
            const res = await axios.post(
                `${server_url}/api/apply/user-apply`,
                formattedData
            );

            if (res.status === 200 || res.status === 201) {
                toast.success("Application submitted successfully!");
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Submission error:", error);
            const errorMessage =
                error.response?.data?.message ||
                "Failed to submit application. Please try again.";
            toast.error(errorMessage);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="pb-10">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        Personal Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                            <input
                                type="text"
                                {...register("firstName", { required: "First name is required" })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.firstName && "border-red-500"
                                )}
                                placeholder="Enter your first name"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.firstName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                            <input
                                type="text"
                                {...register("lastName", { required: "Last name is required" })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.lastName && "border-red-500"
                                )}
                                placeholder="Enter your last name"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" },
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.email && "border-red-500"
                                )}
                                placeholder="your.email@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                            <input
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    minLength: { value: 10, message: "Must be at least 10 digits" }
                                })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.phone && "border-red-500"
                                )}
                                placeholder="+91 98765 43210"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.phone.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Date of Birth *</label>
                            <input
                                type="date"
                                {...register("dob", { required: "DOB is required" })}
                                className={cn(
                                    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                    errors.dob && "border-red-500"
                                )}
                            />
                            {errors.dob && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.dob.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Gender *</label>
                            <select
                                {...register("gender", { required: "Gender is required" })}
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
                            {errors.gender && (
                                <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.gender.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Nationality *</label>
                        <input
                            type="text"
                            {...register("nationality", { required: "Nationality is required" })}
                            className={cn(
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all",
                                errors.nationality && "border-red-500"
                            )}
                            placeholder="e.g., Indian"
                        />
                        {errors.nationality && (
                            <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.nationality.message}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Step 2: Academic Information */}
            {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Academic Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">10th Board *</label>
                            <input
                                type="text"
                                {...register("board10", { required: "Board name is required" })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.board10 && "border-red-500")}
                                placeholder="e.g., CBSE, State Board"
                            />
                            {errors.board10 && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.board10.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">10th Percentage *</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("percentage10", {
                                    required: "Percentage is required",
                                    min: { value: 0, message: "Min 0" },
                                    max: { value: 100, message: "Max 100" }
                                })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.percentage10 && "border-red-500")}
                                placeholder="e.g., 85.5"
                            />
                            {errors.percentage10 && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.percentage10.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">12th Board *</label>
                            <input
                                type="text"
                                {...register("board12", { required: "Board name is required" })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.board12 && "border-red-500")}
                                placeholder="e.g., CBSE, State Board"
                            />
                            {errors.board12 && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.board12.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">12th Percentage *</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("percentage12", {
                                    required: "Percentage is required",
                                    min: { value: 0, message: "Min 0" },
                                    max: { value: 100, message: "Max 100" }
                                })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.percentage12 && "border-red-500")}
                                placeholder="e.g., 90.5"
                            />
                            {errors.percentage12 && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.percentage12.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Current College (if any)</label>
                            <input
                                type="text"
                                {...register("college")}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all"
                                placeholder="College name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Current CGPA/GPA</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("gpa", {
                                    min: { value: 0, message: "Min 0" },
                                    max: { value: 10, message: "Max 10" }
                                })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.gpa && "border-red-500")}
                                placeholder="e.g., 8.5"
                            />
                            {errors.gpa && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.gpa.message}</p>}
                        </div>
                    </div>
                </div>
            )}

            {/* Step 3: Program Selection */}
            {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Program Selection</h2>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Select Program *</label>
                        <select
                            {...register("program", { required: "Program is required" })}
                            className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.program && "border-red-500")}
                        >
                            <option value="">Choose a program</option>
                            <option value="btech">B.Tech Engineering</option>
                            <option value="mba">MBA Management</option>
                            <option value="bca">BCA</option>
                            <option value="mca">MCA</option>
                            <option value="m.ed">M.ED</option>
                            <option value="b.ed">B.ED</option>
                        </select>
                        {errors.program && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.program.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Specialization *</label>
                        <select
                            {...register("specialization", { required: "Specialization is required" })}
                            className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.specialization && "border-red-500")}
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
                            {(formData.program === "bca" || formData.program === "mca" || formData.program === "m.ed" || formData.program === "b.ed") && (
                                <option value={formData.program}>{formData.program.toUpperCase()}</option>
                            )}
                        </select>
                        {errors.specialization && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.specialization.message}</p>}
                    </div>
                </div>
            )}

            {/* Step 4: Address */}
            {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Address Details</h2>

                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Street Address *</label>
                        <input
                            type="text"
                            {...register("street", { required: "Street address is required" })}
                            className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.street && "border-red-500")}
                            placeholder="123 Main St, Apartment/Suite"
                        />
                        {errors.street && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.street.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">City *</label>
                            <input
                                type="text"
                                {...register("city", { required: "City is required" })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.city && "border-red-500")}
                                placeholder="City"
                            />
                            {errors.city && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.city.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">State *</label>
                            <input
                                type="text"
                                {...register("state", { required: "State is required" })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.state && "border-red-500")}
                                placeholder="State"
                            />
                            {errors.state && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.state.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Pincode / Zip *</label>
                            <input
                                type="text"
                                {...register("pincode", {
                                    required: "Pincode is required",
                                    pattern: { value: /^[0-9]{6}$/, message: "Enter a valid 6-digit Pincode" } // Adjusted for India based on phone format
                                })}
                                className={cn("w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none transition-all", errors.pincode && "border-red-500")}
                                placeholder="123456"
                            />
                            {errors.pincode && <p className="text-red-500 text-sm mt-1 flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.pincode.message}</p>}
                        </div>
                    </div>
                </div>
            )}

            {/* Form Navigation Buttons */}
            <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={cn(
                        "flex items-center gap-2 px-6 py-3 cursor-pointer rounded-lg font-semibold transition-all",
                        currentStep === 1
                            ? "text-gray-400 bg-gray-100 cursor-not-allowed"
                            : "text-gray-700 bg-gray-200 hover:bg-gray-300"
                    )}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                </button>

                {currentStep < totalSteps ? (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-[#1a2847] text-white rounded-lg font-semibold hover:bg-[#1a2847]/90 transition-all"
                    >
                        Next
                        <ChevronRight className="w-5 h-5" />
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
                    >
                        <Send className="w-5 h-5" />
                        Submit Application
                    </button>
                )}
            </div>
        </form>
    );
};

export default ApplicationForm;
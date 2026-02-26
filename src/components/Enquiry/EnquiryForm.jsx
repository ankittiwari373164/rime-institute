import { Send, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { courses, institutes, states } from './statesData';
import { toast } from 'react-toastify';
import axios from 'axios';

const EnquiryForm = ({ setClose }) => {
    const server_url = import.meta.env.VITE_SERVER_URL;

    useEffect(() => {
        // Disable scroll on the body
        document.body.style.overflow = 'hidden';

        // Re-enable scroll when the component unmounts (closes)
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        institute: "",
        course: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Optional: Auto-close the form after successful submission
        setClose(false);
        try {
            const res = await axios.post(`${server_url}/api/enquiry/user-enquiry`, formData);
            if (res.status === 200 || res.status === 201) {
                toast.success("Thank you! We will get back to you soon.");
                setFormData({ name: "", email: "", phone: "", city: "", state: "", institute: "", course: "" });
            }
        } catch (error) {
            console.error("Error: ", error.message);
            const errorMessage = error.response?.data?.message || "Something went wrong";
            toast.error(errorMessage);
        }
    };

    return (
        <div className='fixed inset-0 lg:px-0 px-5 z-100 bg-[#00000090] backdrop-blur-[5px] overflow-y-auto grid place-items-center py-10'>

            <div className='w-full max-w-xl mx-4 rounded-xl bg-white px-6 md:px-10 py-7 flex flex-col relative'>

                <div className='flex justify-between items-center mb-6'>
                    <h2 className="text-3xl md:text-4xl text-blue-900 font-bold">Enquiry Now</h2>
                    <X
                        onClick={() => setClose(false)}
                        className='cursor-pointer w-9 h-9 hover:bg-gray-100 text-gray-500 rounded-full p-1'
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                                placeholder="+91 XXXXX XXXXX"
                            />
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-7'>
                        <div>
                            <label htmlFor="stateDropdown" className="block text-sm font-semibold text-gray-700 mb-2">
                                Select State / UT*
                            </label>
                            <select
                                id="stateDropdown"
                                name="state"
                                required
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                            >
                                <option value="" disabled>Choose an option</option>
                                {states.map((stateName, index) => (
                                    <option key={index} value={stateName}>{stateName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                                City *
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                required
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                                placeholder="Enter your city"
                            />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-2 gap-7'>
                        <div>
                            <label htmlFor="instituteDropdown" className="block text-sm font-semibold text-gray-700 mb-2">
                                Select Institute*
                            </label>
                            <select
                                id="instituteDropdown"
                                name="institute"
                                required
                                value={formData.institute}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                            >
                                <option value="" disabled>Choose an option</option>
                                {institutes.map((instituteName, index) => (
                                    <option key={index} value={instituteName}>{instituteName}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="courseDropdown" className="block text-sm font-semibold text-gray-700 mb-2">
                                Select Course*
                            </label>
                            <select
                                id="courseDropdown"
                                name="course"
                                required
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C9A961] focus:border-transparent outline-none"
                            >
                                <option value="" disabled>Choose an option</option>
                                {courses.map((courseName, index) => (
                                    <option key={index} value={courseName}>{courseName}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-[#1a2847]/90 text-white px-8 py-4 rounded font-semibold hover:bg-[#1a2847] transition-colors flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" />
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EnquiryForm;
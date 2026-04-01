import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessSubmitBox from "./SuccessSubmitBox.jsx";

const ApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [courses, setCourses] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 🔥 Fetch Courses (Dynamic)
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SERVER_URL}/api/courses`,
        );
        const data = await res.json();

        setCourses(data.data); // ✅ correct
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  // 🔥 Submit Form
  const onSubmit = async (formData) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/apply/user-apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // course = ObjectId
        },
      );

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Success UI
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f2]">
        <SuccessSubmitBox />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f7f2] flex items-center justify-center px-4">
      <div className="w-full mt-10 max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Apply Now</h1>
          <p className="text-gray-500 mt-1">Start your admission process</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] space-y-4 border border-gray-100"
        >
          {/* Full Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullName", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* 🔥 Course Dropdown (Dynamic) */}
          <div>
            <select
              {...register("course", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            >
              <option value="">Select Course</option>

              {courses.map((course) => (
                <option key={course._id} value={course._id}>
                  {course.title}
                </option>
              ))}
            </select>

            {errors.course && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <select
              {...register("gender", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* Address */}
          <div>
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
              className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#b89851]/40"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">Required</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#b89851] hover:bg-[#a58647] text-white p-3 rounded-lg font-medium transition shadow-md"
          >
            Submit Application
          </button>
        </form>

        {/* Footer Note */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Your information is safe and secure.
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;

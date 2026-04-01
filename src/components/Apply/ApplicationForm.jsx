import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/apply/user-apply`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();

      if (result.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-green-600">
          Application Submitted Successfully ✅
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">
          Apply Now
        </h2>

        {/* Full Name */}
        <input
          type="text"
          placeholder="Full Name"
          {...register("fullName", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.fullName && <p className="text-red-500">Required</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500">Required</p>}

        {/* Phone */}
        <input
          type="number"
          placeholder="Phone"
          {...register("phone", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.phone && <p className="text-red-500">Required</p>}

        {/* Course */}
        <input
          type="text"
          placeholder="Course (e.g. BCA)"
          {...register("course", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.course && <p className="text-red-500">Required</p>}

        {/* Gender */}
        <select
          {...register("gender", { required: true })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && <p className="text-red-500">Required</p>}

        {/* Address */}
        <input
          type="text"
          placeholder="Address"
          {...register("address", { required: true })}
          className="w-full p-2 border rounded"
        />
        {errors.address && <p className="text-red-500">Required</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
import { useState, useEffect } from "react";
import API from "../../services/api";

function AddCourse({ fetchCourses, setShowForm, editData }) {
  const [form, setForm] = useState({
    title: "",
    category: "ug", // default
    duration: "1 Year", // default
    seat: "",
    eligibility: "",
    highlights: [""],
    college: "",
  });

  useEffect(() => {
    if (editData) {
      setForm({
        ...editData,
        highlights: editData.highlights || [""],
        category: editData.category || "ug",
        duration: editData.duration || "1 Year",
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...form.highlights];
    newHighlights[index] = value;
    setForm({ ...form, highlights: newHighlights });
  };

  const addHighlight = () => {
    setForm({ ...form, highlights: [...form.highlights, ""] });
  };

  const removeHighlight = (index) => {
    const newHighlights = form.highlights.filter((_, i) => i !== index);
    setForm({ ...form, highlights: newHighlights });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editData) {
        await API.put(`/admin/courses/${editData._id}`, form);
      } else {
        await API.post("/admin/courses", form);
      }
      fetchCourses();
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-4">
      <h2 className="text-xl mb-4">{editData ? "Edit Course" : "Add Course"}</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Title */}
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2"
        />

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="ug">UG</option>
          <option value="pg">PG</option>
          <option value="diploma">Diploma</option>
        </select>

        {/* Duration */}
        <select
          name="duration"
          value={form.duration}
          onChange={handleChange}
          className="w-full border p-2"
        >
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
          <option value="3 Years">3 Years</option>
          <option value="4 Years">4 Years</option>
          <option value="5 Years">5 Years</option>
        </select>

        {/* Seats */}
        <input
          type="number"
          name="seat"
          value={form.seat}
          onChange={handleChange}
          placeholder="Seats"
          className="w-full border p-2"
        />

        {/* Eligibility */}
        <input
          name="eligibility"
          value={form.eligibility}
          onChange={handleChange}
          placeholder="Eligibility"
          className="w-full border p-2"
        />

        {/* Highlights */}
        <div>
          <label className="font-semibold">Highlights:</label>
          {form.highlights.map((highlight, index) => (
            <div key={index} className="flex gap-2 mt-1">
              <input
                value={highlight}
                onChange={(e) => handleHighlightChange(index, e.target.value)}
                placeholder={`Highlight ${index + 1}`}
                className="flex-1 border p-2"
              />
              <button
                type="button"
                onClick={() => removeHighlight(index)}
                className="bg-red-500 text-white px-2 rounded"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addHighlight}
            className="bg-blue-500 text-white px-3 py-1 mt-2 rounded"
          >
            Add Highlight
          </button>
        </div>

        {/* College ID */}
        <input
          name="college"
          value={form.college}
          onChange={handleChange}
          placeholder="College ID"
          className="w-full border p-2"
        />

        <div className="space-x-2 mt-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            {editData ? "Update" : "Create"}
          </button>

          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
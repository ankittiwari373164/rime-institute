import { useEffect, useState } from "react";
import API from "../../services/api";
import AddCourse from "./AddCourse";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data.data);
  };

  const deleteCourse = async (id) => {
    await API.delete(`/admin/courses/${id}`);
    fetchCourses();
  };

  const handleEdit = (course) => {
    setEditData(course);
    setShowForm(true);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <button
        onClick={() => {
          setShowForm(true);
          setEditData(null);
        }}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Course
      </button>

      {/* FORM */}
      {showForm && (
        <AddCourse
          fetchCourses={fetchCourses}
          setShowForm={setShowForm}
          editData={editData}
        />
      )}

      {/* TABLE */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Duration</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr key={course._id} className="border-t">
                <td className="p-3">{course.title}</td>
                <td className="p-3">{course.category}</td>
                <td className="p-3">{course.duration}</td>

                <td className="p-3 space-x-2">
                  <button
                    onClick={() => handleEdit(course)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Courses;
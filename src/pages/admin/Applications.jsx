import { useEffect, useState } from "react";
import API from "../../services/api";

function Applications() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/admin/applications", {
        withCredentials: true, // 🔑 send JWT cookie
      });
      setData(res.data.data);
    } catch (err) {
      console.error("Failed to fetch applications:", err);
    }
  };

  const deleteApp = async (id) => {
    try {
      await API.delete(`/admin/applications/${id}`, {
        withCredentials: true,
      });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Applications</h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Course</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Address</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-t">
                <td className="p-3">{item.fullName}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>

                {/* 🔥 IMPORTANT FIX */}
                <td className="p-3">{item.course?.title || item.course}</td>

                <td className="p-3">{item.gender}</td>
                <td className="p-3">{item.address}</td>

                <td className="p-3">
                  <button
                    onClick={() => deleteApp(item._id)}
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

export default Applications;

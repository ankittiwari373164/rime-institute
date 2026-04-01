import { useEffect, useState } from "react";
import API from "../../services/api";

function StudentEnquiries() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await API.get("/enquiry");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching enquiries:", error);
    }
  };

  const deleteEnquiry = async (id) => {
    try {
      await API.delete(`/enquiry/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting enquiry:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Student Enquiries
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">City</th>
              <th className="p-3">State</th>
              <th className="p-3">Institute</th>
              <th className="p-3">Course</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.city}</td>
                  <td className="p-3">{item.state}</td>
                  <td className="p-3">{item.institute}</td>
                  <td className="p-3">{item.course}</td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteEnquiry(item._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:opacity-90"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No enquiries found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentEnquiries;
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FeeStructure = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const server_url = import.meta.env.VITE_SERVER_URL;

  const fetchData = async () => {
    const response = await axios.get(`${server_url}/api/course/fee`);
    setData((response).data)
    setLoading(false);
  }

  const feeStructure = [
    {
      program: "B.Tech (All Branches)",
      tuitionFee: "₹90,000",
      otherFees: "₹5,000",
      total: "₹95,000",
      note: "Per year",
    },
    {
      program: "B.Tech (Mechanical Engineering)",
      tuitionFee: "₹70,000",
      otherFees: "₹5,000",
      total: "₹75,000",
      note: "Per year",
    },
    {
      program: "B.Tech (Electronics Engineering)",
      tuitionFee: "₹80,000",
      otherFees: "₹5,000",
      total: "₹85,000",
      note: "Per year",
    },
    {
      program: "BBA",
      tuitionFee: "₹70,000",
      otherFees: "₹5,000",
      total: "₹75,000",
      note: "Per year",
    },
    {
      program: "BCA",
      tuitionFee: "₹70,000",
      otherFees: "₹5,000",
      total: "₹75,000",
      note: "Per year",
    },
    {
      program: "MBA",
      tuitionFee: "₹1,00,000",
      otherFees: "₹5,000",
      total: "₹1,05,000",
      note: "Per year",
    },
    {
      program: "MCA",
      tuitionFee: "₹70,000",
      otherFees: "₹5,000",
      total: "₹75,000",
      note: "Per year",
    },
    {
      program: "B.ED",
      tuitionFee: "₹48,000",
      otherFees: "₹5,000",
      total: "₹53,000",
      note: "Per year",
    },
    {
      program: "M.ED",
      tuitionFee: "₹45,000",
      otherFees: "₹4,000",
      total: "₹49,000",
      note: "Per year",
    },
  ];

  useEffect(() => {
    fetchData();
  }, [])


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4 text-blue-900 font-bold">Fee Structure</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent and competitive fee structure for all programs
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Program</th>
                  <th className="px-6 py-4 text-left">Tuition Fee</th>
                  <th className="px-6 py-4 text-left">Other Fees</th>
                  <th className="px-6 py-4 text-left">Total</th>
                  <th className="px-6 py-4 text-left">Note</th>
                </tr>
              </thead>
              <tbody>
                {feeStructure.map((fee, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{fee.program}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.tuitionFee}</td>
                    <td className="px-6 py-4 text-gray-600">{fee.otherFees}</td>
                    <td className="px-6 py-4 font-semibold text-[#C9A961]">{fee.total}</td>
                    <td className="px-6 py-4 text-gray-500 text-sm">{fee.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-blue-50 p-4 text-sm text-gray-600">
            <p>
              <strong>Note:</strong> Hostel and transportation charges are additional. Fees are
              subject to revision. EMI options available.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeeStructure;
import React, { useState } from "react";
import axios from "axios";
import DefaultLayout from "../../layout/DefaultLayout";
import toast from "react-hot-toast";

const AdminAddTrader = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [investorsTotal, setInvestorsTotal] = useState("");
  const [returnPercentage, setReturnPercentage] = useState("");
  const [fees, setFees] = useState("");
  const [minimumAmount, setMinimumAmount] = useState("");
  const [company, setCompany] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // Set base64 image data
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/traders",
        {
          name,
          image,
          company,
          minimumAmount,
          investorsTotal,
          returnPercentage,
          fees,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );
      console.log("Trader added:", response.data);

      toast.success("Trader added successfully!");
      // Clear form fields after submission
      setName("");
      setImage("");
      setInvestorsTotal("");
      setReturnPercentage("");
      setCompany("");
      setMinimumAmount("");
      setFees("");
    } catch (error) {
      console.error("Error adding trader:", error);
      toast.error("Error adding trader. Please try again.");
    }
  };

  return (
    <div className="w-full font-roboto bg-[#01071C] h-screen">
      <DefaultLayout>
        <div className="container mx-auto mt-6 px-4 py-6 shadow-md shadow-[#272f4f] text-slate-300 rounded-md">
          <div className="bg-[#01071C] rounded-md shadow-md shadow-[#272f4f] p-5">
            <h2 className="text-xl font-semibold mb-4">Add New Trader</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
                {image && (
                  <img
                    src={image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-md mb-4"
                  />
                )}
                <input
                  type="number"
                  placeholder="Minimum Amount"
                  value={minimumAmount}
                  onChange={(e) => setMinimumAmount(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />

                <input
                  type="text"
                  placeholder="Company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
                <input
                  type="number"
                  placeholder="Total Investors"
                  value={investorsTotal}
                  onChange={(e) => setInvestorsTotal(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Return Percentage"
                  value={returnPercentage}
                  onChange={(e) => setReturnPercentage(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
                <input
                  type="text"
                  placeholder="Fees"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  className="bg-[#0d1b4d] text-white rounded-md px-4 py-2 border border-[#272f4f] shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#ffb400] text-[#01071C] font-medium rounded-md px-4 py-2 hover:bg-[#e6a700] transition duration-300"
              >
                Add Trader
              </button>
            </form>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default AdminAddTrader;

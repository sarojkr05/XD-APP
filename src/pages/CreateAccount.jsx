import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phone: "000000000",
    email: "Marry@Gmail.com",
    password: "Marry123",
    company: "ABC",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    navigate("/account")
  };

  return (
    <>
    <div className="h-full flex flex-col px-6 py-8 bg-white">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Marry Doe"
          required
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0000000000"
          required
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Marry@Gmail.com"
          required
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Marry123"
          required
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />

        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="ABC"
          className="border border-gray-300 rounded-lg p-3 text-sm"
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold w-full text-sm mt-2"
          >
          Create Account
        </button>
        <div className="border-t pt-3 mt-8 flex items-center justify-between text-gray-600 text-sm">
        <button>
          <i className="fi fi-rr-home text-xl"></i>
        </button>
        <button className="text-xl">&lt;</button>
        <span className="font-medium">2 of 4</span>
        <button className="text-xl">&gt;</button>
      </div>
      </form>
    </div>
    </>
  );
};

export default CreateAccount;

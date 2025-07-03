import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "Marry@Gmail.com", password: "Marry123" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in:", formData);
    navigate("/account"); // redirect after login
  };

  return (
    <div className="h-full flex flex-col justify-between px-6 py-8 bg-white">
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Signin to your <br /> PopX account
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="text-sm font-medium text-purple-600 mb-1 block">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Marry@Gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
              required
            />
          </div>

          <div className="text-left">
            <label className="text-sm font-medium text-purple-600 mb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Marry123"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-3 rounded-lg font-semibold text-sm cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>

      <div className="border-t pt-3 mt-8 flex items-center justify-between text-gray-600 text-sm">
        <button>
          <i className="fi fi-rr-home text-xl"></i>
        </button>
        <button className="text-xl">&lt;</button>
        <span className="font-medium">3 of 4</span>
        <button className="text-xl">&gt;</button>
      </div>
    </div>
  );
};

export default Login;

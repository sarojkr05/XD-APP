import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="h-full flex flex-col px-6 py-10 text-center bg-gray-100">
      <div className="flex justify-center mb-10">
        <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-sm">
          1
        </div>
      </div>

      <div className="flex-grow" />

      <div className="flex flex-col items-center space-y-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-sm text-gray-500 mt-1">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full space-y-3 mt-4">
            <Link
                to={"/create-account"}
            >
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-sm">
            Create Account
          </button>
            </Link>
            <Link to={"/login"}>
          <button className="w-full bg-purple-100 hover:bg-purple-200 text-purple-800 py-3 rounded-lg font-semibold text-sm">
            Already Registered? Login
          </button>
        </Link>
        <div className="border-t pt-3 mt-8 flex items-center justify-between text-gray-600 text-sm">
        <button>
          <i className="fi fi-rr-home text-xl"></i>
        </button>
        <button className="text-xl">&lt;</button>
        <span className="font-medium">1 of 4</span>
        <button className="text-xl">&gt;</button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

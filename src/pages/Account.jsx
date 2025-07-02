const Account = () => {
  return (
    <div className="h-full flex flex-col justify-between px-6 py-8 bg-white text-center">
      {/* Top Content */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>

        {/* Profile Section */}
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Marry Doe</h3>
          <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
        </div>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam
          Nonumy Nibh Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <div className="border-t pt-3 flex items-center justify-between text-gray-600 text-sm">
        <button>
          <i className="fi fi-rr-home text-xl"></i> {/* Replace with Heroicons or Lucide */}
        </button>
        <button className="text-xl">&lt;</button>
        <span className="font-medium">4 of 4</span>
        <button className="text-xl">&gt;</button>
      </div>
    </div>
  );
};

export default Account;

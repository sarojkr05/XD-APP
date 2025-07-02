const MobileFrame = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[375px] h-[812px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;

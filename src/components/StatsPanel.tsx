const StatsPanel = () => {
  return (
    <div className="flex space-x-3 mx-4">
      <div className="p-4 flex flex-col w-full border-2 space-y-2 border-gray-200 py-4 px-3 rounded-2xl">
        <span className="text-[#999999] text-sm font-medium">
          Total Earnings
        </span>
        <span className="text-[#8134AF] text-xl font-semibold">$1,25,000</span>
      </div>
      <div className=" p-4 flex flex-col w-full border-2 space-y-2 border-gray-200 py-4 px-3 rounded-2xl">
        <span className="text-[#999999] text-sm font-medium">
          Payment Awaited
        </span>
        <span className="text-[#8134AF] text-xl font-semibold">$25,000</span>
      </div>
      <div className="p-4 flex flex-col w-full border-2 space-y-2 border-gray-200 py-4 px-3 rounded-2xl">
        <span className="text-[#999999] text-sm font-medium">
          Payment Overdue
        </span>
        <span className="text-[#8134AF] text-xl font-semibold">$25,000</span>
      </div>
    </div>
  );
};

export default StatsPanel;

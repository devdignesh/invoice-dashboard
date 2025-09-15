type StatItem = {
  label: string;
  value: string;
};

const StatsPanel = ({ stats }: { stats: StatItem[] }) => {
  return (
    <section className="flex flex-wrap gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`p-4 flex flex-col border-2 space-y-2 border-gray-200 rounded-2xl
            ${idx === 0 ? "w-full md:w-1/3" : "flex-1 md:w-1/3"}`}
        >
          <span className="text-[#999999] text-sm font-medium">
            {stat.label}
          </span>
          <span
            className={`text-[#8134AF]  font-semibold ${
              idx != 0 ? "text-lg" : "text-xl"
            }`}
          >
            {stat.value}
          </span>
        </div>
      ))}
    </section>
  );
};

export default StatsPanel;

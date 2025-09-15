import React from "react";

type DataPoint = {
  month: string;
  income: number;
  momGrowth: number;
};

const IncomeTrendChart = ({ data }: { data: DataPoint[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(600);
  const height = 300;
  const padding = 50;

  React.useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIncome = Math.max(...data.map((d) => d.income));

  const barWidth = (width - padding * 2) / data.length - 10;

  return (
    <div className="p-4 flex flex-col border-2 space-y-2 border-gray-200 py-4 px-3 rounded-2xl">
      <div className="flex flex-col">
        <span className="text-[#6B7280] font-medium">Income Trend</span>
        <span className="text-[#6B7280] text-sm font-normal">
          Your monthly income and growth for the last 6 months.
        </span>
      </div>
      <div
        ref={containerRef}
        style={{ width: "100%" }}
        className="w-full max-w-xl mx-auto"
      >
        <svg width={width} height={height} className="bg-white">
          {/* left y axis (income) */}
          {Array.from({ length: 5 }).map((_, i) => {
            const y = padding + ((height - padding * 2) / 4) * i;
            const incomeLabel = Math.round(maxIncome - (maxIncome / 4) * i);
            return (
              <g key={i}>
                <line
                  x1={padding}
                  y1={y}
                  x2={width - padding}
                  y2={y}
                  stroke="#eee"
                />
                <text
                  x={padding - 10}
                  y={y + 4}
                  textAnchor="end"
                  fontSize="12"
                  fill="#9489a8"
                  className="font-semibold"
                >
                  ${incomeLabel / 1000}k
                </text>
              </g>
            );
          })}

          {/* right y axis (percentage) */}
          {[-100, -50, 0, 50, 100].map((pct, i) => {
            const y =
              padding +
              ((height - padding * 2) * (100 - (pct + 100) / 2)) / 100;
            return (
              <text
                key={i}
                x={width - padding + 10}
                y={y + 4}
                fontSize="12"
                fill="#9489a8"
                className="font-semibold"
              >
                {pct}%
              </text>
            );
          })}

          {/* x axis labels */}
          {data.map((d, i) => {
            const x = padding + i * (barWidth + 10) + barWidth / 2;
            return (
              <text
                key={i}
                x={x}
                y={height - padding + 20}
                textAnchor="middle"
                fontSize="13"
                fill="#9489a8"
                className="font-semibold"
              >
                {d.month}
              </text>
            );
          })}

          {/* bars */}
          {data.map((d, i) => {
            const x = padding + i * (barWidth + 10);
            const barHeight = ((height - padding * 2) * d.income) / maxIncome;
            return (
              <rect
                key={i}
                x={x}
                y={height - padding - barHeight}
                width={barWidth}
                height={barHeight}
                fill="#a743ef"
                rx={10}
              />
            );
          })}

          {/* line (MoM growth) */}
          <polyline
            fill="none"
            stroke="#7f1e1d"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={data
              .map((d, i) => {
                const x = padding + i * (barWidth + 10) + barWidth / 2;
                const y =
                  padding +
                  ((height - padding * 2) * (100 - (d.momGrowth + 100) / 2)) /
                    100;
                return `${x},${y}`;
              })
              .join(" ")}
          />
        </svg>

        <div className="flex justify-center items-center space-x-2">
          <div className="flex space-x-1.5 items-center justify-center">
            <div className="h-4 w-4 bg-[#a743ef] rounded"></div>
            <span className="text-[#a743ef] font-semibold">income</span>
          </div>
          <div className="flex items-center">
            <div className="h-0.5 w-2 flex-1 bg-[#7f1e1d]" />
            <div className="w-2 h-2 rounded-full border-2 border-[#7f1e1d] bg-white flex items-center justify-center"></div>
            <div className="h-0.5 flex-1 bg-[#7f1e1d]" />
          </div>
          <span className="text-[#7f1e1d] font-medium">momGrowth</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeTrendChart;

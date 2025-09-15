import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, subMonths, subYears } from "date-fns";
import { CalIcon } from "../assets/Icons/CalIcon";

function DateRangeSelector() {
  const [selectedRange, setSelectedRange] = useState("3Month");
  const [customStartDate, setCustomStartDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const today = new Date();
  const todayFormatted = format(today, "dd:MM:yyyy");

  const predefinedRanges = {
    "1Month": [subMonths(today, 1), today],
    "3Month": [subMonths(today, 3), today],
    "1Year": [subYears(today, 1), today],
  };

  const handlePredefinedSelect = (range: string) => {
    setSelectedRange(range);
    setCustomStartDate(null);
    setIsDatePickerOpen(false);
  };

  const handleCustomSelect = () => {
    setSelectedRange("Custom");
    setIsDatePickerOpen(true);
  };

  const displayRange =
    selectedRange === "Custom"
      ? customStartDate
        ? `${format(customStartDate, "dd:MM:yyyy")} - ${todayFormatted}`
        : "Select a start date"
      : `${format(
          predefinedRanges[selectedRange as keyof typeof predefinedRanges][0],
          "dd:MM:yyyy"
        )} - ${format(
          predefinedRanges[selectedRange as keyof typeof predefinedRanges][1],
          "dd:MM:yyyy"
        )}`;

  return (
    <div className="m-4 p-4 flex flex-col border-2 space-y-4 border-gray-200 py-4 px-3 rounded-2xl">
      <div className="flex justify-between">
        <span className="text-[#999999] text-sm font-medium">Time Period</span>
        <span className="text-[#999999]">{displayRange}</span>
      </div>

      <div className="flex space-x-2">
        {["1Month", "3Month", "1Year"].map((range) => (
          <span
            key={range}
            onClick={() => handlePredefinedSelect(range)}
            className={`px-3 py-1 text-sm rounded-full border font-normal cursor-pointer ${
              selectedRange === range
                ? "text-[#9747FF]  border border-[#F3E8FF] bg-[#fbf5fb]"
                : "border-gray-200 text-[#999999]"
            }`}
          >
            {range}
          </span>
        ))}

        <div className="relative">
          <div
            onClick={handleCustomSelect}
            className={`px-3 py-1 text-sm rounded-full font-normal cursor-pointer flex items-center gap-x-1 ${
              selectedRange === "Custom"
                ? "  text-[#9747FF]  border-2 border-[#F3E8FF] bg-[#fbf5fb]"
                : "border-gray-200 border text-[#999999]"
            }`}
          >
            <CalIcon /> Custom
          </div>

          {selectedRange === "Custom" && isDatePickerOpen && (
            <div className="absolute top-full mt-2 z-10">
              <DatePicker
                selected={customStartDate}
                onChange={(date) => {
                  setCustomStartDate(date);
                  setIsDatePickerOpen(false);
                }}
                maxDate={today}
                inline
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DateRangeSelector;

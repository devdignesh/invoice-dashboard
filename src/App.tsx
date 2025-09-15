import Header from "./components/Header";
import { UploadInvoidIcon } from "./assets/Icons/UploadInvoidIcon";
import DateRangeSelector from "./components/DateRangeSelector";
import StatsPanel from "./components/StatsPanel";

export default function App() {
  return (
    <div className="bg-[#e8cde7]">
      <div className="min-h-screen max-w-7xl mx-auto font-roboto ">
        <Header />
        <div className="bg-white flex flex-col h-screen rounded-t-4xl">
          <div className=" space-y-2 cursor-pointer bg-[#F2F2F2] m-4 p-4 rounded-4x flex flex-col justify-center items-center rounded-3xl ">
            <UploadInvoidIcon />
            <div className="flex space-y-2 flex-col">
              <span className="text-2xl font-roboto font-bold bg-gradient-to-b from-[#DD2A7B] via-[#9747FF] to-[#334CCA] text-transparent bg-clip-text">
                Create New Invoice
              </span>
              <span className="text-[#999999] text-xs">
                Start by creating and sending new invoice
              </span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <span className="text-[#8134AF] text-sm">
              Or Upload an existing invoice and set payment reminder
            </span>
          </div>
          <DateRangeSelector />

          <StatsPanel />
        </div>
      </div>
    </div>
  );
}

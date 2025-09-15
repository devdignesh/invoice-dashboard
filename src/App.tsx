import Header from "./components/Header";
import DateRangeSelector from "./components/DateRangeSelector";
import StatsPanel from "./components/StatsPanel";
import { incomeData, invoicesData, statsData } from "./data";
import InvoiceList from "./components/InvoiceList";
import CreateInvoice from "./components/CreateInvoice";
import IncomeTrendChart from "./components/IncomeTrendChart";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e7cde8]">
      <div className="max-w-7xl mx-auto font-roboto ">
        <Header />
        <div className="bg-white flex flex-col min-h-screen rounded-t-4xl p-4 space-y-6">
          <CreateInvoice />
          <div className="flex justify-center items-center">
            <span className="text-[#8134AF] text-xs sm:text-sm text-center">
              Or Upload an existing invoice and set payment reminder
            </span>
          </div>
          <DateRangeSelector />
          <StatsPanel stats={statsData} />
          <IncomeTrendChart data={incomeData} />
          <InvoiceList invoices={invoicesData} />
        </div>
      </div>
    </div>
  );
}

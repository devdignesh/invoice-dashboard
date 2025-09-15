import { useState } from "react";
import { DropdownIcon } from "@/assets/Icons/DropdownIcon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { statusOptions } from "@/data";

type Invoice = {
  id: number;
  client: string;
  amount: string;
  dueDate: string;
  status: string | null;
};

// custom colors for invoice status
const statusColors: Record<string, string> = {
  Paid: "bg-[#9CEFB8] text-[#34C759]",
  Unpaid: "bg-[#F2F2F2] text-[#999999]",
  Draft: "bg-[#F2F2F2] text-[#999999]",
  Overdue: "bg-[#FFB1B1] text-[#FF2D55]",
  Awaited: "bg-[#FFFAE5] text-[#FFCC00]",
  "Partially Paid": "bg-[#FFFAE5] text-[#FFCC00]",
  Disputed: "bg-[#FFB1B1] text-[#FF2D55]",
};

const InvoiceList = ({ invoices }: { invoices: Invoice[] }) => {
  const [invoiceData, setInvoiceData] = useState(invoices);
  const [isOpen, setIsOpen] = useState(true);

  // update status though dropdown menu
  const updateStatus = (id: number, newStatus: string) => {
    const updated = invoiceData.map((invoice) =>
      invoice.id === id ? { ...invoice, status: newStatus } : invoice
    );
    setInvoiceData(updated);
  };

  return (
    <section className="flex flex-col gap-y-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[#999999] font-semibold text-base">
          Your Invoices
        </span>
        <div
          className={`px-4 py-2 transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        >
          <DropdownIcon fill="black" />
        </div>
      </div>
      {isOpen && (
        <div className="space-y-4">
          {invoiceData.map((invoice) => (
            <div
              key={invoice.id}
              className="p-4 flex justify-between items-center border-2 border-gray-200 rounded-2xl"
            >
              <div className="flex flex-col space-y-1">
                <span className="text-[#6B7280] font-medium text-sm">
                  {invoice.client}
                </span>
                <div className="flex space-x-2 text-[#999999] text-sm">
                  <span>{invoice.amount}</span>
                  <span>Due: {invoice.dueDate}</span>
                </div>
              </div>

              {invoice.status ? (
                <span
                  className={`px-3 py-1 rounded-2xl text-sm font-medium ${
                    statusColors[invoice.status] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {invoice.status}
                </span>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="bg-[#8134AF] rounded-3xl px-4 py-1.5 flex items-center space-x-2 cursor-pointer">
                      <span className="text-sm text-white font-medium">
                        Update Status
                      </span>
                      <DropdownIcon fill="white" />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select Status</DropdownMenuLabel>
                    {statusOptions.map((status) => (
                      <DropdownMenuRadioItem
                        key={status}
                        value={status}
                        onClick={() => updateStatus(invoice.id, status)}
                      >
                        {status}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default InvoiceList;

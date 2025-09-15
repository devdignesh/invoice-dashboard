export const statsData = [
  { label: "Total Earnings", value: "$1,25,000" },
  { label: "Payment Awaited", value: "$25,000" },
  { label: "Payment Overdue", value: "$25,000" },
];

export const statusOptions = [
  "Unpaid",
  "Disputed",
  "Partially Paid",
  "Paid",
  "Overdue",
  "Awaited",
  "Draft",
];

export const invoicesData = [
  {
    id: 1,
    client: "ABC Corp",
    amount: "₹1,25,000",
    dueDate: "2024-06-15",
    status: "Paid",
  },
  {
    id: 2,
    client: "XYZ Ltd",
    amount: "₹75,000",
    dueDate: "2024-06-20",
    status: "Unpaid",
  },
  {
    id: 3,
    client: "Acme Inc",
    amount: "₹2,00,000",
    dueDate: "2024-07-01",
    status: null,
  },
  {
    id: 4,
    client: "Globex",
    amount: "₹50,000",
    dueDate: "2024-06-25",
    status: "Draft",
  },
  {
    id: 5,
    client: "Initech",
    amount: "₹90,000",
    dueDate: "2024-06-18",
    status: "Overdue",
  },
  {
    id: 6,
    client: "Umbrella Corp",
    amount: "₹1,10,000",
    dueDate: "2024-07-10",
    status: null,
  },
  {
    id: 7,
    client: "Stark Industries",
    amount: "₹3,00,000",
    dueDate: "2024-06-30",
    status: "Paid",
  },
  {
    id: 8,
    client: "Wayne Enterprises",
    amount: "₹80,000",
    dueDate: "2024-07-05",
    status: "Awaited",
  },
  {
    id: 9,
    client: "Cyberdyne",
    amount: "₹1,50,000",
    dueDate: "2024-07-12",
    status: null,
  },
  {
    id: 10,
    client: "Wonka Industries",
    amount: "₹45,000",
    dueDate: "2024-06-28",
    status: "Partially Paid",
  },
  {
    id: 11,
    client: "Tyrell Corp",
    amount: "₹2,50,000",
    dueDate: "2024-06-22",
    status: "Disputed",
  },
  {
    id: 12,
    client: "Oscorp",
    amount: "₹1,75,000",
    dueDate: "2024-07-15",
    status: null,
  },
];

export const incomeData = [
  { month: "Jan", income: 4000, momGrowth: 20 },
  { month: "Feb", income: 5000, momGrowth: 30 },
  { month: "Mar", income: 7000, momGrowth: 25 },
  { month: "Apr", income: 3000, momGrowth: -10 },
  { month: "May", income: 6000, momGrowth: 50 },
  { month: "Jun", income: 2000, momGrowth: -100 },
];

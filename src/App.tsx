import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import OrderTable from "./components/OrderTable";
import { Order, OrderStatus } from "./types";

const orders: Order[] = [
  {
    id: 1,
    customerName: "Alice Johnson",
    status: "New",
    items: ["Laptop", "Mouse"],
    createdAt: "2025-01-20",
  },
  {
    id: 2,
    customerName: "Bob Smith",
    status: "Delivering",
    items: ["Keyboard"],
    createdAt: "2025-01-18",
  },
  {
    id: 3,
    customerName: "Carol White",
    status: "Delivered",
    items: ["Monitor", "Headphones", "USB Cable"],
    createdAt: "2025-01-15",
  },
  {
    id: 4,
    customerName: "David Brown",
    status: "Picking",
    items: ["Printer", "Paper"],
    createdAt: "2025-01-19",
  },
  {
    id: 5,
    customerName: "Eva Green",
    status: "New",
    items: ["Tablet", "Charger"],
    createdAt: "2025-01-21",
  },
  {
    id: 6,
    customerName: "Frank Harris",
    status: "Delivered",
    items: ["Phone", "Case"],
    createdAt: "2025-01-14",
  },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // حفظ حالة darkMode في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#1c1c1d]" : "bg-white"}`}>
      <div className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <SearchFilter
          darkMode={darkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <OrderTable
          darkMode={darkMode}
          orders={orders}
          statusFilter={statusFilter}
          searchQuery={searchQuery}
          sortDirection={sortDirection}
        />
      </div>
    </div>
  );
}

export default App;




import { Search, ArrowUpDown } from "lucide-react";
import { OrderStatus } from "../types";

interface SearchFilterProps {
  darkMode: boolean;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  statusFilter: OrderStatus | "all";
  setStatusFilter: (value: OrderStatus | "all") => void;
  sortDirection: "asc" | "desc";
  setSortDirection: (value: "asc" | "desc") => void;
}

function SearchFilter({
  darkMode,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  sortDirection,
  setSortDirection,
}: SearchFilterProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Input Search */}
      <div className="relative flex-1">
        <Search
          size={20}
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            darkMode ? "text-gray-600" : "text-gray-500"
          }`}
        />
        <input
          type="text"
          placeholder="Search by customer or order ID..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full rounded-lg border border-t-0 border-e-0 border-s-0 py-2 pl-10 pr-4 focus:border-[#383838] ${
            darkMode
              ? "text-gray-200 border-[#3f3f3f] hover:bg-[#3f3f3f] bg-[#2c2c2c]"
              : "bg-gray-50 border-gray-300 hover:bg-gray-100 text-gray-600"
          }`}
        />
      </div>

      {/* Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "all")}
        className={`rounded-lg border px-4 py-2 focus:border-gray-500 ${
          darkMode
            ? "border-[#3f3f3f] hover:bg-[#3f3f3f] bg-[#2c2c2c] text-gray-400"
            : "text-gray-800 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100"
        }`}
      >
        <option value="all">All Status</option>
        <option value="New">New</option>
        <option value="Picking">Picking</option>
        <option value="Delivering">Delivering</option>
        <option value="Delivered">Delivered</option>
      </select>

      {/* Sort Button */}
      <button
        onClick={() => setSortDirection(sortDirection === "asc" ? "desc" : "asc")}
        className={`flex items-center gap-2 rounded-lg px-4 py-2 focus:border-gray-500 ${
          darkMode
            ? "border-[#3f3f3f] hover:bg-[#3f3f3f] bg-[#2c2c2c] text-gray-400"
            : "text-gray-800 dark:bg-gray-50 dark:text-gray-700 dark:hover:bg-gray-100"
        }`}
      >
        <ArrowUpDown size={18} />
        Sort by Date
      </button>
    </div>
  );
}

export default SearchFilter;


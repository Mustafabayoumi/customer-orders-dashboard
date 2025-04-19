

import { useMemo } from "react";
import { Order, OrderStatus } from "../types";

const statusColors: Record<OrderStatus, string> = {
    New: "bg-blue-100 text-blue-800",
    Picking: "bg-yellow-100 text-yellow-800",
    Delivering: "bg-purple-100 text-purple-800",
    Delivered: "bg-green-100 text-green-800",
};

interface OrderTableProps {
    darkMode: boolean;
    orders: Order[];
    statusFilter: OrderStatus | "all";
    searchQuery: string;
    sortDirection: "asc" | "desc";
}

function OrderTable({ darkMode, orders, statusFilter, searchQuery, sortDirection }: OrderTableProps) {
    const filteredOrders = useMemo(() => {
        return orders
            .filter((order) => {
            const matchesStatus = statusFilter === "all" || order.status === statusFilter;
            const matchesSearch =
                order.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                order.id.toString().includes(searchQuery);
            return matchesStatus && matchesSearch;
    })
        .sort((a, b) => {
            const dateA = new Date(a.createdAt).getTime();
            const dateB = new Date(b.createdAt).getTime();
            return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
        });
    }, [orders, statusFilter, searchQuery, sortDirection]);
    
    return (
    <>
    <div className={`overflow-x-auto rounded-lg border ${ darkMode ?  "border-gray-900":"border-gray-200"}`}>
        <table className="min-w-full divide-y dark:divide-gray-900">
            <thead 
        className={`
        ${darkMode ? "text-gray-100 border-[#3f3f3f] hover:bg-[#3f3f3f] bg-[#2c2c2c]":
        "bg-gray-100 border-gray-300 hover:bg-gray-100 text-[#868686]"}`}
            >
        <tr>
            <th className="px-6 py-3 text-left font-semibold">Order ID</th>
            <th className="px-6 py-3 text-left font-semibold">Customer</th>
            <th className="px-6 py-3 text-left font-semibold">Status</th>
            <th className="px-6 py-3 text-left font-semibold">Items</th>
            <th className="px-6 py-3 text-left font-semibold">Created At</th>
        </tr>
</thead>
<tbody className={` ${darkMode ? "bg-[#3f3f3f]":"bg-[#f3f3f3]"}`}>
    {filteredOrders.length === 0 ? (
        <tr>
            <td colSpan={5} className="px-6 py-4 text-center">
                No orders found
            </td>
        </tr>
    ) : (
        filteredOrders.map((order) => (
            <tr
                key={order.id}
                className={` ${darkMode ?" text-gray-50 hover:bg-[#4b4b4b] odd:bg-[#555555] even:bg-[#3f3f3f] hover:odd:bg-[#727272] hover:even:bg-[#464545]":"text-gray-950 odd:bg-white even:bg-[#f3f3f3] hover:odd:bg-[#fafafa] hover:even:bg-[#e9e8e8]" }`}
            >
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customerName}</td>
                <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-sm ${statusColors[order.status]}`}>
                        {order.status}
                    </span>
                </td>
                <td className="px-6 py-4">{order.items.join(", ")}</td>
                <td className="px-6 py-4">{order.createdAt}</td>
            </tr>
        ))
    )}
        </tbody>
    </table>
</div >
</>

);
}

export default OrderTable;


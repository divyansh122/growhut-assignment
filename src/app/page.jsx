"use client";

import { useState } from "react";
import Sidebar from "../components/SideBar";
import FilterBar from "../components/FilterBar";
import OrderTable from "../components/OrderTable";
import FilterChip from "../components/FilterChip";

function Home() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      date: "23-05-2025",
      orderId: "V-545454",
      dealership: "AK Motors",
      customerName: "Aman upadhyay",
      serviceType: "General Service",
      modeOfOrder: "Online",
      status: "In progress",
    },
    {
      id: 2,
      date: "23-05-2025",
      orderId: "V-545454",
      dealership: "AK Motors",
      customerName: "Aman upadhyay",
      serviceType: "General Service",
      modeOfOrder: "Offline",
      status: "In progress",
    },
    {
      id: 3,
      date: "23-05-2025",
      orderId: "V-545454",
      dealership: "AK Motors",
      customerName: "Divyansh Gupta",
      serviceType: "General Service",
      modeOfOrder: "Online",
      status: "Completed",
    },
    {
      id: 4,
      date: "30-05-2025",
      orderId: "V-545324",
      dealership: "SR Motors",
      customerName: "Rahul Singh",
      serviceType: "Express Fix",
      modeOfOrder: "Online",
      status: "In progress",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    dealership: "",
    serviceType: "",
    modeOfOrder: "",
    status: "",
  });
  const [activeFilters, setActiveFilters] = useState([]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (newFilters) => {
    // Update only the changed filter, keeping other filters empty unless explicitly set
    const updatedFilters = {
      ...filters,
      ...newFilters, // Overwrite only the changed filter
    };
    setFilters(updatedFilters);

    // Update active filters based on non-empty values in updatedFilters
    const newActiveFilters = Object.entries(updatedFilters)
      .filter(([_, value]) => value !== "") // Only include non-empty filters
      .map(([key, value]) => ({ key, value }));

    setActiveFilters(newActiveFilters);
  };

  const handleRemoveFilter = (key, value) => {
    const newFilters = { ...filters, [key]: "" };
    setFilters(newFilters);
    setActiveFilters(
      activeFilters.filter((f) => f.key !== key || f.value !== value)
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = order.customerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilters = Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      return order[key] === value;
    });
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-1 p-6 bg-gray-50 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="flex justify-between items-center mb-6 bg-white shadow p-4 rounded-lg">
          <h1 className="text-2xl font-semibold">All Order</h1>
          <div className="flex items-center space-x-4">
            {/* Notifications (Non-functional, as per task requirements) */}
            <div className="text-gray-500 flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
              <span className="relative">
                <span className=" inline-flex">12</span>
              </span>
            </div>
            {/* AK Motors (Non-functional, as per task requirements) */}
            <div className="text-gray-500 flex items-center space-x-1">
              AK Motors
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>

        <FilterBar
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
        />

        <div className="mb-4">
          {activeFilters.map((filter, index) => (
            <FilterChip
              key={index}
              label={filter.key}
              value={filter.value}
              onRemove={() => handleRemoveFilter(filter.key, filter.value)}
            />
          ))}
        </div>

        <OrderTable orders={filteredOrders} />
      </div>
    </div>
  );
}

export default Home;

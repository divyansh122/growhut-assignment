import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function FilterBar({ onSearch, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    dealership: "",
    serviceType: "",
    modeOfOrder: "",
    status: "",
  });

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { [key]: value };
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4 flex-1">
          <h3>
            <strong> Filter By :</strong>{" "}
          </h3>
          <select
            title="dealership"
            value={filters.dealership}
            onChange={(e) => handleFilterChange("dealership", e.target.value)}
            className="rounded-lg border-gray-300 border px-4 py-2"
          >
            <option value="">Dealership: All</option>
            <option value="AK Motors">AK Motors</option>
            <option value="SR Motors">SR Motors</option>
          </select>
          <select
            title="serviceType"
            value={filters.serviceType}
            onChange={(e) => handleFilterChange("serviceType", e.target.value)}
            className="rounded-lg border-gray-300 border px-4 py-2"
          >
            <option value="">Service type: All</option>
            <option value="General Service">General Service</option>
            <option value="Express Fix">Express Fix</option>
            <option value="Bike Care">Bike Care</option>
          </select>
          <select
            title="modeOfOrder"
            value={filters.modeOfOrder}
            onChange={(e) => handleFilterChange("modeOfOrder", e.target.value)}
            className="rounded-lg border-gray-300 border px-4 py-2"
          >
            <option value="">Mode of order: All</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
          <select
            title="status"
            value={filters.status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
            className="rounded-lg border-gray-300 border px-4 py-2"
          >
            <option value="">Status: All</option>
            <option value="In progress">In progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;

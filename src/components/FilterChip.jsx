function FilterChip({ label, value, onRemove }) {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 rounded-full mr-2 mb-2">
      <span>{`${label}: ${value}`}</span>
      <button
        onClick={onRemove}
        className="ml-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
    </div>
  );
}

export default FilterChip;

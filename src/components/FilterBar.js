import React from "react";

function FilterBar({ onFilter }) {
  const botClasses = ["All", "Support", "Medic", "Witch", "Defender", "Assault"];

  return (
    <div className="filter-bar">
      <span>Filter by class:</span>
      {botClasses.map((botClass) => (
        <button key={botClass} onClick={() => onFilter(botClass === "All" ? "" : botClass)}>
          {botClass}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;

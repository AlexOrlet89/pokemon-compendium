import React from 'react';

export default function TypeSelector({ types, selectedType, setSelectedType }) {
  return (
    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}

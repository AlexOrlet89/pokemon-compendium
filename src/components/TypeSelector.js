import React from 'react';

export default function TypeSelector({ types }) {
  return (
    <select>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}

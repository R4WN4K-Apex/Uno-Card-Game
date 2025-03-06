"use client";

import { useState } from "react";

const CardTable = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      rotation: Math.random() * 40 - 20, // Random rotation between -20 to 20 degrees
      zIndex: Math.floor(Math.random() * 10), // Random z-index
    }))
  );
  return (
    <div>
      <div className="relative flex items-center justify-center h-screen bg-gray-100">
        {items.map((item) => (
          <div
            key={item.id}
            className="absolute w-32 h-32 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg transition-transform"
            style={{
              transform: `rotate(${item.rotation}deg)`,
              zIndex: item.zIndex,
            }}
          >
            Card {item.id + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardTable;

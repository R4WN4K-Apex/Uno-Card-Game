"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

const StackSwipe = () => {
  const [items, setItems] = useState(cards);

  const handleSwipe = (swipedItem: string) => {
    setItems((prev) => [...prev.slice(1), prev[0]]); // Move first item to the back
  };

  return (
    <div className="relative w-80 h-96 flex justify-center items-center">
      {items.map((item, index) => (
        <AnimatePresence key={item}>
          {index === 0 && (
            <motion.div
              key={item}
              className="absolute w-full h-full bg-blue-500 rounded-xl flex justify-center items-center text-white text-xl font-bold shadow-lg"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (Math.abs(info.offset.x) > 100) {
                  handleSwipe(item);
                }
              }}
            >
              {item}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};

export default StackSwipe;

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  x: number;
  y: number;
}

export default function NeuralNetwork() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    const n: Node[] = Array.from({ length: 12 }, () => ({
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
    }));
    setNodes(n);
  }, []);

  if (nodes.length === 0) return null;

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]">
      {nodes.map((a, i) =>
        nodes.slice(i + 1).map((b, j) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > 35) return null;
          return (
            <motion.line
              key={`${i}-${j}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="#F472B6"
              strokeWidth="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.4, 0.1] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity }}
            />
          );
        }),
      )}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="2"
          fill="#C4B5FD"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

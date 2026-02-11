import React from "react";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Hello from App.tsx</h1>
      <p className="text-lg">Count: {count}</p>
      <button
        className="px-4 py-2 rounded-xl shadow bg-blue-500 text-white"
        onClick={() => setCount(count + 1)}
      >
        Add
      </button>
    </div>
  );
}

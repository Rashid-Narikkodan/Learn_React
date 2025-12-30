import { useState } from 'react';

function CountDown() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-4 bg-gray-100 p-6 rounded-lg shadow-md w-max mx-auto mt-10">
      <button
        onClick={() => setCount(count - 1)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        -
      </button>

      <div className="text-2xl font-semibold text-gray-800 w-16 text-center">
        {count}
      </div>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        +
      </button>
    </div>
  );
}

export default CountDown;

import { useState, useEffect } from "react";
import type { User } from "../types/User";
function CounterWithUser() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState<User|null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (count < 1) return;

      setLoading(true);
      setError("");
      setUser(null);

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
        if (!res.ok) throw new Error("User not found");
        const data = await res.json();
        setUser(data);
      } catch (err: unknown) {
        if(err instanceof Error){
            setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-6 mt-10 p-6 bg-gray-100 rounded-lg shadow-md w-96 mx-auto">
      {/* Counter */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setCount(Math.max(count - 1, 1))}
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

      {/* User Info */}
      <div className="w-full bg-white p-4 rounded shadow-inner min-h-30 flex flex-col justify-center items-center">
        {loading && <p className="text-blue-500 font-medium">Loading...</p>}
        {error && <p className="text-red-500 font-medium">{error}</p>}
        {user && (
          <div className="text-center">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CounterWithUser;

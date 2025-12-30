import { useState, useRef } from "react";

function FormExample() {
  // Controlled input state
  const [controlledValue, setControlledValue] = useState("");
  const [error, setError] = useState("");

  // Uncontrolled input ref
  const uncontrolledRef = useRef<HTMLInputElement>(null);

  // Focus input when component mounts
  const controlledInputRef = useRef<HTMLInputElement>(null);
  const focusControlledInput = () => controlledInputRef.current?.focus();
  const focusUncontrolledInput = () => uncontrolledRef.current?.focus();

  // Handle controlled form submit
  const handleControlledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!controlledValue.trim()) {
      setError("Controlled input cannot be empty");
      return;
    }
    console.log("Controlled Input:", controlledValue);
    setError("");
  };

  // Handle uncontrolled form submit
  const handleUncontrolledSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = uncontrolledRef.current?.value;
    if (!value || !value.trim()) {
      alert("Uncontrolled input cannot be empty");
      return;
    }
    console.log("Uncontrolled Input:", value);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10 p-6 bg-gray-100 rounded-lg shadow-md w-96 mx-auto">
      <h2 className="text-xl font-bold">Controlled Form</h2>
      <form
        onSubmit={handleControlledSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <input
          ref={controlledInputRef}
          type="text"
          placeholder="Type something..."
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={focusControlledInput}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Focus Input
          </button>
        </div>
      </form>

      <h2 className="text-xl font-bold mt-6">Uncontrolled Form</h2>
      <form
        onSubmit={handleUncontrolledSubmit}
        className="flex flex-col gap-4 w-full"
      >
        <input
          ref={uncontrolledRef}
          type="text"
          placeholder="Type something..."
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={focusUncontrolledInput}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Focus Input
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormExample;

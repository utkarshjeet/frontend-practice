import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [darkMode, setDarkMode] = useState(false);

  // Function to generate random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let col = "#";
    for (let i = 0; i < 6; i++) {
      col += letters[Math.floor(Math.random() * 16)];
    }
    setColor(col);
  };

  // Function to copy color to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  };

  return (
    <div
      className={`w-full h-screen duration-200 flex flex-col items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{ backgroundColor: color }}
    >
      {/* Dark / Light Toggle */}
      <div className="absolute top-5 right-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg shadow-md font-semibold transition-all"
          style={{
            backgroundColor: darkMode ? "white" : "black",
            color: darkMode ? "black" : "white",
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Display Current Color */}
      <h1 className="text-3xl font-bold drop-shadow-lg mb-6">
        Current Color: {color}
      </h1>

      {/* Buttons */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className={`flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          {/* Default Colors */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          {/* Random Color Button */}
          <button
            onClick={getRandomColor}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            🎲 Random
          </button>

          {/* Copy Color Button */}
          <button
            onClick={copyToClipboard}
            className="outline-none px-4 py-1 rounded-full bg-gray-300 text-black shadow-lg"
          >
            📋 Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

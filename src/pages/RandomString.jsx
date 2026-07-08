import { useState, useCallback, useEffect } from "react";

function RandomString() {
    const [randomString, setRandomString] = useState("");
const generateString = useCallback(() => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let result = "";

  for (let i = 0; i < 10; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  setRandomString(result);
}, []);
useEffect(() => {
  generateString();
}, [generateString]);
    return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 className="text-4xl font-bold text-blue-700 mb-6">
      Random String Generator
    </h1>

    <div className="bg-white p-6 rounded-lg shadow-md text-center w-96">
      <p className="text-lg font-semibold mb-4 break-all">
        {randomString || "Click the button to generate a random string"}
      </p>

      <button
        onClick={generateString}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate String
      </button>
    </div>
  </div>
);
}

export default RandomString;
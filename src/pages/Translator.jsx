import { useState } from "react";
import translateText from "../services/translatorApi";
function Translator() {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState("");
  const handleTranslate = async () => {
  if (!text || !language) {
    setResult("Please enter text and select a language");
    return;
  }

  const translated = await translateText(text, language);
  setResult(translated)};
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Text Translator
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
       <textarea
         className="w-full border rounded-lg p-3 mb-4"
         placeholder="Enter English text here..."
         rows="5"
         value={text}
         onChange={(e) => setText(e.target.value)}
      ></textarea>

        <select
          className="w-full border rounded-lg p-3 mb-4"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="hi">Hindi</option>
          <option value="mr">Marathi</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>

        <button
          onClick={handleTranslate}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Translate
        </button>

        <div className="mt-5 p-4 bg-gray-100 rounded-lg">
          {result || "Translation result will appear here"}
        </div>
      </div>
    </div>
  );
}

export default Translator;
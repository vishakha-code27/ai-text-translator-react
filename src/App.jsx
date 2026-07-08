import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Translator from "./pages/Translator";
import RandomString from "./pages/RandomString";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/translator" element={<Translator />} />
      <Route path="/random" element={<RandomString />} />    </Routes>
  );
}

export default App;
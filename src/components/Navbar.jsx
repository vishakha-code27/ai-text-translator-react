import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          QSkill Internship
        </h1>

        <div className="space-x-5">
          <Link to="/" className="hover:text-yellow-300">
            Home
          </Link>

          <Link to="/translator" className="hover:text-yellow-300">
            Translator
          </Link>
       
          <Link to="/random" className="hover:text-yellow-300">
           Random Generator
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
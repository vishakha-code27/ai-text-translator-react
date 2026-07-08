import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <h1 className="text-4xl font-bold text-blue-700">
          Welcome to QSkill Frontend Internship Project
        </h1>

        <p className="mt-4 text-lg text-gray-700">
          React + Tailwind CSS + React Router
        </p>
      </div>
    </>
  );
}

export default Home;
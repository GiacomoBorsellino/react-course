import "./App.css";
import Cards from "./pages/Cards/Cards";
import About from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* INTRO */}
      <div className="bg-white rounded-md my-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">Cap. 22 - Routing</h2>
      </div>

      {/* NAVBAR */}
      <Navbar></Navbar>

      {/* Homepage */}
      <Homepage></Homepage>

      {/* About */}
      <About></About>

      {/* CARDS */}
      <Cards></Cards>
    </>
  );
}

export default App;

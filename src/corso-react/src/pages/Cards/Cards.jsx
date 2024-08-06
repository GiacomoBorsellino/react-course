import { useState } from "react";
import "./Cards.css";
import Card from "../../components/Card/Card";
import Navbar from "./../../components/Navbar/Navbar";
import citiesImported from "../../cities";
import { Link } from "react-router-dom";

function App() {
  const [cities, setCities] = useState(citiesImported);

  function aloa() {
    console.log("città di ");
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar></Navbar>

      {/* CARDS */}
      <section className="border-2 border-blue-600 bg-white rounded-md p-2">
        <h1>Pagina Cards</h1>
        <div className="flex flex-row justify-center items-center w-full mx-auto">
          {cities.map((city) => (
            <Card
              key={city.id}
              title={city.title}
              img={city.img}
              description={city.description}
              isVisited={city.isVisited}
              onClick={aloa}>
              <button className="bg-blue-600 text-white rounded-md m-2">
                <Link to={`/cards/${city.id}`}>Got to City</Link>
              </button>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;

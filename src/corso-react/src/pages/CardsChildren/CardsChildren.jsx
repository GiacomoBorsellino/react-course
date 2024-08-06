import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import CardItem from "../../components/CardItem/CardItem.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import citiesImported from "../../cities";
import "./CardsChildren.css";

function CardsChildren() {
  const [cities, setCities] = useState(citiesImported);

  function aloa() {
    console.log("città di ");
  }

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* CARDS */}
      <section className="border-2 border-blue-600 bg-white rounded-md p-2 ">
        <h1>Pagina CardsChildren</h1>
        <div className="flex flex-row justify-center items-center mx-auto ">
          {cities.map((city) => (
            <div>
              <CardItem
                key={city.id}
                title={city.title}
                img={city.img}
                description={city.description}
                isVisited={city.isVisited}
                onClick={aloa}></CardItem>
              <Link to={`/cards-children/${city.id}`} key={city.id}>
                <button className="bg-blue-600 p-2 rounded-md text-white">
                  View city
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default CardsChildren;

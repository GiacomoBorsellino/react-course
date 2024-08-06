import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import citiesImported from "../../cities";
import Navbar from "./../../components/Navbar/Navbar";
import "./Card.css";

function Card({ title, img, description, isVisited, children, onClick }) {
  const { idCard } = useParams();
  const location = useLocation();
  const [city, setCity] = useState({ title, img, description, isVisited });

  useEffect(() => {
    if (idCard) {
      const cityFromId = citiesImported.find(
        (city) => city.id.toString() === idCard
      );
      if (cityFromId) {
        setCity(cityFromId);
      }
    }
  }, [idCard]);

  const titoloTalk = () => {
    console.log("città:", city.title);
  };

  if (idCard && !city.title) {
    return <p>Città non trovata</p>;
  }

  return (
    <>
      {/* NAVBAR */}
      {idCard && !location.pathname.includes("cards-children") ? (
        <Navbar />
      ) : null}
      <main
        onClick={() => {
          titoloTalk();
          if (onClick) onClick();
        }}
        className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-80 rounded-md shadow-md hover:opacity-80">
        <img
          alt="img"
          src={city.img || img}
          className="w-full h-40 object-cover rounded-t-md"
        />
        <div className="p-2">
          <h2 className="text-2xl">{city.title || title}</h2>
          <p>{city.description || description}</p>
          {city.isVisited ?? isVisited ? (
            <span>✅ Visitata</span>
          ) : (
            <span>❌ Non visitata</span>
          )}
          {children}
        </div>
      </main>
    </>
  );
}

export default Card;

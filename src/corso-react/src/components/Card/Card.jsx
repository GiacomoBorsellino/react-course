import { useEffect } from "react";
import "./Card.css";

function Card({ title, img, description, isVisited, children, addCity }) {
  const visitedLabel = isVisited ? "✅ Visitata" : "❌ Non visitata";

  function titoloTalk() {
    console.log("citta : ", title);
  }

  return (
    <>
      <div
        onClick={titoloTalk}
        className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-1/3 rounded-md shadow-md">
        <img
          alt="img"
          src={img}
          className=" w-full h-40 object-cover rounded-t-md"
        />
        <div className="p-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
          {isVisited && <span>✅ Visitata</span>}
          {!isVisited && <span>❌ Non visitata</span>}
          {children}
        </div>
      </div>
    </>
  );
}

export default Card;

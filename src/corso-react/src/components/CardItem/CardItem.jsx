import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import citiesImported from "../../cities";
import Navbar from "../Navbar/Navbar";
import "./CardItem.css";

function CardItem({ title, img, description, isVisited }) {
  return (
    <>
      <main className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-80 rounded-md shadow-md hover:opacity-80  ">
        <img
          alt="img"
          src={img}
          className="w-full h-40 object-cover rounded-t-md"
        />
        <div className="p-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
          {isVisited ? <span>✅ Visitata</span> : <span>❌ Non visitata</span>}
        </div>
      </main>
    </>
  );
}

export default CardItem;

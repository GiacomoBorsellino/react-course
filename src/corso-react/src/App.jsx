import { useReducer, useState, useContext } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import citiesImported from "./cities";
import orn from "../public/orn.jpg";

function App() {
  const [cities, setCities] = useState(citiesImported);

  const value = true;

  function aloa() {
    console.log("città di ");
  }

  return (
    <>
      {/* INTRO */}
      <div className="bg-white rounded-md my-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">
          Cap. 20 - Context API
        </h2>
      </div>
      <img
        className="w-1/2 h-[30vh] object-cover mb-5 rounded-md m-auto"
        alt="intro"
        src={orn}
      />

      {/* CARDS */}
      <div className="flex flex-row justify-center items-center w-full mx-auto">
        {cities
          // .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.title}
              img={city.img}
              description={city.description}
              isVisited={city.isVisited}
              onClick={aloa}>
              {value ? <Label>ciao</Label> : <Label>salve</Label>}
            </Card>
          ))}
      </div>
    </>
  );
}

export default App;

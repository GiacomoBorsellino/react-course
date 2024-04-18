import orn from "../public/Ornitorinco.jpg";
import "./App.css";
import Card from "./components/Card/Card";
import cities from "./cities";

function App() {
  const alert = (title) => {
    console.log("You clicked the city ", title);
  };
  return (
    <>
      <div className="bg-white rounded-md m-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">Cap. 8 - Le Props</h2>
      </div>
      <img
        className="w-1/2 h-1/3 object-cover rounded-xl m-auto"
        alt="intro"
        src={orn}
      />
      <button
        onClick={() => {
          console.log("You clicked the city ", "citta");
        }}>
        Clicca
      </button>
      <div className="flex flex-row justify-center items-center w-full m-6">
        {cities
          .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.title}
              img={city.img}
              description={city.description}
              isVisited={city.isVisited}></Card>
          ))}
      </div>
    </>
  );
}

export default App;

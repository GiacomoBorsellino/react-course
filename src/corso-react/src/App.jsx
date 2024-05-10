import orn from "../public/orn.jpg";
import "./App.css";
import Card from "./components/Card/Card";
import CardHttp from "./components/CardHttp/CardHttp";

import Label from "./components/Label/Label";
import { useEffect, useState } from "react";
import CardForm from "./components/CardForm/CardForm";
import Example from "./components/Example/Example";

function App() {
  const value = true;

  const [cities, addCities] = useState([
    {
      id: 1,
      isVisited: true,
      title: "Tokyo",
      description: "Descrizione della città descritta dentro la card",
      img: "https://www.gotokyo.org/it/destinations/southern-tokyo/images/499_0354_2.jpg",
    },
    {
      id: 2,
      isVisited: false,
      title: "New York",
      description: "Descrizione della città descritta dentro la card",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
    },
    {
      id: 3,
      isVisited: false,
      title: "Paris",
      description: "Descrizione della città descritta dentro la card",
      img: "https://www.travelandleisure.com/thmb/9voBhUARljf_EQswIb9IjrrvHTA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paris-in-spring-PARISHOTELS0618-ad2ae87061f34df49fd8ed8f5919f4c2.jpg",
    },
    {
      id: 4,
      isVisited: true,
      title: "Rome",
      description: "Descrizione della città descritta dentro la card",
      img: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350?wid=1600&hei=900&fit=constrain,1&fmt=webp",
    },
  ]);

  const addCity = (city) => {
    addCities([...cities, city]);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="bg-white rounded-md m-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">
          Cap. 15 - useEffect
        </h2>
      </div>

      {/* Img Intro */}
      <img
        className="w-1/2 h-1/3 object-cover rounded-xl m-auto"
        alt="intro"
        src={orn}
      />

      {/* Example */}
      <Example></Example>

      {/* Buttons */}

      {/* Form */}
      <CardForm addCity={addCity}></CardForm>

      {/* Cards */}
      {/* <div className="flex flex-row flex-wrap justify-center items-center w-full m-6">
        {cities
          // .filter((city) => city.isVisited)
          .map((city) => (
            <Card
              key={city.id}
              title={city.title}
              img={city.img}
              description={city.description}
              isVisited={city.isVisited}>
              {value ? <Label>ciao</Label> : <Label>salve</Label>}
            </Card>
          ))}
        {value ? <Label>ciao</Label> : <Label>salve</Label>}
      </div> */}
      <div className="flex flex-row flex-wrap justify-center items-center w-full m-6">
        {data.map((item) => (
          <CardHttp
            key={item.id}
            title={item.title}
            description={item.body}></CardHttp>
        ))}
      </div>
    </>
  );
}

export default App;

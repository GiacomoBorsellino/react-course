import orn from "../public/orn.jpg";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
// import cities from "./cities";
import { useState } from "react";
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

  // const [count, setCount] = useState(0);

  // const [items, setItems] = useState([1, 2, 3]);

  // function aggiungiItem() {
  //   let nuovoItem = 4;
  //   setItems([...items, nuovoItem]);
  //   console.log(items);
  // }

  // function raddoppiaItems() {
  //   for (let i = 0; i < items.length; i++) {
  //     items[i] *= 2;
  //   }

  //   setItems([...items]);
  //   console.log(items);
  // }

  // let conteggio = 0;

  // const [user, setUser] = useState({ name: "Bob", age: 30 });

  // function editUser() {
  //   setUser({ ...user, name: "Gwen" });
  //   console.log(user);
  // }

  // function handleClick() {
  //   // console.log("bob");
  //   alert("oaaaa");
  // }

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
      {/* <section className="p-6 flex flex-row justify-center items-center gap-2">
        <button onClick={handleClick}>Clicca</button>

        <button
          className="bg-slate-700 text-white p-2 rounded-md"
          onClick={() => {
            setCount((count) => count + 1);
          }}>
          count è {count}
        </button>

        <button
          className="bg-red-700 text-white p-2 rounded-md"
          onClick={() => {
            conteggio++;
            console.log(conteggio);
          }}>
          conteggio è {conteggio}
        </button>

        <button
          className="bg-red-700 text-white p-2 rounded-md"
          onClick={aggiungiItem}>
          Items sono {items}
        </button>

        <button
          className="bg-green-700 text-white p-2 rounded-md"
          onClick={raddoppiaItems}>
          Raddoppia gli Items sono {items}
        </button>

        <button
          className="bg-pink-700 text-white p-2 rounded-md"
          onClick={editUser}>
          Edit user {user.name}
        </button>
      </section> */}

      {/* Form */}
      <CardForm addCity={addCity}></CardForm>

      {/* <button
        className="p-2 bg-slate-700 text-white font-semibold"
        onClick={addCity}>
        Add New City
      </button> */}

      {/* Cards */}
      <div className="flex flex-row flex-wrap justify-center items-center w-full m-6">
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
      </div>
    </>
  );
}

export default App;

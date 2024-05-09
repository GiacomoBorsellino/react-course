import orn from "../public/orn.jpg";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import cities from "./cities";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([1, 2, 3]);

  function aggiungiItem() {
    let nuovoItem = 4;
    setItems([...items, nuovoItem]);
    console.log(items);
  }

  function raddoppiaItems() {
    for (let i = 0; i < items.length; i++) {
      items[i] *= 2;
    }

    setItems([...items]);
    console.log(items);
  }

  let conteggio = 0;

  const [user, setUser] = useState({ name: "Bob", age: 30 });

  function editUser() {
    setUser({ ...user, name: "Gwen" });
    console.log(user);
  }

  const value = true;

  function handleClick() {
    // console.log("bob");
    alert("oaaaa");
  }

  function aloa() {
    console.log("città di ");
  }

  return (
    <>
      <div className="bg-white rounded-md m-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">Cap. 14 - State</h2>
      </div>
      <img
        className="w-1/2 h-1/3 object-cover rounded-xl m-auto"
        alt="intro"
        src={orn}
      />

      <section className="p-6 flex flex-row justify-center items-center gap-2">
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
      </section>

      <div className="flex flex-row justify-center items-center w-full m-6">
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
        {value ? <Label>ciao</Label> : <Label>salve</Label>}
      </div>
    </>
  );
}

export default App;

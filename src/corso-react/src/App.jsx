import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import citiesImported from "./cities";
import orn from "../public/orn.jpg";

function App() {
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });

  const handleInputChange = (event) => {
    const { value, type, checked, name } = event.target;

    const inputValue = type === "checked" ? checked : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const city = {
      id: Math.random(),
      title: formData.title,
      description: formData.description,
      imgURL: formData.imgURL,
      isVisited: formData.isVisited,
    };

    setCities([...cities, city]);
  };

  const [cities, setCities] = useState(citiesImported);

  // Roba vecchia
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
      {/* INTRO */}
      <div className="bg-white rounded-md m-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">Cap. 14 - State</h2>
      </div>
      <img
        className="w-1/2 h-1/3 object-cover rounded-xl m-auto"
        alt="intro"
        src={orn}
      />

      {/* FORM */}
      <div className="bg-lime-600 p-2 m-2 rounded-md">
        <form
          className="flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}>
          <input
            type="number"
            name="id"
            className="rounded-md bg-slate-700 text-white p-2"
            placeholder="id"></input>
          <input
            type="text"
            name="title"
            className="rounded-md bg-slate-700 text-white p-2"
            placeholder="title"
            value={formData.title}
            onChange={handleInputChange}></input>
          <textarea
            name="description"
            className="rounded-md bg-slate-700 text-white p-2"
            placeholder="description"
            value={formData.description}
            onChange={handleInputChange}></textarea>
          <input
            type="text"
            name="imgURL"
            className="rounded-md bg-slate-700 text-white p-2"
            placeholder="imgURL"
            value={formData.imgURL}
            onChange={handleInputChange}></input>
          <input
            type="checkbox"
            name="isVisited"
            className="rounded-md bg-slate-700 text-white p-2"
            placeholder="id"
            checked={formData.isVisited}
            onChange={handleInputChange}></input>

          <button
            type="submit"
            className="rounded-md bg-slate-700 text-white p-2">
            Aggiungi card
          </button>
        </form>
      </div>

      {/* BUTTONS */}
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

      {/* CARDS */}
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

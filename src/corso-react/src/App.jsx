import { useReducer, useState, useContext } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";
import citiesImported from "./cities";
import orn from "../public/orn.jpg";

import Son from "./components/Son/Son";
import { ProvaContext } from "./stores/EsempioDiContext";

function App() {
  // useReducer | dispatch ==> emanare un ordine
  const [formState, dispatchFormState] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const handleFieldChange = (field, value) => {
    //                |               ACTION              |
    dispatchFormState({ type: "change_field", field, value });
  };

  const resetForm = () => {
    //                |       ACTION       |
    dispatchFormState({ type: "reset_form" });
  };

  function formReducer(state, action) {
    switch (action.type) {
      case "change_field": {
        return { ...state, [action.field]: action.value };
      }
      case "reset_form": {
        return {
          name: "",
          email: "",
        };
      }
      default: {
        return state;
      }
    }
  }

  const sendForm = (e) => {
    e.preventDefault();
    console.log("formstate: ", formState);
  };

  /* =================================== Roba vecchia =================================== */
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    id: 0,
    title: "",
    description: "",
    imgURL: "",
    isVisited: false,
  });

  const handleInputChange = (event) => {
    // Acquisizione dell'evento, e destrutturazione dell'interezza del blocco
    const { value, type, checked, name } = event.target;

    // Filtro per gestione del tipo di dato, text o checkbox
    const inputValue = type === "checked" ? checked : value;

    // Set dello state del campo in cambiamento inserendo il valore restituito in precedenza
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const [cities, setCities] = useState(citiesImported);

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
    <ProvaContext.Provider value={{ count, setCount }}>
      {/* INTRO */}
      <div className="bg-white rounded-md m-6 p-6">
        <h1 className="text-2xl text-slate-500 font-bold">Corso React</h1>
        <h2 className="text-2xl text-slate-500 font-bold">
          Cap. 20 - Context API
        </h2>
      </div>
      <img
        className="w-1/2 h-1/3 object-cover rounded-xl m-auto"
        alt="intro"
        src={orn}
      />

      {/* COMPONENTE CHE USA LO USECONTEXT PER OTTENERE LO STATE */}
      <Son></Son>
      {/* FORM */}
      {/* <div className="bg-lime-600 p-2 m-2 rounded-md">
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
      </div> */}

      {/* FORM USE-REDUCER */}
      <section>
        <form className="flex flex-col justify-center items-center gap-2 bg-slate-600 rounded-md p-2 ">
          <span className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={(event) =>
                handleFieldChange(event.target.name, event.target.value)
              }></input>
          </span>
          <span className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={(event) =>
                handleFieldChange(event.target.name, event.target.value)
              }></input>
          </span>

          <span className="flex flex-col justify-center items-center gap-2">
            <button
              className="bg-white text-slate-600 rounded-md p-2 "
              onClick={resetForm}>
              Reset Form
            </button>
            <button
              className="bg-white text-slate-600 rounded-md p-2 "
              onClick={sendForm}>
              Invia
            </button>
          </span>
        </form>
      </section>

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
    </ProvaContext.Provider>
  );
}

export default App;

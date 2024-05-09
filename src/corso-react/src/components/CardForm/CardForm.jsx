import "./CardForm.css";

function CardForm({ addCity }) {
  const handleClick = () => {
    const newCity = {
      id: 5,
      isVisited: false,
      title: "Berna",
      description: "Descrizione della città descritta dentro la card",
      img: "https://www.bern.com/assets/images/7/altstadt2-884b8f17.jpg",
    };

    addCity(newCity);
  };

  return (
    <>
      <section className="flex flex-col gap-2 m-2 w-1/6 justify-center items-start">
        <input
          type="text"
          placeholder="Name"
          className="p-2 rounded-md bg-slate-300 text-slate-700 font-semibold"></input>

        <input
          type="text"
          placeholder="Description"
          className="p-2 rounded-md bg-slate-300 text-slate-700 font-semibold"></input>

        <input
          type="text"
          placeholder="Img"
          className="p-2 rounded-md bg-slate-300 text-slate-700 font-semibold"></input>

        <button
          onClick={handleClick}
          className="p-2 rounded-md bg-slate-700 text-white font-semibold">
          Invia Form
        </button>
      </section>
    </>
  );
}

export default CardForm;

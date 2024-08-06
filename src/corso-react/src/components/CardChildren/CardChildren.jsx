import "./CardChildren.css";

function CardChildren({
  title,
  img,
  description,
  isVisited,
  children,
  addCity,
}) {
  const visitedLabel = isVisited ? "✅ Visitata" : "❌ Non visitata";

  function titoloTalk() {
    console.log("citta : ", title);
  }

  return (
    <>
      <main
        onClick={titoloTalk}
        className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-80 rounded-md shadow-md hover:opacity-80">
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
      </main>
    </>
  );
}

export default CardChildren;

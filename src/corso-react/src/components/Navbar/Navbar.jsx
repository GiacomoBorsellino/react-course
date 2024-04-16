import "./Navbar.css";
import Link from "../Link/Link";

function Navbar() {
  const x = 3000;

  const img =
    "https://www.goaustralia.it/wp-content/uploads/sites/54/2018/03/Ornitorinco.jpg";

  const styleImg = {
    color: "red",
    borderRadius: x > 1000 ? "10px" : "30px",
  };

  return (
    <>
      <div className={`box ${x > 1000 ? "blue" : "red"}`}> x è {x}</div>
      <img alt="immagine" src={img} style={styleImg} /> Corretto
      <h1>{x}</h1>
      <h2 className="testo-red">Obaoba</h2>
      <h3 className="text-3xl font-bold underline text-slate-800">dsdadas</h3>
      <ul>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;

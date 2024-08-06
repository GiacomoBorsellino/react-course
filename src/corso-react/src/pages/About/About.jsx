import "./About.css";
import Navbar from "../../components/Navbar/Navbar";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <section className="border-2 border-blue-600 bg-white rounded-md p-2">
        <h1>Pagina About</h1>
        <div>Contatti</div>
      </section>
    </>
  );
}

export default About;

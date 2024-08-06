import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";

function Homepage() {
  return (
    <>
      <Navbar></Navbar>
      <section className="border-2 border-blue-600 bg-white rounded-md p-2">
        <h1>Pagina Homepage</h1>
        <div>Homepage</div>
      </section>
    </>
  );
}

export default Homepage;

import { useContext } from "react";
import { ProvaContext } from "../../stores/EsempioDiContext";
import "./Son.css";

function Son() {
  const { count, setCount } = useContext(ProvaContext);
  return (
    <>
      <h1 className="bg-blue-600 p-2 rounded-md m-6 text-white font-semibold">
        Sono il son
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Aumenta count da context: {count}
      </button>
    </>
  );
}

export default Son;

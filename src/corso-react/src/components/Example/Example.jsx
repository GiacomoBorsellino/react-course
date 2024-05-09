import { useEffect, useState } from "react";
import "./Example.css";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setCount(count + 1);
    document.title = "Corso React " + count;
  }, [count]);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   document.title = "Corso React " + count;
  // };

  return (
    <>
      <section className="flex flex-col gap-2 m-2 w-1/6 justify-center items-start">
        <h1>Conteggio</h1>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="p-2 rounded-md bg-slate-700 text-white font-semibold">
          Incremento numero {count}
        </button>
      </section>
    </>
  );
}

export default Example;

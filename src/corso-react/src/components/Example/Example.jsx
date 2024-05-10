import { useEffect, useState } from "react";
import "./Example.css";

function Example() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(null);

  // useEffect(() => {
  //   // setCount(count + 1);
  //   document.title = "Corso React " + count;
  // }, [count]);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   document.title = "Corso React " + count;
  // };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       // console.log(response.json());
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

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

import { useEffect } from "react";
function useCounter() {
  useEffect(() => {
    let boba = 0;
    const interval = setInterval(() => {
      boba += 1;
      console.log("| ", boba);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
}

export default useCounter;

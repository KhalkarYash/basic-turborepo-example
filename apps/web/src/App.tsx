import { greet } from "@ui/index";
import { useEffect, useState } from "react";

function App() {
  const [isOk, setIsOk] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_BACKEND_URL;

  const fetchData = async () => {
    await new Promise((r) => setTimeout(() => r(console.log("Done")), 2000));
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    if (response.status === 200) setIsOk(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (!isOk) {
    return <h1>Something went wrong!</h1>;
  }

  return <h1>{greet("Yash")}</h1>;
}

export default App;

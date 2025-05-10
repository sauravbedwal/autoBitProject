import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DataPage from "./pages/dataPage/DataPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DataPage />
    </>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aminat } from "./Aminat";
import "./App.css";
import { Kelvin } from "./Kelvin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aminat />} />
        <Route path="/kelv" element={<Kelvin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

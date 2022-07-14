import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Aminat } from "./Aminat";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Aminat />} />
        <Route path="/kelv" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

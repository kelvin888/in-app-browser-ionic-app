import "./App.css";

function App() {
  const handleClick = () => {
    localStorage.setItem("firstName", "Kelvin");
    window.postMessage({ name: "Kelvin Orhungul", height: "5.11ft" });
    window.close();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default App;

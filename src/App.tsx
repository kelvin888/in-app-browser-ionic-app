import "./App.css";

function App() {
  const handleClick = () => {
    localStorage.setItem("name", "Kelvin");
    window.close();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default App;

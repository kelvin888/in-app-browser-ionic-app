import "./App.css";

function App() {
  const handleClick = () => {
    localStorage.setItem("firstName", "Kelvin");
    window.postMessage("task completed successfully");
    window.close();
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Close</button>
    </div>
  );
}

export default App;

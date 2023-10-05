import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>_</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => }>+</button>

    </div>
  );
}

export default App;

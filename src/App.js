import './App.css';
import NavBar from './Component/Navbar/NavBar';
import Templates from './Component/Templates';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Templates />
      </header>
    </div>
  );
}

export default App;

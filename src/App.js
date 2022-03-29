import logo from "./logo.svg";
import "./App.css";
import Football from "./event-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Events</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
        {/*Pass in our Component here */}
        <Football />
      </header>
    </div>
  );
}

export default App;

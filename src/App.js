import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./Navbar";
import { LandingPage } from "./LandingPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <LandingPage />
    </div>
  );
}

export default App;

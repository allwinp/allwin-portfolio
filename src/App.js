import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
import Intro from "./components/Intro/Intro.component";
import Projects from "./components/Projects/Projects.component";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Intro />
      <Projects />
    </main>
  );
}

export default App;

import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
import Intro from "./components/Intro/Intro.component";
import Projects from "./components/Projects/Projects.component";
import Contact from "./components/Contact/Contact.component";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Intro />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;

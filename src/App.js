import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
import Intro from "./components/Intro/Intro.component";
import Projects from "./components/Projects/Projects.component";
import Technologies from "./components/Technologies/Technologies.component";
import Contact from "./components/Contact/Contact.component";

function App() {
  return (
    <main className="App">
      <Navbar />
      <Intro />
      <Projects />
      <Technologies />
      <Contact />
    </main>
  );
}

export default App;

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {Support} from "./components/Support";
import Notify from "./components/Notify";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Notify />
    </div>
  );
}

export default App;

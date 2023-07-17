import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./views/Home/Home";
import './index.scss';
import Project from "./views/Projects/Project";
import Skils from "./views/Skils/Skils";
import Contact from "./views/Contact/Contact";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

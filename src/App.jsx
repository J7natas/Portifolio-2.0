import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./views/Home/Home";
import './index.scss';
import Project from "./views/Projects/Project";
import Skils from "./views/Skils/Skils";
import Contact from "./views/Contact/Contact";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skils" element={<Skils />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

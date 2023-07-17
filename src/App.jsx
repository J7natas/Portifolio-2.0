import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./views/Home/Home";
import './index.scss';
import Project from "./views/Projects/Project";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;

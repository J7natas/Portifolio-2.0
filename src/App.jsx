import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import Home from "./views/Home/Home";
import './index.scss';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pelicula from "./components/pelicula";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ghibli/:name" element={<Pelicula />} />
      </Routes>
    </Router>
  );
}

export default App;


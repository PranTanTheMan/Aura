import "./styles/App.css";
import Hero from "./components/hero";
import Application from "./components/application";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="./components/application.jsx" element={<Application />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

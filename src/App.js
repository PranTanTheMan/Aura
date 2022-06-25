import "./styles/App.css";
import Hero from "./components/hero";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Hero /> } />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;

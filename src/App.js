import './App.css';
import Comp from './components/Comp';
import Form from './components/Form';
import FormComp from './components/FormComp';
import Posts from './components/Posts';
import RefForm from './components/RefForm';
import Square from './components/Square';
import UseEffect from './components/UseEffect';
import About from './pages/About';
import Home from './pages/Home';
import Services from './pages/Services'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (


    <BrowserRouter >
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/practice'} element={<Posts />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;

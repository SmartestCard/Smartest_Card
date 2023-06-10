import './App.css';
import Home from './component/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Personal from './component/personal/Personal';

function App() {
  return (
    <>
    <Routes>
   <Route path='/personal' element={<Personal />}></Route>
    <Route path="/" element={<Home />} />
</Routes>
    </>
  );
}

export default App;

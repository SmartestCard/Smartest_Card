import './App.css';
import Home from './component/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import Personal from './component/personal/Personal';
import { createContext, useState } from 'react';
import Result from '../result/Result';

export const UserContext = createContext();
function App() {
const [info, setInfo] = useState('')
  return (
    <>
    <UserContext.Provider value={{info,setInfo}}>

  
    <Routes>
    <Route path='/personal' element={<Personal />}></Route>
   <Route path='/Result' element={<Result />}></Route>
    <Route path="/" element={<Home />} />
    <Route
          path="*"
          element={
            <h1> 404 NOT FOUND: The page you are looking for doesn't exist </h1>
          }
        />
</Routes> 
 </UserContext.Provider>
    </>
  );
}

export default App;

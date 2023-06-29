
//import './App.css';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

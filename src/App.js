import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './useState/counter';
function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className='NavBar'>
          <ul className='ul'>
            <li className='li'>
              <Link to="/">Use State</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
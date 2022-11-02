import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from './useState/counter';
import Effect from './useEffect/index';
import Context from './useContext/index';
import { ProfileProvider } from "./useContext/profileContext";
import Ref from "./useRef/ref";

function App() {
  return (
    <ProfileProvider>
    <Router>
      <div className="App-header">
        <nav className='NavBar'>
          <ul className='ul'>
            <li className='li'>
              <Link to="/">Use State</Link>
            </li>
            <li className='li'>
              <Link to="/effect">Use Effect</Link>
            </li>
            <li className='li'>
              <Link to="/context">Use context</Link>
            </li>
            <li className="li">
                <Link to="/ref">Use Ref</Link>
              </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' exact element={<Counter />} />
          <Route path='/effect' exact element={<Effect />} />
          <Route path='/context' exact element={<Context />} />
          <Route path="/ref" exact element={<Ref />} />
        </Routes>
      </div>
    </Router>
    </ProfileProvider>
  );
}
export default App;
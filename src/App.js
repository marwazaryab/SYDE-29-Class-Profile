import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';  
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <div className="App-content">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
         
        </header>


      </div>
    </Router>
  );
}

export default App;

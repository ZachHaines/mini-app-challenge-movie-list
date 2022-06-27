import './App.css';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; 
import MovieList from './components/MovieList';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MovieList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

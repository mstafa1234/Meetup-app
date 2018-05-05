import React from 'react';
import Main from './components/Main'
import { Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

const App = () => (


  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating btn-large red">
        <i className="fa fa-plus"></i>
      </Link>
    </div>
  </div>
)
  ;


export default App;

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import HomePage from './pages/HomePage';
import EmployeesPage from './pages/EmployeesPage';
import AddEmployee from './pages/AddEmployee';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/employees" element={<EmployeesPage rowsPerPage={4}/>} />
            <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Registrar } from "./components/registrarIND"
import { Login } from "./components/loginIND"
import { Inicio } from "./components/inicio"
import { Password } from "./components/password"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import React from "react";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="Registrar" element={<Registrar />}></Route>
            <Route path="Inicio" element={<Inicio />}></Route>
            <Route path="Password" element={<Password/>}></Route>
        </ Routes>
      </Router>

    </div >
  );
}

export default App;

import './App.css';
import Header from "./components/Header";
import Todo from "./components/Todo";
import React, { Components } from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import ReactDOM from 'react-dom/client';
import Layout from "./components/Layout";
import Login from "./Login"
import {getDatabase} from 'firebase/database'
import {ref,push,child,update} from "firebase/database";



function App() {

  return (
    <>
     <Header />
    <div className="container border rounded d-flex justify-content-center shadow p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="text-center">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="todo" element={<Todo />} /> 
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
      </div>
      </div>
       </>
  );


    
}


export default App;

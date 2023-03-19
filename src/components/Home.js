import React from 'react';

import ReactDOM from 'react-dom/client';
  
const Home = () => {
    return (
      <>
         <div className="container border rounded d-flex justify-content-evenly shadow p-3 mb-5 bg-white rounded">
           <div className="row">
             <div className="text-center">
               <h1>{"Keep Track Of your Day!"}</h1> 
             </div>
             </div>
             </div>
             <div className="container border rounded d-flex justify-content-evenly shadow p-3 mb-5 bg-white rounded">
             <div className="row">
             <div className="text-center">

             <h3>Go to Todo & Click on new to add task</h3>
             <h3>Click on Home only if you want to reset the logs</h3> 
            </div>
            </div>
            </div>

             </>

    );
    
    
  };
  
export default Home;
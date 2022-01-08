 import React, {Component} from 'react';
 import {  Route, Routes } from 'react-router-dom';
 import HomePage from './pages/HomePage';
 import PostPage from './pages/PostPage';
import './App.css';
import card from "react-bootstrap/Card";


function App ()  {
  return (
   
     <div>
       <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/posts/:name" element={<PostPage/>} />
       
       </Routes>
     </div>
 
      
    
  );

}


 
// //{/* <Router>
// //<//div className="App">
//         <div id="page-body">
//       <Routes>
//           <Route path='/' element={HomePage} />
//           </Routes>
         
//         </div>
//       </div>

//    </Router> */}
    


 export default App;





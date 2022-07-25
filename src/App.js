import TopBar from "./components/topbar/topBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = true;
  return (
    <>
      <Router>
        <Routes>

          <Route  path="/home" element={<Home />}/>
          
          <Route  path="/single" element={<Single />}/>
          
          <Route  path="/write" element={ user ? <Write /> : <Login />}/>
          
          <Route  path="/settings" element={<Settings />}/>
          
          <Route  path="/register" element={ user ? <Home /> :<Register />}/>
          
          <Route  path="/" element={user ? <Home /> : <Login />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;

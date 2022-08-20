import React from "react";
import {Navbar} from "./Components/Navbar";
import { Login } from "./Pages/Login"
import { Home } from "./Pages/Home"
import { SignUp } from "./Pages/Signup"
import {Routes, Route} from "react-router-dom";
import {AdminLogin} from "./Pages/AdminLogin"
import { ShowAllUsers } from "./Pages/ShowAllUsers";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}></Route>
        <Route path="/showall" element={<ShowAllUsers/>}></Route>
      </Routes>
    </>
  );
}

export default App;

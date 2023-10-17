import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import List from "./Admin/about/List";
import Update from "./Admin/about/Update";
import Update2 from "./Admin/barber/Update2";
import Update3 from "./Admin/experience/Update3";
import Update4 from "./Admin/hour/Update4";
import Update5 from "./Admin/reservation/Update5";
import Update6 from "./Admin/user/Update6";
import Add from "./Admin/about/Add";
import Add2 from "./Admin/barber/Add2";
import Add3 from "./Admin/experience/Add3";
import Add4 from "./Admin/hour/Add4";
import Add5 from "./Admin/reservation/Add5";
import Add6 from "./Admin/user/Add6";
import List2 from "./Admin/barber/List2";
import List3 from "./Admin/experience/List3";
import List4 from "./Admin/hour/List4";
import List5 from "./Admin/reservation/List5";
import List6 from "./Admin/experience/List3";
import AdminHome from "./Admin/home/AdminHome";
export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>

      {/*ADMİN*/}
      <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
      {/*ADMİN ABOUT*/}
      <Route path="/admin/aboutslist" element={<List></List>}></Route>
      <Route path="/admin/aboutupdate/:id" element={<Update></Update>}></Route>
      <Route path="/admin/aboutadd" element={<Add></Add>}></Route>

      {/*ADMİN HOUR*/}
      <Route path="/admin/hourslist" element={<List4></List4>}></Route>
      <Route path="/admin/hourupdate/:id" element={<Update4></Update4>}></Route>
      {/*ADMİN RESERVATION*/}
      <Route path="/admin/reservationslist" element={<List5></List5>}></Route>
      <Route path="/admin/reservationupdate/:id" element={<Update5></Update5>}></Route>
      {/*ADMİN USER*/}
      <Route path="/admin/userslist" element={<List6></List6>}></Route>
      <Route path="/admin/userupdate/:id" element={<Update6></Update6>}></Route>
      {/*ADMİN BARBER*/}
      <Route path="/admin/barberslist" element={<List2></List2>}></Route>
      <Route path="/admin/barberupdate/:id" element={<Update2></Update2>}></Route>
      {/*ADMİN EXPERİENCE*/}
      <Route path="/admin/experienceslist" element={<List3></List3>}></Route>
      <Route path="/admin/experienceupdate/:id" element={<Update3></Update3>}></Route>
    </Routes>
  );
}

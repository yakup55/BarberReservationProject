import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import List from "./Admin/about/List";
import Update from "./Admin/about/Update";
import Update2 from "./Admin/barber/Update2";
import Update3 from "./Admin/calendar/Update3";
import Update4 from "./Admin/hour/Update4";
import Update8 from "./Admin/quention/Update8";
import List2 from "./Admin/barber/List2";
import List4 from "./Admin/hour/List4";
import List5 from "./Admin/reservation/List5";
import List6 from "./Admin/user/List6";
import List3 from "./Admin/calendar/List3";
import List7 from "./Admin/contact/List7";
import List8 from "./Admin/quention/List8";
import AdminHome from "./Admin/home/AdminHome";
import User from "./Components/user/User";
import AdminProfile from "./Admin/home/AdminProfile";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/user" element={<User></User>}></Route>

      {/*ADMİN*/}
      <Route path="/admin" element={<AdminHome></AdminHome>}></Route>
      <Route
        path="/adminprofile"
        element={<AdminProfile></AdminProfile>}
      ></Route>

      {/*ADMİN ABOUT*/}
      <Route path="/admin/aboutslist" element={<List></List>}></Route>
      <Route path="/admin/aboutupdate/:id" element={<Update></Update>}></Route>

      {/*ADMİN HOUR*/}
      <Route path="/admin/hourslist" element={<List4></List4>}></Route>
      <Route path="/admin/hourupdate/:id" element={<Update4></Update4>}></Route>
      {/*ADMİN RESERVATION*/}
      <Route path="/admin/reservationslist" element={<List5></List5>}></Route>
      {/*ADMİN USER*/}
      <Route path="/admin/userslist" element={<List6></List6>}></Route>
      {/*ADMİN BARBER*/}
      <Route path="/admin/barberslist" element={<List2></List2>}></Route>
      <Route
        path="/admin/barberupdate/:id"
        element={<Update2></Update2>}
      ></Route>
      {/*ADMİN CALENDAR*/}
      <Route path="/admin/calendarslist" element={<List3></List3>}></Route>
      <Route
        path="/admin/calendarupdate/:id"
        element={<Update3></Update3>}
      ></Route>
      {/*ADMİN CONTACT*/}
      <Route path="/admin/contactslist" element={<List7></List7>}></Route>

      {/*ADMİN QUENTİON*/}
      <Route path="/admin/quentionslist" element={<List8></List8>}></Route>
      <Route
        path="/admin/quentionupdate/:id"
        element={<Update8></Update8>}
      ></Route>
    </Routes>
  );
}

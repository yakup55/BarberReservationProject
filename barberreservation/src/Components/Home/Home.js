import React from "react";
import Reservation from "../Reservation/Reservation";
import Quentions from "../quentions/Quentions";
import Barber from "../barber/Barber";
import Contact from "../contact/Contact";
import About from "../about/About";

export default function Home() {
  return <>
 <Reservation></Reservation>
        <Barber></Barber>
        <Quentions></Quentions>
       <Contact></Contact>
       <About></About>

  </>;
}

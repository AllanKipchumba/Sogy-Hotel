import React from "react";
import Header from "../../components/Header";
import Welcome from "../../components/Welcome";
import RoomsAndSuites from "../../components/RoomsAndSuites";
import Photos from "../../components/Photos";
import RestaurantMenu from "../../components/RestaurantMenu";
import Events from "../../components/Events";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";

function home() {
    return (
       <>
          <Header/>
          <Welcome/>
          <RoomsAndSuites/>
          <Photos/>
          <RestaurantMenu/>
          <Events/>
          <Cta/>
          <Footer/>
       </>
    )
 };
export default home;
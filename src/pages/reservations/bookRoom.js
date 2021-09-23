import React from "react";
import BookRoom from "../../components/BookRoom";
import Footer from "../../components/Footer";
import BookRoomHeader from "../../components/BookRooomHeader";

function bookRoom() {
    return (
        <>
            <BookRoomHeader/>
            <BookRoom/>
            <Footer/>
        </>
    )
}

export default bookRoom;
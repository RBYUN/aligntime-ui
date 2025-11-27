import React from "react";

import NavBar from "./NavBar";
import UserBox from "./UserBox";
export default function Header(props) {

    return (
        <header className={`flex ${props.style}`}>
            <NavBar />
            <h1>{props.text}</h1>
            {props.userBox ? <UserBox /> : <div/> }
        </header>
    );
}
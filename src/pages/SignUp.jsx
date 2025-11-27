import React from "react";

import Header from "../components/Header";
import AccountInput from "../components/AccountInput";


export default function SignUp() {
    const inputs = [
        {
            "name": "firstName",
            "type": "text",
            "placeholder": "First Name"
        },
        {
            "name": "lastName",
            "type": "text",
            "placeholder": "Last Name"
        },
        {
            "name": "email",
            "type": "text",
            "placeholder": "Email Address"
        },
        {
            "name": "password",
            "type": "password",
            "placeholder": "Password"
        },
        {
            "name": "confirmPassword",
            "type": "password",
            "placeholder": "Confirm Password"
        }
    ];

    const create = () => {
        console.log("hello");
    }
    const buttons = [
        {
            "text": "Create",
            "link": null,
            "action": create
        }
    ]

    return(
        <>
            <Header text="Create a New Account" userBox={false} style="signUp-header"/>
            <AccountInput inputs={inputs} buttons={buttons} page="signUp"/>
        </>
    )
}
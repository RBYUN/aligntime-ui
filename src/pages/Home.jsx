import { Outlet } from "react-router";
import Header from "../components/Header";

export default function Home() {

    const buttons = [
        {
            "text": "SIGN UP",
            "action" : null,
            "link": "accounts/create"
        },
        {
            "text": "LOGIN",
            "action" : null,
            "link": null
        }
    ];


    return(
        <>
            <Header buttons={buttons} class="account-buttons"/>
            <Outlet />
        </>
    );
}
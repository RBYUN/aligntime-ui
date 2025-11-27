import Header from "../components/Header.jsx";

import { Outlet } from "react-router";

export default function Home() {
    return (
        <>
            <Header text="Scheduler" userBox={true}/>
            <Outlet />
        </>
    )
}

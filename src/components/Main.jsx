import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./nav/NavBar";
import Context from "../contexts/Context";

export default function Main() {
    return <div>
        <Navbar />
        <div style={{ margin: "1rem" }}>
            <Outlet />
        </div>
    </div>
}
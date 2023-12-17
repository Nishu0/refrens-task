import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}
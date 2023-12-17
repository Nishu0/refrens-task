import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";
import { CardsList } from "./cards";


export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<CardsList />} />
            </Routes>
        </BrowserRouter>
    )
}
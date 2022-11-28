import { Route, Routes } from "react-router-dom";
import DahsboardPage from "../pages/dashboard";

export function HomeRoute() {
    return (
        <Routes>
            <Route path="/" element={<DahsboardPage />} />
        </Routes>
    )
}
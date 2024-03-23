import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../modules/auth/AuthPage";


const AppRoutes = () => {

    const currentUser = localStorage.getItem('token')

    return (
        <BrowserRouter>
            <Routes>
                {currentUser ?
                    <>
                        <Route path="login/*" element={<AuthPage />} />
                    </> :
                    <>
                        <Route path="login/*" element={<AuthPage />} />
                        <Route path="*" element={<Navigate to='login/' />} />
                    </>}
            </Routes>
        </BrowserRouter>
    )
}
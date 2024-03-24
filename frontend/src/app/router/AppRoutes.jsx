import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../modules/auth/AuthPage";
import PrivateRoutes from "./PrivateRoutes";
import ErrorsPage from "../modules/error/ErrorsPage";


const AppRoutes = () => {

    const currentUser = localStorage.getItem('token')

    return (
        <BrowserRouter>
            <Routes>
                <Route path="error/*" element={<ErrorsPage />} />
                {currentUser ?
                    <>
                        <Route path="*" element={<PrivateRoutes />} />
                        <Route index element={<Navigate to='home' />} />
                    </> :
                    <>
                        <Route path="login/*" element={<AuthPage />} />
                        <Route path="*" element={<Navigate to='login/' />} />
                    </>}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
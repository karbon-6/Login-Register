import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Register from "./register/Register";


const AuthPage = ()=> (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
    </Routes>
)

export default AuthPage
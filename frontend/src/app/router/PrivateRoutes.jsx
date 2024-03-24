import { Navigate, Routes, Route } from "react-router-dom"
import Home from "../modules/home/Home"
import App from "../../App"



const PrivateRoutes = () => (
    <Routes>
        <Route element={<App />} />
        <Route path='login/*' element={<Navigate to='/home' />} />
        <Route path='home' element={<Home />} />
    </Routes>
)

export default PrivateRoutes
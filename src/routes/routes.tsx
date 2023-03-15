import { Route, Routes } from "react-router-dom"
import Layout from "../pages/layout/Layout"
import Main from "../pages/main"
import ResetPassword from "../pages/resetPassword"
import SignIn from "../pages/signIn"
import SignUp from "../pages/signUp"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/reset' element={<ResetPassword />} />
                <Route index element={<Main />} />
            </Route>
        </Routes>
    )
}

export default Router
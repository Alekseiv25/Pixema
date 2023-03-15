import { Route, Routes } from "react-router-dom"
import Layout from "../pages/layout/Layout"
import Main from "../pages/main"
import SignIn from "../pages/signIn"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/signin' element={<SignIn />} />
                <Route index element={<Main />} />
            </Route>
        </Routes>
    )
}

export default Router
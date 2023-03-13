import { Route, Routes } from "react-router-dom"
import Layout from "../pages/layout/Layout"
import Main from "../pages/main/Main"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Main />} />

            </Route>
        </Routes>
    )
}

export default Router
import { Route, Routes } from "react-router-dom"
import Activation from "../pages/activation"
import Confirmation from "../pages/confirmation"
import Layout from "../pages/layout/Layout"
import Main from "../pages/main"
import NewPassword from "../pages/newPassword"
import NotFound from "../pages/notFound"
import ResetPassword from "../pages/resetPassword"
import SelectedMovie from "../pages/selectedMovie"
import Settings from "../pages/settings"
import SignIn from "../pages/signIn"
import SignUp from "../pages/signUp"
import Success from "../pages/success"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='activate/:uid/:token' element={<Activation />} />
                <Route path='/success' element={<Success />} />
                <Route path='/reset' element={<ResetPassword />} />
                <Route path='password/reset/confirm/:uid/:token' element={<NewPassword />} />
                <Route path='/settings' element={<Settings />} />
                <Route index element={<Main />} />
                <Route path='/film/:id' element={<SelectedMovie />}/>
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router
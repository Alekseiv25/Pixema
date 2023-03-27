import { Route, Routes } from 'react-router-dom'
import Activation from '../pages/Activation'
import Confirmation from '../pages/Confirmation'
import Favorites from '../pages/Favorites'
import Filter from '../pages/Filter'
import Layout from '../pages/Layout'
import Main from '../pages/Main'
import NewPassword from '../pages/NewPassword'
import NotFound from '../pages/NotFound'
import ResetPassword from '../pages/ResetPassword'
import Search from '../pages/Search'
import SelectedMovie from '../pages/SelectedMovie'
import SelectedPerson from '../pages/SelectedPerson'
import Settings from '../pages/Settings'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Success from '../pages/Success'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='activate/:uid/:token' element={<Activation />} />
                <Route path='/success' element={<Success />} />
                <Route path='/reset' element={<ResetPassword />} />
                <Route path='password/reset/confirm/:uid/:token' element={<NewPassword />} />
                <Route path='/settings' element={<Settings />} />
                <Route index element={<Main />} />
                <Route path='film/'>
                    <Route path=':id' element={<SelectedMovie />} />
                </Route>
                <Route path='name/'>
                    <Route path=':id' element={<SelectedPerson />} />
                </Route>
                <Route path='search/:name' element={<Search />} />
                <Route path='favorites' element={<Favorites />} />
                <Route path='filter' element={<Filter />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default Router
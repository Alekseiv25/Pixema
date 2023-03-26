import { useSelector } from "react-redux"
import { Outlet, useLocation, useParams } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { changeThemeSelector, toggleFilterSelector } from "../../store/selectors/selectors"

const Layout = () => {
    const location = useLocation()
    const theme = useSelector(changeThemeSelector)
    const { uid, token } = useParams()
    const toggleFilter = useSelector(toggleFilterSelector)
    return (
        <div style={{ 'overflowY': toggleFilter ? 'hidden' : 'auto' }} className={
            location.pathname === '/signin' ||
                location.pathname === '/signup' ||
                location.pathname === '/reset' ||
                location.pathname === '/newpassword' ||
                location.pathname === '/confirmation' ||
                location.pathname === '/success' ||
                location.pathname === `/password/reset/confirm/${uid}/${token}`
                ? 'bg-app app' : 'app' && theme ? 'light bg-app-light  app' : 'app'
        }>
            <Header />
            <main className="wrapper">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
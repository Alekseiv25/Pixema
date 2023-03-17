import { useSelector } from "react-redux"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { changeThemeSelector } from "../../store/selectors/selectors"

const Layout = () => {
    const location = useLocation()
    const theme = useSelector(changeThemeSelector)

    return (
        <div className={
            location.pathname === '/signin' ||
                location.pathname === '/signup' ||
                location.pathname === '/reset' ||
                location.pathname === '/newpassword' ? 'bg-app app' : 'app' && theme ? 'light  app' : 'app'
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
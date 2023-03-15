import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../components/footer"
import Header from "../../components/header"

const Layout = () => {
    const location = useLocation()
    return (
        <div className={
            location.pathname === '/signin' ||
                location.pathname === '/signup' ? 'bg-app app' : 'app'}>
            <Header />
            <main className="wrapper">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
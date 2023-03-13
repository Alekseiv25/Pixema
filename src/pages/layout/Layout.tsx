import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

const Layout = () => {
    return (
        <div className="app">
            <Header />
            <main className="wrapper">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
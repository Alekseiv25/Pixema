import { useSelector } from 'react-redux'
import MediaQuery from 'react-responsive'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import BackgroundMovie from '../../components/BackgroundMovie_'
import BurgerMenu from '../../components/BurgerMenu_'
import Footer from '../../components/Footer_'
import Header from '../../components/Header_'
import { changeThemeSelector, toggleFilterSelector } from '../../store/selectors/selectors'

const Layout = () => {
    const location = useLocation()
    const theme = useSelector(changeThemeSelector)
    const { uid, token } = useParams()
    const toggleFilter = useSelector(toggleFilterSelector)
    return (<>
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
            {location.pathname === '/' && <BackgroundMovie />}
            <main className='wrapper'>
                <Outlet />
            </main>
            <Footer />
        </div>
        <MediaQuery maxWidth={768}>
            <BurgerMenu />
        </MediaQuery>
    </>
    )
}

export default Layout
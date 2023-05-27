import UserMenu from "components/UserMenu";

import { selectIsLoggedIn } from 'store/auth/selectors'
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { Header, Navigation, Link } from './SharedLayout.styled'

const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>
            <Header>
                <h1>Phonebook</h1>
                <Navigation>
                    <Link to={'/'}>Home</Link>
                    <Link to={'contacts'}>Contacts</Link>
                </Navigation>
                { isLoggedIn ? <UserMenu /> : (
                    <Navigation>
                        <Link to={'register'}>Register</Link>
                        <Link to={'logIn'}>LogIn</Link>
                    </Navigation>
                )}
            </Header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default SharedLayout;

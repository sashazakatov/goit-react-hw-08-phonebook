import UserMenu from "components/UserMenu";

import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from 'store/auth/selectors'
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>
            <header>
                <nav>
                    <h1>Phonebook</h1>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'contacts'}>Contacts</NavLink>
                </nav>
                { isLoggedIn ? <UserMenu /> : (
                    <nav>
                        <NavLink to={'register'}>Register</NavLink>
                        <NavLink to={'logIn'}>LogIn</NavLink>
                    </nav>
                )}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default SharedLayout;

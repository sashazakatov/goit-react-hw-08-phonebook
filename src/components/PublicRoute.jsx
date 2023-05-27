import { useSelector } from "react-redux"
import {selectIsLoggedIn} from 'store/auth/selectors'
import { Navigate } from "react-router-dom"

const PublicRoute = ({children, restricted = false}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log(isLoggedIn && restricted );
    return(
        <>{isLoggedIn && restricted ? <Navigate to='/' /> : children }</>
    )
}
export default PublicRoute;
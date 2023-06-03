import { useSelector } from "react-redux"
import {selectIsLoggedIn} from 'store/auth/selectors'
import { Navigate } from "react-router-dom"

const PublicRoute = ({children, restricted = false, path = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return(
        <>{isLoggedIn && restricted ? <Navigate to={path} /> : children }</>
    )
}
export default PublicRoute;
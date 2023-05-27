import { useSelector } from "react-redux"
import {selectIsLoggedIn} from 'store/auth/selectors'
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, path = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return <>{isLoggedIn ? children : <Navigate to={path} /> }</>
}
export default PrivateRoute;
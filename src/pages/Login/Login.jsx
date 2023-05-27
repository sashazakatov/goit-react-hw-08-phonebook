import LoginForm from "components/LoginForm"
import { Link } from './Login.styled'

const Login = () => {
    return(
        <div>
            <LoginForm/>
            <p>Not registered? <Link to='/register'>Registration</Link></p>
        </div>
    )
}
export default Login;
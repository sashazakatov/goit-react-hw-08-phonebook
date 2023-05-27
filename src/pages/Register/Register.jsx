import RegisterForm from 'components/RegisterForm'
import { Link } from './Register.styled'

const Register = () => {
    return(
        <>
            <RegisterForm />
            <Link to='/logIn'>Login</Link>
        </>
    )
}

export default Register;
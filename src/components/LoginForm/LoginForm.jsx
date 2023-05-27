import { useDispatch } from "react-redux";
import { logIn } from "store/auth/opetations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handelSubmit = (e) =>{
        e.preventDefault()

        const form = e.target;
        const { email, password } = form.elements;

        dispatch(logIn({
            email: email.value,
            password: password.value,
        }));  
    }

    return(
        <form onSubmit={handelSubmit}>
            <label>
                email
                <input
                    type="email"
                    name="email"
                />
            </label>
            <label>
                password
                <input
                    type="password"
                    name="password"
                />
            </label>
            <button type="submit">Click</button>
        </form>
    )
}

export default LoginForm;
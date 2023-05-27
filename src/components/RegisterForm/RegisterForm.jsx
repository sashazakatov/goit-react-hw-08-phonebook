import { useDispatch } from "react-redux";
import { register } from "store/auth/opetations";

const RegisterForm = () => {

    const dispatch = useDispatch();

    const handelSubmit = (e) =>{
        e.preventDefault()

        const form = e.target;
        const { name,  email, password} = form.elements;

        dispatch(register({
            name: name.value,
            email: email.value,
            password: password.value,
        }));  
    }

    return(
        <form onSubmit={handelSubmit}>
            <label>
                name
                <input 
                    type="text"
                    name="name" 
                />
            </label>
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
export default RegisterForm;
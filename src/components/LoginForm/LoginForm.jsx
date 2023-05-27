import { useDispatch } from "react-redux";
import { logIn } from "store/auth/opetations";

import { Form, Button, Lable, Input } from './LoginForm.styled'

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
        <Form onSubmit={handelSubmit}>
            <Lable>
                Email
                <Input
                    type="email"
                    name="email"
                />
            </Lable>
            <Lable>
                Password
                <Input
                    type="password"
                    name="password"
                />
            </Lable>
            <Button type="submit">Login</Button>
        </Form>
    )
}

export default LoginForm;
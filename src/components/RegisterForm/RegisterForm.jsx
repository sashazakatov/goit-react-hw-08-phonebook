import { useDispatch } from "react-redux";
import { register } from "store/auth/opetations";

import { Form, Button, Lable, Input } from './RegisterForm.styled'

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
        <Form onSubmit={handelSubmit}>
            <Lable>
                Name
                <Input 
                    type="text"
                    name="name" 
                />
            </Lable>
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
            <Button type="submit">Register</Button>
        </Form>
    )
}
export default RegisterForm;
import Loader from 'components/Loader'

import { useDispatch, useSelector } from "react-redux";
import { register } from "store/auth/opetations";

import { selectIsLoading } from 'store/auth/selectors';

import { Form, Button, Lable, Input } from './RegisterForm.styled'

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const handelSubmit = (e) =>{
        e.preventDefault()

        const form = e.target;
        const { name,  email, password} = form.elements;

        dispatch(register({
            name: name.value,
            email: email.value,
            password: password.value,
        }))
        .then((result) => {
            Notify.failure(result.payload)
        });
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
            <Button type="submit">
                Register
                {isLoading && <Loader width={15}/>}
            </Button>
        </Form>
    )
}
export default RegisterForm;
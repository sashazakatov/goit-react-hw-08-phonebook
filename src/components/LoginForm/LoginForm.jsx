import Loader from 'components/Loader'

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "store/auth/opetations";

import { selectIsLoading } from 'store/auth/selectors';

import { Form, Button, Lable, Input } from './LoginForm.styled'

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LoginForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    const handelSubmit = (e) =>{
        e.preventDefault()

        const form = e.target;
        const { email, password } = form.elements;

        dispatch(logIn({
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
                Login
                {isLoading && <Loader width={15}/>}
            </Button>
        </Form>
    )
}

export default LoginForm;
import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from 'store/auth/selectors'
import { logOut } from 'store/auth/opetations'

import { Div, Button } from './UserMenu.styled'

const UserMenu = () => {
    const name = useSelector(selectUserName);
    const dispatch = useDispatch();

    return(
        <Div>
            <p>welcome, {name}</p>
            <Button
                onClick={() => dispatch(logOut())}
            >
                Logout
            </Button>
        </Div>
    )
}

export default UserMenu;
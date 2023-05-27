import { useSelector, useDispatch } from "react-redux";
import { selectUserName } from 'store/auth/selectors'
import { logOut } from 'store/auth/opetations'

const UserMenu = () => {
    const name = useSelector(selectUserName);
    const dispatch = useDispatch();

    return(
        <div>
            <p>{name}</p>
            <button
                onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    )
}

export default UserMenu;
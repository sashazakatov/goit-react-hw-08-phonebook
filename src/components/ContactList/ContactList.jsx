import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';

import { fetchContacts, deleteContact } from 'store/contact/operations'
import { selectFiltedItems } from 'store/selectors';
import { selectIsDeleting } from 'store/contact/selectors';


import Loader from 'components/Loader';

const ContactList = () => {;
    const filtredItems = useSelector(selectFiltedItems);
    const isDeleting = useSelector(selectIsDeleting)
    const dispatch = useDispatch();
    const [ activeId, setActiveId] = useState(null);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    return(
        <ul className={css.list}>
        {
            filtredItems
            .map(({id, name, number}) =>  
            <li className={css.item} key={id}>
                <p>{name}: {number}</p>
                <button 
                    className={css.button}
                    type="button" 
                    onClick={()=>{
                            setActiveId(id);
                            dispatch(deleteContact(id));
                        }
                    }
                >
                    Delete
                    {   isDeleting && 
                        id === activeId && 
                        <Loader width={15}/>
                    }
                </button>
            </li>)
        }
        </ul>
    )
}
export default ContactList;
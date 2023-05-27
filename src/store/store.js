import { configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from 'store/contactsSlice';
import { filterReducer } from 'store/filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
})
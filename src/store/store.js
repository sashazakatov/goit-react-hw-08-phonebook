import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { contactsReducer } from 'store/contact/slice'
import { filterReducer } from 'store/filter/filterSlice'
import { authReducer } from "store/auth/slice";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

  import storage from 'redux-persist/lib/storage'

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];


const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
}


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware,
});

export const persistor = persistStore(store);
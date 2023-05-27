import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SharedLayout from "components/SharedLayout";
import PrivateRoute from 'components/PrivateRoute'
import PublicRoute from "components/PublicRoute";
import Loader from "components/Loader";

import Home from "pages/Home";
import Contacts from 'pages/Contacts'

import Register from "pages/Register";
import Login from "pages/Login";

import { selectIsRefreshing } from 'store/auth/selectors'
import { refreshUser } from "store/auth/opetations";

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return <>
    {isRefreshing ? <Loader width={50}/> : <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={
          <PublicRoute>
            <Home/>
          </PublicRoute>} 
        />
        <Route path="register" element={
          <PublicRoute restricted>
            <Register/>
          </PublicRoute>} 
        />
        <Route path="login" element={
          <PublicRoute restricted>
            <Login/>
          </PublicRoute>}
        />
        <Route path='contacts' element={
          <PrivateRoute path='/logIn'>
            <Contacts />
          </PrivateRoute>} 
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>}
  </>
}
export default App
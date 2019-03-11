import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const getDataFromStorage = localStorage.getItem('isLogged');
const parseData = JSON.parse(getDataFromStorage);
console.log(parseData)
const PrivateRoute = ({componemt : Component, ...rest}) => (
        
        <Route {...rest} render={(props) =>
             (
                 parseData ? <Component {...props} /> : <Redirect to="/login" /> 
             )}
        />
    )
    


export default PrivateRoute
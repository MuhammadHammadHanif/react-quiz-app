import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const onLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem('CurrentUser');
        localStorage.removeItem('isLogged')
        //props.checkLogin(false);
    }
    const getloggedFromStorage = localStorage.getItem('isLogged');
    const isLogged = JSON.parse(getloggedFromStorage);
    const getCurrentUserFromStorage = localStorage.getItem('CurrentUser');
    const user = JSON.parse(getCurrentUserFromStorage);

    return(
        <div className="App-header">
        <h3 className="ui left floated header text">
            Quiz Application
        </h3>
        {isLogged && <h4 className="ui right floated header">
        <span  style={{marginRight : "10px"}}>
        <i className="user icon"></i>
        {user.username} 
        </span>
        
        <button style={{paddingLeft : "7px",paddingRight : "7px", textAlign : "center"}}  onClick={onLogout} className="ui mini teal button">
        <Link style={{color : "white"}} to="/login">
            LOGOUT
        </Link>
        
        </button>
        </h4>}
        </div>
    );
}

export default Header
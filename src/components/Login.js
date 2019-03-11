import React,{Component} from 'react'
import { Link, withRouter } from 'react-router-dom'

class Login extends Component {

    state = {
        username : '',
        password : ''
    }

    



    onInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState(() => {
         return{
                [name] : value
            };
        })
        console.log(value)
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        const name = this.state.username;
        const password = this.state.password;
        const getDataFromStorage = localStorage.getItem('AllUsers');
        const parseData = JSON.parse(getDataFromStorage);
        let checkUser = false;
        console.log(parseData)
        if(parseData)
        {
            const checkAuthentication = function(element) {
                return element.username === name && element.password === password;
                };
            const getMatch =parseData.some(checkAuthentication) 
            if(getMatch)
            {
                checkUser=true;
            }
            else
            {
                checkUser=false;
            }
        }
        if(checkUser)
        {
            const json = JSON.stringify({"username" : name, "password" : password});
            localStorage.setItem('CurrentUser', json);
            localStorage.setItem('isLogged',true)
            this.props.history.push("/dashboard") ;
        }
        else
        {
            alert('Enter Correct UserName/Password');
        }

        }

        

    render(){
    return(
        <div className="ui container">
            <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                <div className="content">
                    Log-in to your account
                </div>
                </h2>
                <form className="ui large form" onSubmit={this.onFormSubmit}>
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input 
                        onChange={this.onInputChange}
                        className="text"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.username}
                        />
                    </div>
                    </div>
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input 
                        onChange={this.onInputChange}
                        className="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        />
                    </div>
                    </div>
                    <button className="ui fluid large teal submit button ui vk button">Login</button>
                </div>
                </form>

                <div className="ui message">
                New to us? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
            </div>

        </div>
    )
}}

export default withRouter(Login)
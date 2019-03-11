import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Login extends Component  {
    state = {
        username : '',
        email : '',
        password : ''
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState(() => {
            return{
                [name] : value
            }
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.addUser(this.state.username,this.state.email,this.state.password)
        alert('SignUp Successfull')
    }

    render(){
        return(
            <div className="ui container">
            <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui teal image header">
                <div className="content">
                    Sign-up for your account
                </div>
                </h2>
                <form className="ui large form" onSubmit={this.onFormSubmit}>
                <div className="ui stacked segment">
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input 
                         onChange={this.handleInputChange}
                         className="text"
                         type="text"
                         name="username"
                         placeholder="Username"
                         value = {this.state.username}
                        />
                    </div>
                    </div>
                    <div className="field">
                    <div className="ui left icon input">
                    <i className="envelope icon"></i>
                        <input 
                         onChange={this.handleInputChange}
                         className="text"
                         type="email"
                         name="email"
                         placeholder="E-mail"
                         value = {this.state.email}
                        />
                    </div>
                    </div>
                    <div className="field">
                    <div className="ui left icon input">
                        <i className="lock icon"></i>
                        <input 
                         onChange={this.handleInputChange}
                         className="password"
                         type="password"
                         name="password"
                         placeholder="Password"
                         value = {this.state.password}
                        />
                    </div>
                    </div>
                    <button className="ui fluid large teal submit button ui vk button">Signup</button>
                </div>
                </form>

                <div className="ui message">
                Go to <Link to="/login">Login</Link>
                </div>
            </div>
            </div>
        </div>
        )
    }
    
}

export default Login
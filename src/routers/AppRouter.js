import React,{Component} from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/Login'
import Header from '../components/Header'
import SignUp from '../components/SignUp'
import Dashboard from '../components/Dashboard'
import ListOfTest from '../components/ListOfTest'
import Test from '../components/Test'
import Result from '../components/Result'
import TestAuthentication from '../components/TestAuthentication'
//import PrivateRoute from './PrivateRoute'

const getDataFromStorage = localStorage.getItem('isLogged');
const parseData = JSON.parse(getDataFromStorage);

class AppRouter extends Component{
    state = {
        users : [
            {
                username : 'Hammad',
                email : 'hammadhanif0@gmail.com',
                password : '123'
            }
        ],
        isLogged : false
      }
  
    addUser = (username, email, password) => {
      this.setState((prevState) => {
          return{
              users : [...prevState.users,{username,email,password}]
          }
      });
      
      
    }

    checkLogin = (isLogin) => {
        console.log(isLogin)
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.users.length !== this.state.users.length)
        {
            const json = JSON.stringify(this.state.users);
            localStorage.setItem('AllUsers', json);
        }
    }

    render(){
        
    return (
        <BrowserRouter>
            <div>
                <Header checkLogin={this.checkLogin} />
                <Switch>
                    <Route path="/" render={()=> (parseData ? (<Redirect to="/dashboard"/>) : (<Login checkLogin={this.checkLogin} />))} exact={true} />
                    <Route path="/signup" render={()=> <SignUp addUser={this.addUser} />} />
                    <Route path="/dashboard"  component={Dashboard} exact={true} />
                    <Route path="/login"  component={Login}  exact={true} />
                    <Route path="/:id"  component={ListOfTest} exact={true}/>
                    <Route path="/:id/:key/"  component={TestAuthentication} exact={true}/>
                    <Route path="/:id/:key/:testid/"  component={Test} exact={true}/>
                    <Route path="/:id/:key/:testid/:resultid"  component={Result} exact={true}/>
                    {/* <Route path="/" render={()=> (parseData ? (<Redirect to="/dashboard"/>) : (<Login checkLogin={this.checkLogin} />))} exact={true}/>
                    <Route path="/signup" render={()=> <SignUp addUser={this.addUser} />}/>
                    <Route path="/login"  render={()=> <Login checkLogged={this.checkLogged} />} exact={true}/>
                    <PrivateRoute path="/dashboard"  component={Dashboard} />
                    <PrivateRoute path="/:id"  component={ListOfTest} exact={true} />
                    <PrivateRoute path="/:id/:key/"  component={TestAuthentication} exact={true} />
                    <PrivateRoute path="/:id/:key/:testid/"  component={Test} exact={true} />
                    <PrivateRoute path="/:id/:key/:testid/:resultid"  component={Result} exact={true} /> */}
                </Switch>
            </div>
        </BrowserRouter>
);
}
}
console.log(parseData)
const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={(props) => (
        
      parseData == true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )
export default AppRouter;


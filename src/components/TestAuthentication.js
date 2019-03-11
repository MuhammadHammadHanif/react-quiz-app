import React,{Component} from 'react'
import { Redirect } from 'react-router-dom'
import Questions from './QuestionsAndAnswers'

// const getCurrentUserResultFromStorage =JSON.parse(localStorage.getItem('UserResults'));
// const getCurrentUserFromStorage =JSON.parse(localStorage.getItem('CurrentUser'));
// const loopUserName =  getCurrentUserResultFromStorage.map(data => Object.keys(data).map((value) => value));
// console.log(typeof(loopUserName[0]))
// console.log(typeof(Object(getCurrentUserFromStorage.username+getCurrentUserFromStorage.password)))
// const checkUser = loopUserName[0].includes([Object(getCurrentUserFromStorage.username+getCurrentUserFromStorage.password)])
// console.log(checkUser)

class TestAuthentication extends Component {
    state ={
        key : "",
        validate : false
    }

    componentWillUnmount(){
        this.setState({validate : false})
    }

    handleInput = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState(() => {
            return {
                [name] : value
            }
        })
    }

    onButtonClick= (event) => {
        event.preventDefault();
        if(Questions[0][this.props.match.params.id][this.props.match.params.key][0] === this.state.key)
        {
           this.setState({validate : true});
           
        }
        else
        {
            alert('Incorrect Key')
        }
    }
   //Submit Key
    render(){
        
        return(
            <div  className="ui container">
            <div className="ui floating message title">
                <p>{`${this.props.match.params.id} ${this.props.match.params.key.replace('-',' ').toUpperCase()}`}</p>
            </div>
            <div className="ui fluid action input">
            <input type="text" onChange={this.handleInput} value={this.state.key} placeholder="Enter Proctoring Key" name="key"/>
            {
                !this.state.validate ? 
                <button onClick={this.onButtonClick} className="ui teal button">Submit Key</button> :
                <Redirect  to={`/${this.props.match.params.id}/${this.state.key}/${this.props.match.params.key}`}/>
            }
            
            </div>
            </div>
        );
    }
    
}

export default TestAuthentication;
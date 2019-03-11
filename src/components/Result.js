import React from 'react'
import Questions from './QuestionsAndAnswers'
import {Link} from 'react-router-dom'

const Result = (props) => {
    // const testName =`${props.match.params.id} ${props.match.params.testid}`;
    // console.log(testName)
    const totalMarks = (Questions[0][props.match.params.id][props.match.params.testid].length -1) * 10;
    const percentage = props.match.params.resultid / totalMarks * 100;
    // const getCurrentUserFromStorage = localStorage.getItem('CurrentUser');
    // const parseData = JSON.parse(getCurrentUserFromStorage);
    // const json = JSON.stringify([
    //     {
    //         [parseData.username+parseData.password] : {
    //            [testName] : percentage 
    //         }
    //     }
    // ]);
    // localStorage.setItem('UserResults', json);
    return(
        <div className="ui container">        
        <div className="ui floating message title">
        <p>{`${props.match.params.id} ${props.match.params.testid.replace('-',' ').toUpperCase()}`}</p>
        </div>
        <div className="ui segments">
            <div style={{fontSize : "30px"}} className="ui center aligned segment">
                <b>Your Score : {(percentage).toFixed(2)}%</b>
            </div>
        </div>
     
        <button className="ui small teal right floated button allcourse-button-size">
            <Link style={{color : "white"}} to="/dashboard">
                Go to Dashboard
            </Link>
        </button>
    </div>
    )
}

export default Result

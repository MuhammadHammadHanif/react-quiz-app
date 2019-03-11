import React from 'react'
import Questions from './QuestionsAndAnswers'
import { Link } from 'react-router-dom'
const JoinedCourses = () => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        
    }
    return(
        <div>
            <div className="ui floating message">
            <p>All Course's</p>
            </div>
            <div className="ui segments">
                {
                    Questions.map(data => Object.keys(data).map((value,i) => 
                        <div key={i} className="ui segment allcourse-segment-size">
                             <form onSubmit={onFormSubmit}>
                            <p className="allcourse-text-size">{value}
                            <span className="allcourse-right">
                            <Link to={`/${value}`}>
                                <button value={value} className="ui small teal button allcourse-button-size">
                                    Start
                                </button>
                            </Link>
                            </span>
                            </p>
                            </form>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default JoinedCourses
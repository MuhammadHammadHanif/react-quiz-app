import React from 'react'
import Questions from './QuestionsAndAnswers'
const AllCourses = (props) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        props.addCourse(event.target.value)
    }

    return(
       
        <div>
            <div className="ui floating message">
            <p>Recommended Course's</p>
            </div>
            <div className="ui segments">
                {
                    Questions.map(data => Object.keys(data).map((value,i) => 
                        <div key={i} className="ui segment allcourse-segment-size">
                             <form>
                            <p className="allcourse-text-size">{value}
                            <span className="allcourse-right">
                                <button value={value} onClick={onFormSubmit} className="ui small teal button allcourse-button-size">
                                    Join
                                </button>
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

export default AllCourses
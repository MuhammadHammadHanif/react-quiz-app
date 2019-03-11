import React from 'react'
import Questions from './QuestionsAndAnswers'
import { Link } from 'react-router-dom'

const ListOfTest = ({match}) => {
    return(
        <div className="ui container">
            <div className="ui floating message title">
            <p>
            {match.params.id}
            </p>
            </div>
            <div className="ui segments">
                {
                    Object.keys(Questions[0][match.params.id]).map((value,i) => 
                    <div key={i} className="ui segment allcourse-segment-size">
                             <form >
                            <p className="allcourse-text-size">{value.replace('-',' ')}
                            <span className="allcourse-right">
                            <Link to={`/${match.params.id}/${value}`}>
                                <button value={value} className="ui small teal button allcourse-button-size">
                                    Join
                                </button>
                            </Link>
                            </span>
                            </p>
                            </form>
                        </div>
                )}
            </div>
        </div>
    )
}

export default ListOfTest
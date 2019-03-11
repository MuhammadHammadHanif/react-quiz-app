import React,{Component} from 'react'
import Questions from './QuestionsAndAnswers'
import { Link, withRouter } from 'react-router-dom'


let score =0;
let currentId = 1;
class  Test extends Component   {
        state = {
            //currentId : 0,
            selectedRadioOption :null,
            checkedCheckboxItem : []
        }

     checkQuestionAndAnswer = () =>
     {
        const checkAnswer = Questions[0][this.props.match.params.id][this.props.match.params.testid][currentId].correctAnswer;
            if(this.state.selectedRadioOption){
               if(checkAnswer === this.state.selectedRadioOption)
               {
                    score+=10;
                    console.log(score)
               }
                
            }
            else{
                if(typeof(checkAnswer) === 'object')
                {
                if(JSON.stringify(checkAnswer.sort()) === JSON.stringify(this.state.checkedCheckboxItem.sort()))
               {
                    score+=10;
                    console.log(score)
               }
            }
            
            }
     }

        componentWillUnmount(){
            score = 0;
            currentId = 1;
            this.setState(() => {
                return {
                    //currentId : 0,
                    selectedRadioOption :null,
                    checkedCheckboxItem : []
                }
            })
        }
        

        handleChange = (event) => {
            // get all attributes value from event
            const {name, value, type, checked} = event.target
            // insert all nationality data in isChecked constant
            const ischecked = this.state.checkedCheckboxItem
            // checking type if checkbox 
            if(type === "checkbox")
            {
              // if true then push value in to nationality array
              if(checked === true)
              {
                ischecked.push(value)
                // set the state 
                this.setState({checkedCheckboxItem : ischecked})
              }
              else
              {
               // if false then delete value into nationality array by geeting the index of value
               const getIndex = ischecked.indexOf(value)
               // use splice() to delete the specific value from array
               ischecked.splice(getIndex,1)
               // set state
               this.setState({checkedCheckboxItem : ischecked})
              }
            }
            // for all other input
            else{
              
              this.setState({
                // give value to the name that is define in input field (except checkbox)
                [name] : value
               })
            }
            
            
          }

        disabledButton = () => {
            return (this.state.checkedCheckboxItem.length !==0 || this.state.selectedRadioOption !== null) ;
        }
        
        onButtonClick = (event) => {
            event.preventDefault();
            this.checkQuestionAndAnswer()
            const checkLength = Questions[0][this.props.match.params.id][this.props.match.params.testid].length - 1;
             //let count = this.state.currentId;
             ++currentId;
            if(currentId <= checkLength)
            {
                this.setState(() => {
                    return {
                        //currentId : count,
                        selectedRadioOption :null,
                        checkedCheckboxItem : []
                    }
                })
            }
        }

        render(){
            return(
                <div className="ui container">
                    <div className="ui floating message title">
                    <p>{this.props.match.params.testid.replace('-',' ')}</p>
                    </div>
                    <div className="ui segments"> 
                    <div  className="ui segment allcourse-segment-size">
                        <p className="allcourse-text-size">
                        {Questions[0][this.props.match.params.id][this.props.match.params.testid][currentId].ques !==undefined && Questions[0][this.props.match.params.id][this.props.match.params.testid][currentId].ques}
                        </p>
                    </div>
                    {
                        Questions[0][this.props.match.params.id][this.props.match.params.testid][currentId].options.map((data,i) =>
                            <div key={i}  className="ui segment allcourse-segment-size">
                            
                            <form>
                                {
                                    
                                Questions[0][this.props.match.params.id][this.props.match.params.testid][currentId].isMultiple ? (
                                <div className="ui checkbox">
                                    <input onChange={this.handleChange} value={data} checked={this.state.checkedCheckboxItem.includes(data)}   type="checkbox" name="checkbox"/>
                                    <label>{data}</label>
                                </div>
                                ) 
                                :
                                (
                                    
                                <div className="radio ">
                                <label>
                                    <input onChange={this.handleChange} value={data} checked={this.state.selectedRadioOption === data}   type="radio" name="selectedRadioOption"/>
                                    {data}
                                </label>
                                </div>
                                    )
                                }
                            </form>
                            </div>
                            )
                    }
                    
                </div>
                        
                        <button onClick={this.onButtonClick} disabled={!this.disabledButton()} className="ui right floated button  teal button allcourse-button-size">
                        
                        {Questions[0][this.props.match.params.id][this.props.match.params.testid].length - 1 > currentId &&
                            <Link style={{color : "white"}} to={`/${this.props.match.params.id}/${this.props.match.params.key}/${this.props.match.params.testid}`}>
                            Next
                            </Link>
                        }
                        {Questions[0][this.props.match.params.id][this.props.match.params.testid].length - 1 === currentId &&
                            <Link style={{color : "white"}} to={`/${this.props.match.params.id}/${this.props.match.params.key}/${this.props.match.params.testid}/${score}`}>
                            Submit
                            </Link>
                        }
                            </button>
                    
                    

                </div>
                
            );
        }
}

export default withRouter(Test)
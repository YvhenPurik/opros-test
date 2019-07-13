import React, { Component } from 'react';

class Option extends Component {

    // constructor(props){
    //     super(props);
    //     state = {

    //     }
    // }

    render() {

        const optionText = this.props.optionObj.text;
        const optionScore = this.props.optionObj.score;
        const optionLetter = this.props.optionObj.letter;
        

        console.log(this.props.optionScore)
        
        return (
            <div className="step-option">
                <label>
                    <input type="radio" 
                        name={"option-" + this.props.questionId} 
                        onChange={() => this.props.changeScore(optionScore)}
                    />
                    { optionText } — { optionScore }
                </label>
            </div>
        );
    }

}


export default Option;

import React, { Component } from 'react';
import { Radio } from 'antd';
import 'antd/dist/antd.css'
class Option extends Component {
    state = {
        value: 0,
      };
    onChange = e => {
        console.log('radio checked', this.props.optionObj.id);
        this.setState({
          value: this.props.optionObj.id,
        });
      };

    render() {

        const optionText = this.props.optionObj.text;
        const optionScore = this.props.optionObj.score;
        const optionLetter = this.props.optionObj.letter;
        

        console.log( 'this.props.questionId', this.props.questionId)
        
        return (
            <div className="step-option">
                <Radio.Group name="radiogroup" onChange={this.onChange} value={this.state.value}>
                    
                   <Radio onChange={() => this.props.changeScore(optionScore, optionLetter)} value={this.props.questionId}></Radio>
                    { optionText } — { optionScore }
                </Radio.Group>
                {/* <label>
                    <input type="radio" 
                        name={"option-" + this.props.questionId}
                        onChange={() => this.props.changeScore(optionScore, optionLetter)}
                    />
                    { optionText } — { optionScore }
                </label> */}
            </div>
        );
    }

}


export default Option;

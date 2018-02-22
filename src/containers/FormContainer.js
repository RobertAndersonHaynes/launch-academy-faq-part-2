import React from 'react';
import Question from '../components/Question';
import TextField from '../components/TextField';

class FormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      questions: [],
      question: '',
      answer: ''
    }

render() {

return(
<div>
  <h2>Submit a New FAQ</h2>
  <form className="form" onSubmit={props.onSubmit}>
    <TextField
      label='Question'
      name='question'
      onChange={props.onChange}
      value={props.value}
      type="text"
    />
    <TextField
      label='Answer'
      name='answer'
      onChange={this.handleAnswerChange}
      value={this.state.answer}
      type="text"
    />
    <input type="submit" className="button" value="Submit"/>
  </form>
</div>
  )
}
export default FormContainer;

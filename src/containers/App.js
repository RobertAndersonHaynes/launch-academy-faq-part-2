import React from 'react';
import Question from '../components/Question';
import TextField from '../components/TextField';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: [],
      question: '',
      answer: ''
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this);
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePayload = this.handlePayload.bind(this);
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      question: '',
      answer: ''
    })
  }

  handleQuestionChange(event) {
    this.setState({question: event.target.value});
  }

  handleAnswerChange(event) {
    this.setState({answer: event.target.value});
  }

  handlePayload(submission) {
  this.setState({ questions: this.state.questions.concat(submission) })
  }

  handleSubmit(event) {
    event.preventDefault();
      let formPayload = {
        question: this.state.question,
        answer: this.state.answer
      };
      fetch(`/api/v1/questions`, {
        method: 'POST',
        body: JSON.stringify( { question: this.state.question,
        answer: this.state.answer })
      })
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status}`
          error = new Error(errorMessage)
          throw(error)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
      this.handlePayload(formPayload);
      this.handleClearForm(event);
    }

  componentDidMount(){
    fetch('/api/v1/questions')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {

        this.setState({ questions: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  render() {

    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We're Here To Help</h1>
        <div className='question-list'>
          {questions}
          <h2>Submit a New FAQ</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <TextField
              label='Question'
              name='question'
              onChange={this.handleQuestionChange}
              value={this.state.question}
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
      </div>
    )
  }
}

export default App;

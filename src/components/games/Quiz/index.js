import React, { Component } from 'react'
import NavBar from '../../Navbar/index'
import Footer from '../../Footer/index'

import QuizData from './quizData'
import './styles.css'

export default class Quiz extends Component {
 
  
  constructor(props) {
    super(props)
  
    this.state = {
       userAnswer: null,
       answer: null,
       currentIndex: 0,
       options: [],
       quizEnd: false,
       score: 0,
       disabled: true,
       showColors: false,
       canSelect: true
    } 
  } 
  
  loadQuiz = () =>{
    const {currentIndex} = this.state;
    this.setState(() =>{
      return{
        question: QuizData[currentIndex].question,
        options: QuizData[currentIndex].options,
        answer: QuizData[currentIndex].answer 
      }
    })
  }

  nextQuestionHandler = () => {
    const {userAnswer, answer, score} = this.state

    if(userAnswer === answer){
      this.setState({
        score: score + 1
      })
    }
    
    this.setState({
      currentIndex: this.state.currentIndex + 1,
      userAnswer: null,
      disabled: true,
      canSelect: true
    })
  }

  componentDidMount(){
    this.loadQuiz();
    window.scrollTo(0,0);
    
  }

  checkAnswer = selectedAnswer =>{
    this.setState({
      userAnswer: selectedAnswer,
      disabled: false,
      canSelect: false
    })
    // const {userAnswer, answer} = this.state
    // if(userAnswer === answer){
    //   this.setState({
    //     showColors: true
    //   })
    // }

  }
  finishHandler = () =>{
    const {userAnswer, answer, score} = this.state

    if(userAnswer === answer){
      this.setState({
        score: score + 1
      })
    }
    if(this.state.currentIndex === QuizData.length -1){
      this.setState({
        quizEnd: true
      })
    }
  }
  playAgain = () =>{
    window.location.reload(true);
  }
  scorePecentage = (score, total) =>{
    console.log(score, total)
    return (score/total) * 10
  }
  componentDidUpdate(prevProps, prevState){
    const {currentIndex} = this.state
    if(this.state.currentIndex !== prevState.currentIndex){
      this.setState(() =>{
        return{
          question: QuizData[currentIndex].question,
          options: QuizData[currentIndex].options,
          answer: QuizData[currentIndex].answer 
        }
      })

    }
  }

  
  render() {
    const {
      question,
      options,
      currentIndex,
      userAnswer,
      answer,
      quizEnd,
      score,
      disabled,
      canSelect} = this.state

    if(quizEnd){
      return(
        <div className="quiz-page">
          <NavBar/>
          <div className="quiz-div-end">
            <div className="pontuacao">
              <h1>Você acertou {score} de {QuizData.length} totalizando: {score * 10} Pontos</h1>
              <button onClick={this.playAgain}>Jogar novamente</button>
            </div>
            <h2>Gabarito</h2>
            <div className="gabarito">
              {QuizData.map(question =>{
                return(
                  <>
                    <span className="pergunta">{question.question}</span>
                    <span className="resposta">Resposta: {question.answer}</span>
                  </>
                )
              })}
            </div>
          </div>
          <Footer/>
        </div>
      )
    }

    return (
      <div className="quiz-page">
      <NavBar/>
      <div className="quiz-div">
        <h2>{question}</h2>
        <span>{`Questão numero ${currentIndex + 1} de ${QuizData.length}`}</span>
        { 
          options.map(option =>
            <p key = {option.id} className={
              `options ${userAnswer === option ? "selected" : null} ${disabled === false ? option === answer ? 'certo' : 'errado' : null}`
            }
            onClick = {canSelect === true ? () => this.checkAnswer(option) : null}
            >
              {option}
            </p> 
          )
        }
        {
          currentIndex < QuizData.length - 1 &&
          <button disabled = {this.state.disabled} onClick={this.nextQuestionHandler}>
            Proxima pergunta
          </button>}
          {
            currentIndex === QuizData.length - 1 && 
            <button onClick={this.finishHandler} disabled = {this.state.disabled}>
              Enviar
            </button>
          }
        
      </div>
      <Footer/>
      </div>
    )
  }
}


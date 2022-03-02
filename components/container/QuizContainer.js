import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { QuizContext } from '../../context/quizContext'
import Answer from '../quizContent/Answers/Answer'
import BeginScreen from '../quizContent/BeginScreen'
import EndGameScreen from '../quizContent/EndGameScreen'
import QuizQuestion from '../quizContent/QuestionStructure/QuizQuestion'

const QuizContainer = ({ data }) => {
  const { optionsAnswer,
    setInfo, generateOptions,
    completed, setCompleted,
    begin,end, setEnd, randomNumber,setTQuestion
  } = useContext(QuizContext)

  const handleClick = () => {
    generateOptions();
    setTQuestion(randomNumber(1,10))
    setCompleted(false)
    setEnd(true);   
  }
  useEffect(() => {
    setInfo(data)
    generateOptions();
  }, [begin])
  return (
    <div
      className='
    flex flex-col items-center min-w-fit
    bg-white rounded-xl pt-4 pb-6 '
    >
      {begin ?
        <BeginScreen /> : null
      }

      {/* Pregunta */}
      { !end ?
      optionsAnswer.map((answer) => {
        if (answer.correct === true) {
          return (
            <QuizQuestion
              country={answer.answer.capital || answer.answer.name}
              flag={answer.answer.flags.svg}
              key={new Date().getTime()}
            />)
        }
      }):null
      }
      {/* Respuesta */}        
      {!end?
      optionsAnswer.map((answer) => (
        <Answer
          country={answer.answer.name}
          option={answer.option}
          correct={answer.correct}
          key={answer.option}
        />
      )):null
      }
      {/* Botn para llevar a GameOver */}
      {completed ? <div className=''>
          <button
            className='
      bg-orange-300 rounded-lg p-2 
      text-white  text-xl font-bold 
      '
            onClick={handleClick}
          >Continuar</button>
      </div> : null}
      {end? <EndGameScreen/>:null}

    </div>
  )
}

export default QuizContainer
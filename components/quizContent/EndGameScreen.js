import React, { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'

const EndGameScreen = () => {
  const { score, reset ,setEnd} = useContext(QuizContext)
  const handleClick = () => {
    reset()
    setEnd(false)
  }
  return (
    <div
      className='flex flex-col justify-center items-center p-2'
    >
      <img
        src='/img/winner.svg'
        className='w-48 mt-2 mb-8 mx-16'
      />
      <p
        className='text-4xl font-bold text-slate-800'
      >Results</p>
      <div className='pt-4 pb-12 text-xl'>
        <p className='font-light text-slate-800'>
          You got <strong className='text-green-400 text-3xl font-bold'> {score} </strong>
          correct Answers</p>
      </div>
      <button
        className='
      border-2 border-slate-800 
      rounded-lg px-10 py-2
      font-bold text-slate-800
      '
        onClick={handleClick}
      >Try again</button>
    </div>
  )
}

export default EndGameScreen
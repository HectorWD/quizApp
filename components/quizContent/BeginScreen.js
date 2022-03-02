import React, { useContext } from 'react'
import { QuizContext } from '../../context/quizContext'

const BeginScreen = () => {
  const {setBegin}= useContext(QuizContext);
  const handleClickBegin = () => {
    setBegin(false)
  }
  return (
    <>
    <div className='m-2'>
      <p
      className='text-2xl font-bold text-indigo-600 text-center'
      >Bienvenido </p>
      <p
      className='text-2xl font-bold text-indigo-600'
      >¿Estas listo para iniciar este Quiz? </p>
    </div>
    <button 
    onClick={handleClickBegin}
    className='
    bg-indigo-500 hover:bg-indigo-600 
    text-white mt-2 p-2 rounded-lg'
    >Comenzar</button>
    </>
  )
}

export default BeginScreen
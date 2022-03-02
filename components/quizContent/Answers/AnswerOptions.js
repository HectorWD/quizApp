import React, { useContext } from 'react'
import { QuizContext } from '../../../context/quizContext'
import { useQuiz } from '../../../hooks/useQuiz';

const AnswerOptions = ({country,option,correct}) => {
  const [, randomNumber] = useQuiz();
  const{generateOptions,setCompleted,increment}= useContext(QuizContext);
  const handleClick = (correct) => {
    if(correct){
      increment()
      setTQuestion()
      generateOptions(randomNumber(1,10));
      
    }else{
      setCompleted(true)
    }
  }
  return (
    <button
    className='
    flex flex-row items-center
    w-3/4 p-2 my-2
    border rounded-xl border-1 border-indigo-700
    cursor-pointer
    ease-in duration-150 hover:bg-orange-400 hover:text-white
    text-xl text-indigo-700 font-bold
    '
    onClick={()=>handleClick(correct)}
    >
      <div className='flex-none'>
        {option===0 && 'A'}
        {option===1 && 'B'}
        {option===2 && 'C'}
        {option===3 && 'D'}
        </div>
      <div className='flex-1 text-left ml-6'>{country}</div>
    </button>
  )
}

export default AnswerOptions
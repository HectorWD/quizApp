import React, { useContext } from 'react'
import { QuizContext } from '../../../context/quizContext';
import CapitalQuestion from './CapitalQuestion'
import FlagQuestion from './FlagQuestion';

const QuizQuestion = ({country,flag}) => {
  const{tQuestion}= useContext(QuizContext)
     
     
  return (        
    <>   
    {tQuestion <= 5 ?   
    <CapitalQuestion country={country} />
    :
    <FlagQuestion country={country} flag={flag} />}   
    </>         
  )
}

export default QuizQuestion
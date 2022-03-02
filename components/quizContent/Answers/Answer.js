import React, { useContext } from 'react'
import { QuizContext } from '../../../context/quizContext';
import AnswerOptions from './AnswerOptions';
import AnswerSolution from './AnswerSolution';

const Answer = ({country,option,correct}) => {
    const {completed} = useContext(QuizContext)
    return (
        <>
            {!completed ?
                <AnswerOptions country={country} option={option} correct={correct} />
                :
                <AnswerSolution country={country} option={option} correct={correct}/>
                
            }
        </>
    )
}

export default Answer
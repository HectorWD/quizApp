import { createContext, useState } from "react";
import { useQuiz } from "../hooks/useQuiz";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
     
    const [completed, setCompleted] = useState(false)
    const [info, setInfo] = useState([])
    const [desorden, randomNumber] = useQuiz();
    const [tQuestion, setTQuestion] = useState(randomNumber(1,10))
    const [optionsAnswer, setOptionsAnswer] = useState([
        {
            option: 'A',
            answer: '',
        },
        {
            option: 'B',
            answer: '',
        },
        {
            option: 'C',
            answer: '',
        },
        {
            option: 'D',
            answer: '',
        }
    ])
    const [newArray, setNewArray] = useState([])
    const [begin, setBegin] = useState(true)
    const [end, setEnd] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswers=(desordenado)=>{
        setOptionsAnswer( desordenado.map((answer,index)=>(
            {option:index ,
            answer:info[answer.number],
            correct:answer.correct}
        )))
    }
    const generateOptions = () => {
        //Aqui me quede
        setNewArray([
            {number:randomNumber(1,250),
                correct:true
            },
            {number:randomNumber(1,250),
                correct:false},
            {number:randomNumber(1,250),
                correct:false},
            {number:randomNumber(1,250),
                correct:false},])   
         const desordenado=desorden(newArray) 
         handleAnswers(desordenado)
    }
    const increment=()=>{
        setScore((state)=>state+1)
    }
    const decrement=()=>{
        if(score===0){
            setScore(0)
        }else{
            setScore((state)=>state-1)
        }
    }
    const reset=()=>{
       setScore(0)
    }
    return (
        <QuizContext.Provider value={{
            optionsAnswer, setOptionsAnswer,tQuestion, setTQuestion,
            info, setInfo, generateOptions,handleAnswers,
            completed, setCompleted,begin, setBegin,
            score, setScore,increment,decrement,reset,
            end, setEnd,desorden, randomNumber
        }}>
            {children}
        </QuizContext.Provider>
    )
}
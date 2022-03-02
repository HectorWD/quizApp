import { QuizProvider } from "../../context/quizContext"
import QuizContainer from "./QuizContainer"

export default function Container ({ data }) {
    return (
        <div
            className={`
    flex flex-col
    items-center justify-center
    h-screen bg-[url('/img/background.png')] bg-cover`}
        >
            <div className='flex flex-row'>
                <p
                    className="
           font-bold font-sans
          text-white text-4xl pr-10
           items-center text-right mt-4"
                >COUNTRY QUIZ</p>
                <img
                    src="/img/question.svg"
                    className="z-10 "
                />
            </div>
            <QuizProvider>
                <QuizContainer data={data} />
            </QuizProvider>
        </div>
    )
}
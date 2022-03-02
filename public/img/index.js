import QuizContainer from "../components/quizContainer";
import {QuizProvider } from "../context/quizContext";


export default function Home({data}) {
  return (
    <div className=" 
    flex  flex-col 
    justify-center items-center
    border min-h-screen
    bg-[url('/img/background.png')] 
    bg-cover 
    ">
      <div
        className="
        flex flex-row justify-between pb-4"
      >
        <p
          className="
          font-bold font-sans
          text-white text-4xl pr-10"
        >COUNTRY QUIZ</p>
        <img
          src="/img/question.svg"
          className="-m-10 z-10"
        />
      </div>
      <QuizProvider>
      <QuizContainer data= {data} />
      </QuizProvider>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://restcountries.com/v2/all?fields=name,capital,flags');
    const data = await res.json();
    return { props: { data } }

  } catch (error) {
    console.log(error)
  }
}
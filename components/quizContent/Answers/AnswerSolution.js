import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const AnswerSolution = ({ country, option, correct }) => {
  const bandera = correct;
   
  return (
    <>
      {bandera ?
        <button
          className={`
    flex flex-row items-center
    w-3/4 p-2 my-2
    border rounded-xl border-1 border-indigo-700
    ease-in duration-150
    text-2xl mr-6 p-.5 text-white bg-green-500 disabled`}
        >
          <div className='flex-none ml-2'>
            {option === 0 && 'A'}
            {option === 1 && 'B'}
            {option === 2 && 'C'}
            {option === 3 && 'D'}
          </div>
          <div className='flex-1 text-left ml-6'> {country} </div>
          <AiOutlineCheckCircle />
        </button>
        :
        <button
          className={`
    flex flex-row items-center
    w-3/4 p-2 my-2
    border rounded-xl border-1 border-indigo-700
    ease-in duration-150
    text-xl mr-6 p-.5 text-white bg-red-500 disabled`}
        >
          <div className='flex-none ml-2'>
            {option === 0 && 'A'}
            {option === 1 && 'B'}
            {option === 2 && 'C'}
            {option === 3 && 'D'}
          </div>
          <div className='flex-1 text-left ml-6'> {country} </div>
          <AiOutlineCloseCircle />
        </button>}
    </>

  )
}

export default AnswerSolution
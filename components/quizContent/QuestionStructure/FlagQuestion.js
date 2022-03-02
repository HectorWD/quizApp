import React from 'react'

const FlagQuestion = (country, flag) => {
     
  return (
    <div
      className='my-4 mx-12 font-bold text-blue-900 text-xl flex flex-col items-center justify-center'
    >
      Which country does this flag belog to?
      <img
        src={country.flag}
        className='w-24 mt-2'
      />
    </div>
  )
}

export default FlagQuestion
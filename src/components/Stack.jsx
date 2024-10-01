import React from 'react'

const Stack = ({children}) => {
  return (
    <div className='flex justify-center items-center bg-lightColor1 p-4 border rounded border-4 border-primaryColor'>
      {children}
    </div>
  )
}

export default Stack

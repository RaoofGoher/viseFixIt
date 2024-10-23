import React from 'react'
import { useMediaQuery } from 'react-responsive'
const Stack = ({children}) => {

  const isSearchCollapsing = useMediaQuery({
    query: '(max-width: 1000px)'
  })
  return (
    <div className={`flex justify-center ${isSearchCollapsing ? "w-[80vw]":""} items-center bg-lightColor1 p-4 border rounded border-4 border-primaryColor`}>
      {children}
    </div>
  )
}

export default Stack

import { useState, useContext,createContext } from "react";

const CounterContext = createContext<{count:number,handleCount:()=>void}|null>(null)

import React from 'react'

export const CounterProvider = ({children}:{children:React.ReactNode}) => {

    const [count, setCount] = useState(0)
    const handleCount=()=>{
        setCount(count+1)
    }
  return (
    <CounterContext.Provider value={{count,handleCount}}>
        {children}
    </CounterContext.Provider>
  )
}

export const useCounter=()=>useContext(CounterContext)
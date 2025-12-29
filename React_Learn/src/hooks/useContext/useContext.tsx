// to reduce use or prop drilling, we can use useContext
// enables global/shared state
// create  Context folder outside the component tree
import React from 'react'

function useContext() {
  return (
    <div>useContext</div>
  )
}

export default useContext
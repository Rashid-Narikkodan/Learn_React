import { useState } from "react";

// primarly we are using this function component
function Button({ label }) {
  return <button>{label}</button>;
}
//Nothing just a component using function, 
//we can also pass values to a component known as Props

//{label} is a prop(argument)


//draw backs
// - a function component is stateless, means it dos not preserve a memory, each time new call with new data
function Counter(){
    let count=0
    count+=1
    return (
        <div>
            <button>{count}</button>
        </div>
    )
}
//each time it will print 1 only in that button, bcz there is no state for count o anything in function component

//Hooks are special functions provided by React that let function components “hook into” React’s internal system.
//so using hooks we can achive state in function component
function Counter(){
    let [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>{count}</button>
        </div>
    )
}
// Now there each time when click button, count is preserved to the react state
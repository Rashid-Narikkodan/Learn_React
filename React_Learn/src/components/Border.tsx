import {ReactNode} from 'react'
type Props={
    children:ReactNode
}
function Border(props:Props) {
  return (
    <>
    <div className="border border-black p-2 rounded-2xl">
        {props.children}
    </div>   
    </>
  )
}

export default Border
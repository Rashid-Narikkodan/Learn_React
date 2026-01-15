
const CounterWithColor = () => {
    const 
  return (
        <div>
        <button onClick={()=>dispatch(1)} className='p-5 rounded bg-blue-300'>
            +
        </button>
        <div>
    {value}
        </div>
        <button onClick={()=>dispatch(-1)} className='p-5 rounded bg-blue-300'>
            -
        </button>
    </div>
  )
}

export default CounterWithColor
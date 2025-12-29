type Car={
    id:number
    name:string
}
function  List(props:{cars:Array<Car>}) {
  
    return (
    <ul> 
        {props.cars.map((car)=><li key={car.id}>{`This is a ${car.name}`}</li>)}
        {[ <li>{'anything'}</li>, <li>{'something'}</li> ]} {/* its valid jsx syntax */}
    </ul>
  )
}

export default  List
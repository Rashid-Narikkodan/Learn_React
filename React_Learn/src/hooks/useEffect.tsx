import { useEffect, useState } from "react"

    export function UserList(){
        const users = {length:0}//fetch('/api/users')// -this is a side effect(fetching data, or calling api)
        return <div>{users.length||null}</div>
    }
    //this function is wrong

const useEffectComponent = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        console.log('mounted')
        fetch('/api/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
        .finally(()=>setLoading(false))
    },[])
    if(loading) return <div>Loading....</div>
    return <div>{user.length}</div>
}

export default useEffectComponent

// useEffect is a hook, which let function components to perform side effects after rendering
// and optionaly clean them up when dependencies change or the component unmount

// side effects :- Data fetching, timers, syncing with browser, Loggings/ analytics 
// defintion :- side ffects are operations performed by a component that affects something outdside its own render or depends on external state
        // - it runs on every render(repeated api calls)
        // - breaks recat render purity

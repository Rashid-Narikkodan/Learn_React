import { useState } from "react";

//component which use state, data fetching and logic,
//then pass UI with data to a presentational component 


function UserContainer(){
    const [user,setUser]=useState(null);
    return <UserProfile data={user}/>
}
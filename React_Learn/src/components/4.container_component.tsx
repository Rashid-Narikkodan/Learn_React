import { useState } from "react";
import Label from "./3.presentational_component";
//component which use state, data fetching and logic,
//then pass UI with data to a presentational component 


export default function UserContainer(){
    const [user,_setUser]=useState({name:'rashid',age:17,data:'this is Container component, which process data use state, tehn pass data to a presenattional component'});
    return <Label label={user.data}/>
}
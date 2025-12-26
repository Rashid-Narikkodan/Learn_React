import { Component } from "react"

//older way of creating react componnets, which will have state
export default class Button extends Component{
    state={count:0}
    increase(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return <button onClick={()=>this.increase()}>{this.state.count}</button>
    }   
}

//it has state without hooks, old model es6 model
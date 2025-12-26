//older way of creating react componnets, which will have state
class Button extends React.Component{
    state={count:0}
    increase(){
        this.setState({count:this.state.count+1})
    }
    render(){
        return <button onClick={()=>this.increase()}>{this.state.count}</button>
    }   
}
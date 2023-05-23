import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter : 0 ,
    }
  }
  handleIncrement = ()=>{
    this.setState({
      counter : this.state.counter + 1
    })
  }

  handleDecrement = ()=>{
    this.setState({
      counter : this.state.counter - 1
    })
  }

  handleReset = ()=>{
    this.setState({
      counter : 0
    })
  }

render(){
  return(
    <>
    <h1>let's build a counter app</h1>
    <h2>{this.state.counter}</h2>
    <div className='btn'>

    <button onClick={this.handleIncrement}>INCREMENT</button>
    <button onClick={this.handleDecrement}>DECREMENT</button>
    <button onClick={this.handleReset}>RESET</button>

    </div>
    </>

  )
}
}
export default App;

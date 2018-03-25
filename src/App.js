import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
class App extends Component {
  render() {
    return (
      <div className="App">
       <header className="App-header">

          <h1 className="App-title">Timer-App</h1>
        </header>

        <Timer start={Date.now()}/>
      </div>

    );
  }
}
class Swathi
 extends Component {
  render(){
    return(
      <div>
          <h1> is awesome</h1>
      </div>
    );
  }
}
class Body extends Component {
  constructor(props){
    super(props);

    this.state = {r:0};
    this.getRandomNumber=this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    this.setState({r:Math.floor(Math.random()*100)})
  }
  render(){
    return(
      <div>
      <p></p>
      <button onClick={this.getRandomNumber}>Random number</button>
      <Number mynumber={this.state.r}/>
      </div>
    );
  }
}
class Number extends Component {
  render(){
    return(
      <div>
        <br/>
        {this.props.mynumber}
      </div>
    );
  }
}
export default App;

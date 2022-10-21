import React from 'react'
import Item from "./item";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"Shaar",
    };
  }
  changeName = (event) =>{
    this.setState({
      name:event.target.value,
    });
  };
  render(){
    const numbers = [34,56,12,78,2,4,235];
    return(
      <div>
        <h1>{this.props.city}</h1>
        <input type="text" value={this.state.name} 
        onChange={this.changeName}/>
        <Item itemData ={this.state.name} myNumbers={numbers}/>
      </div>
    );
  }
}
export default App;

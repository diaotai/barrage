import React, { Component } from 'react';
import Content from './content';
import io from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:8000');


class App extends Component {
  state = {
    inputValue:"",
    items : [{duration:7900,content:"Hello world!!!"}]
  }
  handleChange = (e) =>{
    this.setState({inputValue:e.target.value});
  }
  handleClick = ()=> {
    console.log(this.state.inputValue)
    this.setState({items:[...this.state.items,{duration:7900,content:this.state.inputValue}]})
  }
  render() {
    socket.on('connect', ()=>{
      console.log("connect")
    });
    socket.on('event', function(data){});
    socket.on('disconnect',()=>{
      console.log("disconnect")
    } );
    let items= this.state.items.map((item)=>{
      return <Content duration={item.duration} content= {item.content} />
    })
    return (
      <div className="App">
        <div className="App-header">
           {items}
        </div>
          输入弹幕<input type="text" value={this.state.inputValue} onChange={this.handleChange} />
          <button onClick={this.handleClick} >发送弹幕</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Content from './content';
import './App.css';

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

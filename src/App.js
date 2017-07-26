import React, { Component } from 'react';
import Content from './content';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import  {updateContens } from './action';
import './App.css';

const socket = io('http://localhost:8000');

 socket.on('contents', (data)=>{
      console.log(data);
      window.private.store.dispatch(updateContens({duration:7900,content:data.data}))
  })
  
class App extends Component {
  handleClick = ()=> {
    let value = this.refs.value.value
    console.log(value)
    socket.emit("myContent",value)
  }
  render() {
    let { contents } = this.props 
    socket.on('connect', ()=>{
      console.log("connect")
    });
   
    socket.on('event', function(data){});
    socket.on('disconnect',()=>{
      console.log("disconnect")
    } );
    let items= contents.map((item)=>{
      return <Content duration={item.duration} content= {item.content} />
    })
    return (
      <div className="App">
        <div className="App-header">
           {items}
        </div>
          输入弹幕<input ref="value" type="text"  />
          <button ref="submit" onClick={this.handleClick} >发送弹幕</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    contents:state.contents
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateContens: (data) => {
      dispatch(updateContens(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

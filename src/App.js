import React, { Component } from 'react';
import Content from './content';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import  {updateContens, deleteContens } from './action';
import './App.css';

const socket = io('http://localhost:8000');

 socket.on('contents', (data)=>{
     // console.log(data);
      window.private.store.dispatch(updateContens(data))
      setTimeout(()=>{
      //  console.log("我被执行了")
         window.private.store.dispatch(deleteContens(data.key))
      },data.duration)
  })
  
class App extends Component {
  handleClick = ()=> {
    let value = this.refs.value.value
    if(!value){
      alert("弹幕不得为空")
      return;
    } else if (value.length>15){
      alert("弹幕过长")
      return
    }
    socket.emit("myContent",value)
    this.refs.value.value=''
  }
  render() {
    let { contents } = this.props 
    socket.on('connect', ()=>{
      console.log("connect")
    });
  
    socket.on('disconnect',()=>{
      console.log("disconnect")
    } );
    let items= contents.map((item)=>{
      return <Content {...item}/>
    })
    return (
      <div className="App">
        <div className="App-header">
           {items}
        </div>
         <input ref="value" placeholder="请输入弹幕" type="text"  />
          <button ref="submit" onClick={this.handleClick} >发射弹幕</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
 // console.log(state)
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

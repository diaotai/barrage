import React, { Component } from 'react';
import  Animate from 'react-smooth';


class Content extends Component {
  render() {
    const { duration, content, fontSize, color } = this.props;
    console.log(duration,content,fontSize,color)
    return (
      <div>
        <Animate from="60%" to="-60%" attributeName="left" duration={Number(duration)} easing="linear">
          <span className="barr" style={{fontSize:fontSize,color:color}}>{content}</span>
        </Animate>
      </div>
    );
  }
}

export default Content;

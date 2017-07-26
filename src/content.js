import React, { Component } from 'react';
import  Animate from 'react-smooth';


class Content extends Component {
  render() {
    const { duration, content, fontSize, color, top } = this.props;
    //console.log(duration,content,fontSize,color,top)
    return (
      <div>
        <Animate from="100%" to="-50%" attributeName="left" duration={Number(duration)} easing="linear">
          <div className="barr" style={{fontSize:fontSize,color:color,top:top}}>{content}</div>
        </Animate>
      </div>
    );
  }
}

export default Content;

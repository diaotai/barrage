import React, { Component } from 'react';
import  Animate from 'react-smooth';


class Content extends Component {
  render() {
    const { from, to, duration, content } = this.props;
    return (
      <div>
        <Animate from={from} to={to} attributeName="left" duration={duration} easing="linear">
          <span className="barr">{content}</span>
        </Animate>
      </div>
    );
  }
}

export default Content;

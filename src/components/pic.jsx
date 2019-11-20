import React, { Component } from 'react';

class Pic extends Component {
  render() {
    // const src = `https://picsum.photos/id/${this.props.id}/200/300`
    const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e4715cfc77484e27443898dec9bf75534727b80249f&rid=200w.webp`
    return (
      <img src={src} alt="" className="pic"/>

    );
  };
}

export default Pic;

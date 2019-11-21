import React, { Component } from 'react';

// class Pic extends Component {
//   render() {
//     // const src = `https://picsum.photos/id/${this.props.id}/200/300`
//     const src = `https://media3.giphy.com/media/${this.props.id}/200w.gif?cid=ecf05e4715cfc77484e27443898dec9bf75534727b80249f&rid=200w.webp`
//     return (
//       <img src={src} alt="" className="pic"/>

//     );
//   };
// }

class Pic extends Component {
  handleClick = () => {
    if (this.props.selectPic) {
      this.props.selectPic(this.props.id);
      console.log ('clicked');
    }
    // this.props.selectPic(this.props.id);
  }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} className="pic" onClick={this.handleClick} />
    );
  }
}

export default Pic;

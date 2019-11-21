import React, { Component } from 'react';
import Pic from './pic.jsx';


const PicList = (props) => {
  return (
    <div className="pic-list">
      {props.pics.map(pic => <Pic id={pic.id} key={pic.id} selectPic={props.selectPic} />)}
    </div>
  );
};

// class PicList extends Component {
//   render() {
//     return (
//       <div className="pic-list">
//          {this.props.pics.map(pic => {
//             return <Pic id = {pic.id} key={pic.id} />
//           })}
//       </div>
//     )
//   }
// }

export default PicList;




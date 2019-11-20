import React, { Component } from 'react';
import Pic from './pic.jsx';

class PicList extends Component {
  render() {
    return (
      <div className="pic-list">
         {this.props.pics.map(pic => {
            return <Pic id = {pic.id} key={pic.id} />
          })}
      </div>
    )
  }
}

export default PicList;


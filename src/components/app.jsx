import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Pic from './pic.jsx';
import PicList from './pic-list.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pics: [],
      selectedPicId: "QsOEd9P0gJ5ZPDyUbu"
    }
  }

  search = (query) => {
    giphy().search({
    q: query,
    rating: 'g',
    limit: 10
    }, (err, result) => {
        this.setState({
          pics: result.data
        })

    });
  }

  selectPic = (id) => {
    this.setState({
      selectedPicId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
         <SearchBar search={this.search}/>
         <div className="selected-pic">
            <Pic id={this.state.selectedPicId}/>
         </div>
        </div>
        <div className="right-scene">
          <PicList pics = {this.state.pics} selectPic={this.selectPic}/>
        </div>
      </div>
    )
  }
}

export default App;

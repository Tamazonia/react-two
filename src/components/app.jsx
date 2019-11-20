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
    giphy('01pTBySHHvc3jJmX0lkFT7rYu5650n3w').search({
    q: query,
    rating: 'g'
    }, (err, result) => {
        this.setState({
          pics: result.data
        })

    });
  }

  render() {

    // const pics = [
    //   { id: "237" },
    //   { id: "238" },
    //   { id: "239" }
    // ]

    return (
      <div>
        <div className="left-scene">
         <SearchBar search={this.search}/>
         <div className="selected-pic">
            <Pic id={this.state.selectedPicId}/>
         </div>
        </div>
        <div className="right-scene">
          <PicList pics = {this.state.pics} />
        </div>
      </div>
      )
  }
}

export default App;

import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  state = { videos: [], videoSelected: null }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });


    this.setState({
      videos: response.data.items
    })
  };

  onVideoSelect = (video) => {
    this.setState({videoSelected: video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoDetail video={this.state.videoSelected}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;
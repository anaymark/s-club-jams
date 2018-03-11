import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';
import { Row, Col } from 'react-grid-system';
import Image from 'react-image-resizer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import '.././styles/album.css';


class Album extends Component {
	constructor(props)
	{
		super(props);

		const album = albumData.find( album => 
		{
		return album.slug === this.props.match.params.slug
		});

		this.state = {
			album: album,
      currentSong: album.songs[0],
      currentTime: 0,
      volume: .5,
      duration: album.songs[0].duration, 
      isPlaying: false,
      isHovering: false
		};
    //set outside of state so no rerendering occurs.
    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    this.audioElement.volume = this.state.volume;
	}

  componentDidMount(){
    this.eventListeners = {
       timeupdate: e => {
         this.setState({ currentTime: this.audioElement.currentTime });
       },
       durationchange: e => {
         this.setState({ duration: this.audioElement.duration });
       }
     };
     this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
   }

  componentWillUnmount(){
    this.audioElement.src = null;
    this.audioElement.removeEventListener("timeupdate",this.eventListeners.timeupdate);
    this.audioElement.removeEventListener("durationchange",this.eventListeners.durationchange);
  }

  play(){
    this.audioElement.play();
    this.setState({isPlaying: true});
  }

  pause(){
    this.audioElement.pause();
    this.setState({isPlaying: false});
  }

  setSong(song){
    this.audioElement.src = song.audioSrc;
    this.setState({currentSong: song});
  }


  handleSongClick(song){
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong){
      this.pause();
    }
    else {
      if(!isSameSong) {this.setSong(song);}
      this.play();
    }
  }

  handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleNextClick() {
    const currentIndex = this.state.album.songs.findIndex((song)=>this.state.currentSong === song);
    const newIndex = Math.min(this.state.album.songs.length - 1, currentIndex + 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
  }

  handleTimeChange(e) {
    const newTime = this.audioElement.duration * e.target.value;
    this.audioElement.currentTime = newTime;
    this.setState({currentTime: newTime});
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value;
    this.audioElement.volume = newVolume;
    this.setState({ volume: newVolume });
  }

  formatTime(sec){
    if(isNaN(sec)){return "-:--"}
    const intSec = Math.floor(sec);
    const min = Math.floor(sec/60);
    const remSec = intSec % 60;
    let timeDisplay = min + ":";
    if (remSec < 10) {
        timeDisplay += "0"
    }
    timeDisplay += remSec
    return timeDisplay
  }

	render() {
		return(
      <section>
      <Row>
        <Col xs={6} className = 'album-info' >
          <div className = 'album' >
            <Image height ={300} width={300} className = "album-cover-art" src={this.state.album.albumCover} alt = "album cover" />
            <div className = "align-right">
            <h1 id = "album-title">{this.state.album.title}</h1>
            <h2 className = "artist">{this.state.album.artist}</h2>
            <div id = "release-info">{this.state.album.releaseInfo}</div>
            </div>
            </div>
         </Col>

         <Col xs={6} className="song-list">
          <table id = "song-list">
          <colgroup>
           <col className="song-number-column" />
           <col className="song-title-column" />
           <col className="song-duration-column" />
          </colgroup>
          <tbody>
          {this.state.album.songs.map( (song, index) => 
               <tr className="song" key={index} onClick = {() => this.handleSongClick(song)} 
                onMouseEnter={() => this.setState({isHovered: index+1})}
                onMouseLeave={() => this.setState({isHovered: false})}>
                 <td className="song-actions">
                   <FloatingActionButton backgroundColor='#828282'>
                   { (this.state.currentSong.title === song.title) ?
                        <span className={this.state.isPlaying ? "ion-pause" : "ion-play"}></span>
                        :
                        (this.state.isHovered === index+1) ?
                        <span className="ion-play"></span>
                        :
                        <span className="song-number">{index+1}</span>
                      }
                      </FloatingActionButton>
                 </td>
                 <td className="song-title">{song.title}</td>
                 <td className="song-duration">{this.formatTime(song.duration)}</td>
               </tr>
             )}
          </tbody>
          </table>
         </Col>

      </Row>
      <Row>
       <PlayerBar 
        className="player-bar"
        isPlaying={this.state.isPlaying}
        currentSong={this.state.currentSong}
        currentTime={this.state.currentTime}
        volume={this.state.volume}
        duration={this.audioElement.duration}
        handleSongClick={() => this.handleSongClick(this.state.currentSong)}
        handlePrevClick={() => this.handlePrevClick()}
        handleNextClick={() => this.handleNextClick()}
        handleTimeChange={(e) => this.handleTimeChange(e)}
        formatTime={(e) => this.formatTime(e)}
        handleVolumeChange={(e)=>this.handleVolumeChange(e)}
        />
     </Row>
     </section>
     );
	}
}

export default Album;
import React, { Component } from 'react';

class PlayerBar extends Component {
	render() {
		return(
		<section className = "player-bar">
		  <section id="buttons">
           <button id="previous">
             <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
           </button>
           <button id="play-pause" onClick={this.props.handleSongClick}>
             <span className="ion-play"></span>
             <span className="ion-pause"></span>
             <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next">
             <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
           </button>
         </section>
         <section id="time-control">                                                                    
           <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
           <input type="range" 
            className="seek-bar" 
            value={(this.props.currentTime / this.props.duration) || 0} 
            max="1" 
            min="0" 
            step="0.01" 
           onChange={this.props.handleTimeChange}
            />
           <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
         </section>
         <section id="volume-control">
           <div className="icon ion-volume-low"></div>
           <input type="range" 
           className="seek-bar" 
           value={this.props.volume}
           max="1"
           min="0"
           step="0.1"
           onChange={this.props.handleVolumeChange}
            />
           <div className="icon ion-volume-high"></div>
         </section>
	   </section>
		);
	}
}

export default PlayerBar;
import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import '.././styles/playerbar.css';

class PlayerBar extends Component {

  render() {
		return(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
		<section className = "player-bar">
      <Row className = "player-buttons">
           <Col xs = {4}>
           <FloatingActionButton className = "previous" backgroundColor='#828282'>
             <i className="material-icons style" onClick={this.props.handlePrevClick}>skip_previous</i>
           </FloatingActionButton>
           </Col>
           <Col xs = {4}>
           <FloatingActionButton className="play-button" backgroundColor='#828282' onClick={this.props.handleSongClick}>
            <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </FloatingActionButton>
           </Col>
           <Col xs={4}>
           <FloatingActionButton backgroundColor=' #828282' className="next">
             <i className="material-icons" onClick={this.props.handleNextClick}>skip_next</i>
           </FloatingActionButton>
           </Col>
      </Row>
         
      <Row className="time-control">
          
          <Col xs = {6} className = "time-control">                                                             
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}/{this.props.formatTime(this.props.duration)}</div>
            <input type="range" 
            className="seek-bar" 
            value={(this.props.currentTime / this.props.duration) || 0} 
            max="1" 
            min="0" 
            step="0.01" 
            onChange={this.props.handleTimeChange}
            />
          </Col>

          <Col xs = {6}>
            <div className="volume-display"> Volume: {this.props.volume} </div>
            <input type="range" 
            className="seek-bar" 
            value={this.props.volume}
            max="1"
            min="0"
            step="0.1"
            onChange={this.props.handleVolumeChange}
            />
          </Col>
       
      </Row>
    </section>
    </MuiThemeProvider>
		);
	}
}

export default PlayerBar;
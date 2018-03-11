import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import albumData from './../data/albums'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Image from 'react-image-resizer';
import '.././styles/library.css';

class Library extends Component {
	constructor(props)
	{
		super(props);
		this.state = {albums: albumData}
	}

	render() {
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
			<section className = "library">
			{
				this.state.albums.map( (album, index) =>
					<Link to={`/album/${album.slug}`} key ={index}>
					  <div className = "album-photo" >
					  <Image 
					  height = {200}
					  width = {200} 
                      src={album.albumCover} alt={album.title}/>
                      </div>
					  <div>{album.title}</div>
					  <div>{album.artist}</div>
					  <div>{album.songs.length} songs</div>
					</Link>
					)
		    }
			</section>
			</MuiThemeProvider>
		)
	}
}


export default Library;


import React from 'react';
import { Row, Col } from 'react-grid-system';
import Image from 'react-image-resizer';
import '.././styles/landing.css';


const Landing = () => (

	<section className="library">

		<Row className = "app-name">
		  <Col className = "hero">
		    <h1 className = "hero-title">Bloc Jams!</h1>
		  </Col>
		</Row>
		<Row className = "app-name">
		  <Col>
		    <p className = "hero-theme">Turn the music up!</p>
		  </Col>
		</Row>
		
		<Row className = "points-all">
		  
		  <Col sm={4} className = "first-photo">
		    <Image 
		    height={ 400 }
            width={ 400 }
		    src={require('../styles/images/Motto.jpeg')}/>
		    <h2 className = "point-title">Choose your music.</h2>
		    <p className = "point-description">  The world is full of music; why should you have to listen to music that someone else chose?</p>
		  </Col>
	      
	      <Col sm={4} className = "point">
	        <Image
		    height={ 400 }
            width={ 400 }
		    src={require('../styles/images/StreamAway.jpg')}/>
		    <h2 className = "point-title">Unlimited & ad-free.</h2>
		    <p className = "point-description"> No arbitrary limits. No distractions.</p>
		  </Col>
		
		  <Col sm={4} className = "point">
		    <Image
		    height={ 400 }
            width={ 400 }
		    src={require('../styles/images/Devices.jpg')}/>
		    <h2 className = "point-title">Mobile Enabled</h2>
		    <p className = "point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
		  </Col>

		</Row>
		
	</section> 
	);

export default Landing;
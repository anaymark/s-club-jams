import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Row, Col } from 'react-grid-system';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  backgroundColor: '#BDBDBD'
};

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {open: false};
  }


   handleToggle = () => this.setState({open: !this.state.open});

   handleClose = () => this.setState({open: false});

 

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className = "App">
        <Row>
        <Col className = "mydiv">
        <RaisedButton 
          className = "app-button"
          label={<i className="material-icons">view_list</i>}
          onClick={this.handleToggle}
        />
        </Col>
        </Row>
        <Drawer
        docked={false}
        width={200}
        open={this.state.open}
        onRequestChange={(open) => this.setState({open})}>
          <nav>
            <MenuItem innerDivStyle={styles} onClick={this.handleClose}
             containerElement={<Link to="/"/>}
             primaryText={<i className="material-icons home">home</i>}
             />
            <MenuItem innerDivStyle={styles} onClick={this.handleClose}
             containerElement={<Link to="/library"/>}
             primaryText={<i className="material-icons musicLib">library_music</i>}
             />
          </nav>
        </Drawer>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album}/>
        </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
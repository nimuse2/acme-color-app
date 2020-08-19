import React, { Component } from 'react';

import appClasses from './scss/classes.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      height: 0, 
      alertMsg: null,
      startApp: true,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.setState({
      startApp: false,
    })
    console.log('',this.state.startApp)
    if(window.innerHeight < 400){
      this.state.alertMsg = "Window is too small. Aborting program...";
    }else{
      this.state.alertMsg = null;
    }
  }


  render() {
    return (
      <div className={this.state.startApp? appClasses.appStart : appClasses.appBg}>
          <div className={appClasses.appInn}>
            ACME<br/>
            Advanced Compoter Intelligenced Colors<br/>
            v.1.0<br/>
            {this.state.alertMsg && (
              <div className={appClasses.alertMsg}>
                {this.state.alertMsg}
              </div>
            )}
        </div>
      </div>
    );
    }
}


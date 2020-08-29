import React from 'react';
import WordDisplay from './components/WordDisplay';
import Splash from './components/Splash';
import { connect } from 'react-redux';
import { startButtonClicked } from './actions';
import Particles from 'react-particles-js';
import { params } from './particles.js';
import './App.css';

const App = (props) => {


  return (
    <div>
    <Particles className="particles" params={params} />
    {(() => {
        if (!props.gameStarted) {
          return (
            <div>
              <Splash />
            </div>
              );
        } else {
          return (
            <div>
              <WordDisplay />
            </div>
            );
        }
      })()};
    </div>
    )
};

const mapStateToProps = state => {
  return { 
      gameStarted: state.gameStarted,
       }
  };


export default connect(mapStateToProps, { startButtonClicked })(App);


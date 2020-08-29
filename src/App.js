import React from 'react';
import WordDisplay from './components/WordDisplay';
import Splash from './components/Splash';
import Header from './components/Header';
import { connect } from 'react-redux';
import { startButtonClicked } from './actions';
import Particles from 'react-particles-js';
import { params } from './particles.js';
import './App.css';

const App = (props) => {


  return (
   <div className="main-container">
    <Particles className="particles" params={params} />
    <Header />
     <div className="game-container">
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
    </div>
    )
};

const mapStateToProps = state => {
  return { 
      gameStarted: state.gameStarted,
       }
  };


export default connect(mapStateToProps, { startButtonClicked })(App);


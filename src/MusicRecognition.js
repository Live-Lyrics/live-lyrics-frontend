import React from 'react';
import MiniDrawer from './MiniDrawer';
import Micr from './Mic';

class MusicRecognition extends React.Component {
  render() {
    return (
      <MiniDrawer>
        <div>
          <Micr/>
          MusicRecognition
        </div>
      </MiniDrawer>
    );
  }
}

export default MusicRecognition;
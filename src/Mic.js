import React, {Component} from 'react';
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles';
import Mic from '@material-ui/icons/Mic';
import MicOff from '@material-ui/icons/MicOff';
import { ReactMic, saveRecording } from 'react-mic';
import axios from 'axios';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class Micr extends Component {
  constructor(props){
    super(props);
    this.state = {
      record: false,
      isRecording: false
    }
  }

  startRecording= () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording= () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onStart=() => {
    console.log('You can tap into the onStart callback');
  }

  onStop= (blobObject) => {
    let formData = new FormData();
    formData.append('file', blobObject.blob, `${blobObject.startTime}.ogg`);

    axios.post('/blob', formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { isRecording } = this.state;
    const { classes } = this.props;
    return(
      <div>
        <h1>React-Mic</h1>
        <ReactMic
          className="oscilloscope"
          record={this.state.record}
          backgroundColor="#FF4081"
          visualSetting="sinewave"
          audioBitsPerSecond= {128000}
          onStop={this.onStop}
          onStart={this.onStart}
          strokeColor="#000000" />
        <div>
          <audio ref="audioSource" controls="controls" src={this.state.blobURL}/>
        </div>
        <br />
        <br />
        <Fab color="primary" disabled={isRecording}  onClick={this.startRecording} aria-label="add" className={classes.button}>
          <Mic />
        </Fab>
        <Fab color="primary" disabled={!isRecording}  onClick={this.stopRecording} aria-label="add" className={classes.button}>
          <MicOff />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Micr);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Switch from 'material-ui/Switch';
import { FormLabel, FormControl, FormControlLabel, FormGroup} from 'material-ui/Form';
import { connect } from 'react-redux'
import { 
  toggleDiscogs, 
  toggYouTube,
  setYouTubeId, 
  setLyricsProvider, 
  setBroadcastProvider
} from './actions';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 2,
  },
  group: {
    display: 'flex', 
    flexDirection: 'row',
  },
});

class RadioButtonsGroup extends React.Component {

  handleLyricsProviderChange = event => {
    this.props.setLyricsProvider(event.target.value);
  };

  handlesetBroadcastProviderChange = event => {
    this.props.setBroadcastProvider(event.target.value);
  };

  render() {
    const { classes } = this.props;
    const { broadcastProvider, lyricsProvider, additionInformation } = this.props.store;   

    return (
      <div className={classes.root} >
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Broadcast provider</FormLabel>
          <RadioGroup
            aria-label="broadcast provider"
            name="broadcast_provider"
            className={classes.group}
            value={broadcastProvider}
            onChange={this.handlesetBroadcastProviderChange}
          >
            <FormControlLabel value="VK" control={<Radio />} label="VK" />
            <FormControlLabel value="SPOTIFY" control={<Radio />} label="Spotify" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Lyrics provider</FormLabel>
          <RadioGroup
            aria-label="lyrics provider"
            name="lyrics_provider"
            className={classes.group}
            value={lyricsProvider}
            onChange={this.handleLyricsProviderChange}
          >
            <FormControlLabel value="AMALGAMA" control={<Radio />} label="Amalgama" />
            <FormControlLabel value="LYRSENSE" control={<Radio />} label="Lyrsense" />
          </RadioGroup>
        </FormControl>
        
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Addition information</FormLabel>
        <FormGroup className={classes.group}>
          <FormControlLabel
            control={
              <Switch
                checked={additionInformation.discogs}
                onChange={() => this.props.toggleDiscogs()}
                value="discogs"
              />
            }
            label="Discogs"
          />
          <FormControlLabel
            control={
              <Switch
                checked={additionInformation.youtube}
                onChange={() => this.props.toggYouTube()}
                value="youtube"
              />
            }
            label="YouTube"
          />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({store: state})

const mapDispatchToProps = dispatch => ({
  toggYouTube: () => dispatch(toggYouTube()),
  toggleDiscogs: () => dispatch(toggleDiscogs()),
  setLyricsProvider: pr => dispatch(setLyricsProvider(pr)),
  setBroadcastProvider: pr => dispatch(setBroadcastProvider(pr))
})

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RadioButtonsGroup));

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Switch from 'material-ui/Switch';
import { FormLabel, FormControl, FormControlLabel, FormGroup} from 'material-ui/Form';

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
  state = {
    broadcast_provider: 'spotify',
    lyrics_provider: 'amalgama',

    youtube: true,
    discogs: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Broadcast provider</FormLabel>
          <RadioGroup
            aria-label="broadcast provider"
            name="broadcast_provider"
            className={classes.group}
            value={this.state.broadcast_provider}
            onChange={this.handleChange}
            
          >
            <FormControlLabel value="vk" control={<Radio />} label="VK" />
            <FormControlLabel value="spotify" control={<Radio />} label="Spotify" />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className={classes.formControl} >
          <FormLabel component="legend">Lyrics provider</FormLabel>
          <RadioGroup
            aria-label="lyrics provider"
            name="lyrics_provider"
            className={classes.group}
            value={this.state.lyrics_provider}
            onChange={this.handleChange}
            
          >
            <FormControlLabel value="amalgama" control={<Radio />} label="Amalgama" />
            <FormControlLabel value="lyrsense" control={<Radio />} label="Lyrsense" />
          </RadioGroup>
        </FormControl>
        
        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Addition information</FormLabel>
        <FormGroup className={classes.group}>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.discogs}
                onChange={this.handleSwitchChange('discogs')}
                value="discogs"
              />
            }
            label="Discogs"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.youtube}
                onChange={this.handleSwitchChange('youtube')}
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

export default withStyles(styles)(RadioButtonsGroup);
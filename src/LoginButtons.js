import React from 'react';
import Button from 'material-ui/Button';
import { withStyles, createMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faLastfm } from '@fortawesome/free-brands-svg-icons'

const spotifyTheme = createMuiTheme({ palette: { primary: {main: '#1DB954'} } })
const vkTheme = createMuiTheme({ palette: { primary: {main: '#45668E'} } })
const lastfmTheme = createMuiTheme({ palette: { primary: {main: '#d51007'} } })


const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    color: '#FFFFFF',
  },
  rightIcon: {
      marginLeft: theme.spacing.unit,
  },
});


class LoginButtons extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        Login: 
        <MuiThemeProvider theme={spotifyTheme}>
          <Button className={classes.button} variant="raised" color='primary'>
            Spotify
            <FontAwesomeIcon icon={faSpotify}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>

        <MuiThemeProvider theme={vkTheme}>
          <Button className={classes.button} variant="raised" color="primary">
            VK
            <FontAwesomeIcon icon={faVk}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>
  
        <MuiThemeProvider theme={lastfmTheme}>
          <Button className={classes.button} variant="raised" color="primary">
            Lastfm
            <FontAwesomeIcon icon={faLastfm}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(LoginButtons);

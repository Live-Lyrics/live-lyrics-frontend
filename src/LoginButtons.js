import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faVk } from '@fortawesome/free-brands-svg-icons'
import { faLastfm } from '@fortawesome/free-brands-svg-icons'

const spotifyTheme = createMuiTheme({
  typography: {useNextVariants: true},
  palette: { primary: {main: '#1DB954'} }
})
const vkTheme = createMuiTheme({
  typography: {useNextVariants: true},
  palette: { primary: {main: '#45668E'} }
})
const lastfmTheme = createMuiTheme({
  typography: {useNextVariants: true},
  palette: { primary: {main: '#d51007'} }
})


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
          <Button className={classes.button} variant="contained" color='primary'
           onClick={() => {
            window.location = window.location.href.includes('localhost')
              ? 'http://localhost:8888/login'
              : 'https://live-lyrics.herokuapp.com/login' }
          }>
            Spotify
            <FontAwesomeIcon icon={faSpotify}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>

        <MuiThemeProvider theme={vkTheme}>
          <Button className={classes.button} variant="contained" color="primary">
            VK
            <FontAwesomeIcon icon={faVk}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>
  
        <MuiThemeProvider theme={lastfmTheme}>
          <Button className={classes.button} variant="contained" color="primary">
            Lastfm
            <FontAwesomeIcon icon={faLastfm}  className={classes.rightIcon} />
          </Button>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(LoginButtons);

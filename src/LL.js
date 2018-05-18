import React from 'react';
import MiniDrawer from './MiniDrawer';

import ReactPlayer from 'react-player'

import RadioButtonsGroup from './RadioButtonsGroup';
import MediaControlCard from './MediaControlCard';
import LoginButtons from './LoginButtons';

import { connect } from 'react-redux'


class LL extends React.Component {
  render() {
    // const { broadcast_provider, lyrics_provider, additionInformation } = this.props.store;
    const youtubePlayer = this.props.store.additionInformation.youtube ? (<ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls/>) : '';
    const discogsMediaControlCard = this.props.store.additionInformation.discogs ?  <MediaControlCard /> : '';

    return (
      <MiniDrawer>
        <div>
          <LoginButtons />
          <RadioButtonsGroup/>
          {discogsMediaControlCard}
          {youtubePlayer}
        </div>
      </MiniDrawer>
    );
  }
}

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps)(LL)
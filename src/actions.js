export const TOGGLE_YOUTUBE = 'TOGGLE_YOUTUBE';
export const TOGGLE_DISCOGS = 'TOGGLE_DISCOGS';
export const SET_YOUTUBE_ID = 'SET_YOUTUBE_ID';
export const SET_LYRICS_PROVIDER = 'SET_LYRICS_PROVIDER';
export const SET_BROADCAST_PROVIDER = 'SET_BROADCAST_PROVIDER';

export const BroadcastProvider = {
  SPOTIFY: 'SPOTIFY',
  VK: 'VK',
  LASTFM: 'SPOTIFY'
}

export const LyricsProvider = {
  AMALGAMA: 'AMALGAMA',
  GENESIS: 'GENESIS',
  LYRSENSE: 'LYRSENSE',
  MUSIXMATCH: 'MUSIXMATCH'
}

export function toggleDiscogs(bool) {
  return { type: TOGGLE_DISCOGS, bool}
};


export function toggYouTube(bool) {
  return { type: TOGGLE_YOUTUBE, bool}
};

export function setYouTubeId(id) {
  return { type: SET_YOUTUBE_ID, id }
};

export function setLyricsProvider(lyricsProvider) {
  return { type: SET_LYRICS_PROVIDER, lyricsProvider }
};

export function setBroadcastProvider(broadcastProvider) {
  return { type: SET_BROADCAST_PROVIDER, broadcastProvider }
};
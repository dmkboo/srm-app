import { SET_SONG } from './types'

export function showSongs() {
  return {
    type: SET_SONG,
    songs
  };
}

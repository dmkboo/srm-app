import React, { Component } from 'react';
import MdFastRewind from 'react-icons/lib/md/fast-rewind';
import MdFastForward from 'react-icons/lib/md/fast-forward';
import MdPlayArrow from 'react-icons/lib/md/play-arrow';
import MdRepeatOne from 'react-icons/lib/md/repeat-one';
import TiArrowShuffle from 'react-icons/lib/ti/arrow-shuffle'
import ListoParaLoQueVenga from '../../mp3/listo-para-lo-que-venga/Santa-RM-Listo-para-lo-que-venga-46419_front.jpg'


class FooterPlayer extends Component{
  render(){
    return(
      <div className="footerContainer">
        <div className="footerContainerItem">
          <div className="albumPicture">
            <img src={ListoParaLoQueVenga} />
          </div>
          <div className="songInfo">
            <div className="albumName">Listo para lo que venga</div>
            <div className="songName lighterFont">Listo para lo que venga</div>
          </div>
        </div>
        <div className="footerContainerItem">
          <div className="controlsContainer">
            <div className="controlsItem">
              <MdFastRewind size="20"/>
            </div>
            <div className="controlsItem">
              <MdPlayArrow size="20" />
            </div>
            <div className="controlsItem">
              <MdFastForward size="20" />
            </div>
            <div className="controlsItem">
              <MdRepeatOne size="20" />
            </div>
            <div className="controlsItem">
              <TiArrowShuffle size="20" />
            </div>
          </div>
        </div>
        <div className="footerContainerItem">
          <div className="song-status" >
            <p className="current-song-status"></p>
            <span className="player-progress-value"></span>
            <p className="current-song-duration"></p>
          </div>
        </div>
        <div className="footerContainerItem">

            <div className="volume-manager">
                <div className="volume-item">
                  <TiArrowShuffle size="20" />
                </div>
                <div className="volume-item volume-status" >
                  <span className="player-volume-value"></span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default FooterPlayer

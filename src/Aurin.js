/**
 * Created by machenhan on 2017/12/18.
 */
import React from 'react';
import YouTube from 'react-youtube';

class AurinVideo extends React.Component {
    render() {
        const opts = {
            width: '100%',
            paddingTop: '56.25%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };

        return (
            <YouTube
                videoId="_LUeHJuFgE4"
                opts={opts}
                onReady={this._onReady}
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default AurinVideo;
/* -----> Third Party Packages <----- */
import {Component} from 'react' // Component is for creating class Components


/* -----> import styles <----- */
import './index.css'  // CSS File

/* -----> Third Party Components <----- */
import ReactPlayer from 'react-player'  // This is a video player component

/* -----> Creating Components <----- */

const videoURL = 'https://youtu.be/jMfvlh0tjyo'

// class Component

class VideoPlayer extends Component {
    state = {
        isPlaying: false,
    }

    onClickPlay = () => {
        this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
    }

    render() {
        console.log("VideoPlayer Component")
        const {isPlaying} = this.state
        const btnText = isPlaying ? 'Pause' : 'Play'

        return (
            <div className="video-player-component">
                <div className="video-container">
                    <h1 className="heading">Video Player</h1>
                    <div className="responsive-container">
                        <ReactPlayer url={videoURL} playing={isPlaying} controls/>
                    </div>
                    <button type="button" className="button" onClick={this.onClickPlay}>
                        {btnText}
                    </button>
                </div>
            </div>

        )
    }
}


/* -----> Default Export <----- */
export default VideoPlayer


import React from 'react';
import './WatchSection.css';
import axios from 'axios';

class WatchSection extends React.Component{
    state={
        videoData:{}
    }

    componentDidMount() {
        axios
          .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/1`)
          .then((response) => {
            console.log(response.data);
            this.setState({ videoData: { ...response.data } });
          })
          .catch((err) => {
            console.log("error in Default video");
          });
      }

    componentDidUpdate() {
    
        const videoId = this.props.match.params.id;
        console.log(videoId);
        if (videoId !== this.state.videoData.id) {
          axios
            .get(`https://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
            .then((response) => {
              this.setState({ videoData: { ...response.data } });
            })
            .catch((err) => {
              // console.log("Call Failed!!");
            });
        }

     }

    render(){ 
    return(
    <div className="player-wrapper">
        <iframe className="video-player" src={`https://player.vimeo.com/video/${this.state.videoData.vimeoId}`} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

        <div>
            <div className="video-actions">
                <p><span className="views-count">{this.state.videoData.views}</span> views</p>

                <div>
                    <i  className={[
                "far",
                "fa-heart",
                this.state.videoData.isLiked === "true" ||
                this.state.videoData.isLiked === true
                  ? 'Yellow'
                  : 'Heart',
              ].join(" ")}
              aria-hidden="true"></i>

                    <i class="far fa-comment-alt" style={{color: 'rgba(0, 0, 0, 0.7)'}}></i>
               
                    <i  className={[
                "far",
                "fa-bookmark",
                this.state.videoData.isSaved === "true" ||
                this.state.videoData.isSaved === true
                  ? 'Yellow'
                  : 'Heart',
              ].join(" ")}
              aria-hidden="true"></i>
                </div>
            </div>
            <h3 className="video-title">{this.state.videoData.title}</h3>
            <p className="video-description"> {this.state.videoData.description} </p>
        </div>
    </div>
    );
}
}

export default WatchSection;
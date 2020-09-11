import React from 'react';
import axios from 'axios';
import './PlayList.css';
import VideoCard from '../VideoCard/VideoCard';
class PlayList extends React.Component{
    state = {
        videoList:[],
        currentId: 1
    }

    componentDidMount(){
        axios.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist')
        .then(response =>{
            this.setState({videoList: [...response.data]})
        })
        .catch(err =>{
            console.log('call failed');
        })
    }

    handleActive = (id) => {
        this.setState({
          currentId: id,
        });
    }

    render(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        return(
           <div className="playlist-wrapper">
               {
                   this.state.videoList.map(item => {
                       return(  
                          <div className={`${item.id === this.state.currentId ? 'Active' : null}`} onClick={() => this.handleActive(item.id)}> 
                       <VideoCard key={item.id} id={item.id} title={item.title} thumbnail={item.thumbnail} handleActive={this.handleActive} />
                          </div>
                       );
    
                   })
               }
           </div>
        );
    }
}

export default PlayList;
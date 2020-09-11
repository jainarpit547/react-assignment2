import React from 'react';
import { Route, BrowserRouter,Switch, Redirect } from 'react-router-dom';
import './App.css';
import WatchSection from './WatchSection/WatchSection';
import PlayList from './PlayList/PlayList';

class App extends React.Component {

  
  render(){ 
   return (
    
      <div className="App">
         <h1 className="main-heading">The Video Player</h1>
         <div className="player-section">
           <BrowserRouter> 
                 <Route exact path="/" component={WatchSection}/>
                 <Route exact path="/" component= {PlayList} />
                 <Route exact path="/vID/:id" component={WatchSection}/>
                 <Route exact path="/vID/:id" component= {PlayList} />
            </BrowserRouter>   
         </div>
      </div>
     
   );
  }
}

export default App;

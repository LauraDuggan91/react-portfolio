import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import EntryManager from './Pages/EntryManager';
import MySkdule from './Pages/MySkdule';



export const Routes = () => {
    return(
        <div>
            {/* <Route exact path="/"><Redirect to="/Home" /></Route> */}
            <Route exact path="/" component={App} />
            <Route exact path="/projects/EntryManager" component={EntryManager} />
            <Route exact path="/projects/MySkdule" component={MySkdule} />
        </div>
    );
};
import React from 'react'
import {Switch,Route} from 'react-router-dom';

import Join from './components/Join';
import Chat from './components/Chat';
export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={Join}/>
            <Route  path="/chat" component={Chat}/>
        </Switch>
    )
}

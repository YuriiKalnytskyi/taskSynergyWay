import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {Users} from "./components/Users/Users";
import {Groups} from "./components/Groups/Groups";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Switch>

                    <Route exact path={'/users'} render={()=>{
                        return <Users/>
                    }}/>

                    <Route exact path={'/groups'} render={()=>{
                        return <Groups/>
                    }}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;

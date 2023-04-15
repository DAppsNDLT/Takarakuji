import React from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index";
import About from "../pages/About";
import Play from "../pages/Play";


const Routes = () => {
    return(
        <main>
            <Switch>
                <Route exact key="/" path="/" component={Index} />;
                <Route exact key="/" path="/about" component={About} />;
                <Route exact key="/" path="/play" component={Play} />;
            </Switch>
        </main>
    )
};

export default Routes;
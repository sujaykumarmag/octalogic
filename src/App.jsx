import React from "react";
import Entrypage from "./Entrypage";
import Hire from "./components/Hiring/Hire";
import Apply from "./components/Apply/Apply";
import Createjob from "./components/Hiring/Createjob";
import Jobalert from "./components/Hiring/Jobalert";
import JobApplication from "./components/Apply/Application";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Entrypage} />
                <Route exact path="/hire" component={Hire} />
                <Route exact path="/apply" component={Apply} />
                <Route exact path="/hire/createjob" component={Createjob} />
                <Route exact path="/hire/jobalert" component={Jobalert} />
                <Route exact path="/apply/jobapply" component={JobApplication} />
            </Switch>
        </div>

    );
}

export default App;

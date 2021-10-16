import React from "react";
import { useHistory } from "react-router-dom";

function Hire() {
    const history = useHistory();

    function JobCreate(){
        history.push("/hire/createjob")
    }

    function JobAlert(){
        history.push("/hire/jobalert")
    }

    return (
        <div className="hire-page">
            <h1 className="hire-title">Hello There!!! This is Hiring Page</h1>
            <button className="create-job" onClick={JobCreate}>Create a New Job</button>
            <button className="alert-job" onClick={JobAlert}> Job Alerts Page</button>
        </div>
    );
}

export default Hire;

import React from "react";
import { useHistory } from "react-router-dom";


function Entrypage() {

    const history = useHistory();

    function Hiring() {
        history.push("/hire");
    }

    function Applying(){
        history.push("/apply");
    }

    return (
        <div className="first-page">
            <button className="hiring" onClick={Hiring}>HR (FOR HIRING)</button><br />
            <button className="applying" onClick={Applying}>Employee (FOR APPLYING)</button>
        </div>
    );
}

export default Entrypage;

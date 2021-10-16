import React from "react";
import { useHistory } from "react-router-dom";

function NewJobs(props) {

    const history = useHistory();

    function ClickAttr(){
        history.push("/apply/jobapply");
    }

    return (
        <div onClick={ClickAttr}>
            <h3>job name:{props.jobname}</h3>
            <h3>technology:{props.tech}</h3>
            <hr />
            <p>{props.desc}</p>
            <br />
            <br />
        </div>
    );
}

export default NewJobs;

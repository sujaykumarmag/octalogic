import React from "react";

function NewApplies(props){
    return(
        <div className="applicants">
            <h1>{props.name}</h1>
            <p><b>Job Code :</b></p>
            <p>{props.jobcode}</p>
            <p><b>Technology :</b></p>
            <p>{props.tech}</p>
            <p><b>About the Employee :</b></p>
            <p>{props.notes}</p>
            <p><b>Notice Period :</b></p>
            <p>{props.notice}</p>
            <p><b>Expected Salary :</b></p>
            <p>{props.salary}</p>
        </div>
    );
}

export default NewApplies;

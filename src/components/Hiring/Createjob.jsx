import React, { useState } from "react";

let newjob = [];



function Createjob() {

    const [create, setcreate] = useState(false);


    function Created() {
        if (newjob.length === 3) {
            setcreate(true)
        }
        else{
            alert("The Form says to fill all the details given");
        }
    }

    return (
        <div className="create-jobpage">
            {create ? <h1 className="alert-boxaftercreating">Hello,We have created your HR Application Check the job Alerts page</h1> : null}
            <p>HR Name</p>
            <input
                onChange={(event) => {
                    newjob[0] = event.target.value;
                    console.log(newjob)
                }}
                placeholder="Name"
                value={newjob[0]}
            />
            <p>Description</p>
            <input className="hr-des"
                onChange={(event) => {
                    newjob[1] = event.target.value;
                    console.log(newjob)
                }}
                placeholder="Description"
                value={newjob[1]}
            />
            <p>Technology</p>
            <input
                onChange={(event) => {
                    newjob[2] = event.target.value;
                    console.log(newjob)
                }}
                placeholder="Technology"
                value={newjob[2]}
            />
            <br />
            <br />
            <button className="createjob-btn" onClick={Created}>Create Job</button>
        </div>
    );
}

export default Createjob;

export {newjob};


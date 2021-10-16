import React,{useState} from "react";


const apply =[];

function JobApplication(){

    const [state, setstate] = useState(false);

    function ClickAttr(){
        if(apply.length===6)
        {
            setstate(true)
        }
        else{
            alert("The form says to fill out all the details for applying the jobs");
        }
    }


    return(
        <div>
            <h1>Application Page</h1>
            {state ? <h1>Job Application has been Submitted to the HR</h1> : null}
            <p>Job Code</p>
            <input 
                placeholder="jobcode"
            />
            <p>Employee Name</p>
            <input 
                placeholder="Employee-name"
                onChange={(event) => {
                    apply[1] = event.target.value;
                    console.log(apply)
                }}
                value={apply[1]}
            />
            <p>Notes</p>
            <input 
                placeholder="Notes"
                onChange={(event) => {
                    apply[2] = event.target.value;
                    console.log(apply)
                }}
                value={apply[2]}
            />
            <p>Technologies</p>
            <input 
                placeholder="Technologies"
                onChange={(event) => {
                    apply[3] = event.target.value;
                    console.log(apply)
                }}
                value={apply[3]}
            />
            <p>Notice Period</p>
            <input 
                placeholder="Notice Period"
                onChange={(event) => {
                    apply[4] = event.target.value;
                    console.log(apply)
                }}
                value={apply[4]}
            />
            <p>Expected Salary </p>
            <input 
                placeholder="Salary asked"
                onChange={(event) => {
                    apply[5] = event.target.value;
                    console.log(apply)
                }}
                value={apply[5]}
            />
            <br />
            <br />
            <button className="createjob-btn" onClick={ClickAttr}>Apply For this Job</button>
        </div>
    );
}

export default JobApplication;

export {apply};


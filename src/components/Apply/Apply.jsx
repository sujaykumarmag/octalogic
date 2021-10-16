import React from "react";
import Hiring from "../Hiring/HiringDatabase.json"
import NewJobs from "./Newjobs";


function Apply(){

    function Application(data,index){
        console.log(data);
        return(
            <NewJobs 
                key={index}
                jobname={data.title}
                tech={data.technology}
                desc={data.description}
            /> 
        );
    }
    return(
        <div>
            <h1>Recent Jobs</h1>
            <div className="hirepeople"> {Hiring.map(Application) } </div>
        </div>
    );
}

export default Apply;

import React, { useState } from "react";
import emplapply from "../Apply/Empdatabase.json";
import NewApplies from "./Applicants";
import ContactPage from "../../api/api";



function JobAlert() {

    const [searchterm, setSearchTerm] = useState("");
    const [app, setapp] = useState(true);
    const [state, setstate] = useState(false);


    function Search(event) {
        setSearchTerm(event.target.value)
    }

    function Filtering(data) {
        if (searchterm === "") {
            return data;
        }
        else if ((data.name).toLowerCase().includes(searchterm.toLowerCase())) {
            return data;
        }
        else if ((data.technology).toLowerCase().includes(searchterm.toLowerCase())) {
            return data;
        }
        else if ((data.noticeperiod).toLowerCase().includes(searchterm.toLowerCase())) {
            return data;
        }
        else if ((data.salary).toLowerCase().includes(searchterm.toLowerCase())) {
            return data;
        }
    }

    function ClickHandle() {
        setapp(false);
        setstate(true);
    }


    return (
        <div>
            {app ? <div>
                <input
                    placeholder="Search.... Name, Jobcode, Technologies, NoticePeriod, Expected Salary"
                    type="text"
                    onChange={Search}
                />
                <div
                    className="applicant-grid"
                    onClick={ClickHandle}>

                    {emplapply.filter(Filtering).map((data, index) => {
                        return (
                            <div>
                                <NewApplies
                                    id={index}
                                    key={index}
                                    name={data.name}
                                    jobcode={data.jobcode}
                                    tech={data.technology}
                                    notes={data.notes}
                                    notice={data.noticeperiod}
                                    salary={data.salary}
                                />
                                <br />
                                <br />
                            </div>

                        );
                    })}
                </div>
            </div> : null}
            {state ? <ContactPage /> : null}
        </div>
    )
}

export default JobAlert;



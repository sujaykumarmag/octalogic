import React from "react";
import Axios from "axios";

function ContactPage(){

    const url ="https://qrtag.net/api/qr_9.svg?url=https://github.com";

    Axios.get(url).then((res)=>{
        console.log(res);
    })
    return(
        <div className="qrcode">
            <img src="https://qrtag.net/api/qr_9.svg?url=https://github.com" alt="qrtag"/>
        </div>
    )
}

export default ContactPage;

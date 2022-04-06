import React from "react";
import Loader from "react-loader-spinner";
import "./PageLoadSpinnerStyles.css"
import "./style.css"

const PageLoad = () => {

    return (
        <div className="overflow dark" id="preload">
        <div className="circle-line">
            <div className="circle-red">&nbsp;</div>
            <div className="circle-blue">&nbsp;</div>
            <div className="circle-green">&nbsp;</div>
            <div className="circle-yellow">&nbsp;</div>
        </div>
    </div>
    )
}

export default PageLoad
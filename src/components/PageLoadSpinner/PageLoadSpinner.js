import React from "react";
import Loader from "react-loader-spinner";
import "./PageLoadSpinnerStyles.css"
import "./style.css"

const PageLoad = () => {

    return (
        <div class="overflow dark" id="preload">
        <div class="circle-line">
            <div class="circle-red">&nbsp;</div>
            <div class="circle-blue">&nbsp;</div>
            <div class="circle-green">&nbsp;</div>
            <div class="circle-yellow">&nbsp;</div>
        </div>
    </div>
    )
}

export default PageLoad
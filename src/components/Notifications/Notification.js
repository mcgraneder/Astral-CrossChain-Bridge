import React from "react"
// import "./Notification.css"

const Notification = (props) => {

    return(
        <div className={"notification-item"}>
            <p>{props.message}</p>
            <div className={"bar"}></div>
        </div>
    )
}

export default Notification
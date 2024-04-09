import React from "react";
import "./img_right.css";

export default function img_Right({
    title,
    description,
    video,
    icon,
    subtitle,
    subdescription
}) {
    return (
        <div id="img_right">
            <div className="containerdesc1">
                <div className="box-containerdesc">
                    <div>
                        <span id="c-spantitle">{title}</span>
                        <p>{description}</p>
                    </div>
                    <div>
                        <img src={icon}/>
                        <span>{subtitle}</span>
                        <p>{subdescription}</p>
                    </div>
                </div>
            </div>
            <div className="conteinervid1">
                <video src={video}></video>
            </div>
        </div>
    )
}
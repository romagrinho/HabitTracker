import React from "react";
import "./imgs.css";

export default function img_Left({
    title,
    description,
    video,
    icon,
    subtitle,
    subdescription,
    icon2,
    subtitle2,
    subdescription2
}) {
    return (
        <div id="img_left">
            <div className="containerdesc1">
                <div className="box-containerdesc">
                    <div>
                        <span id="c-spantitle">{title}</span>
                        <p className="pdesc">{description}</p>
                    </div>
                    <div id="div-subtitles">
                        <div>
                            <img className="icon_rimg" src={icon} />
                            <span className="c-spansubtitle">{subtitle}</span>
                            <p>{subdescription}</p>
                        </div>
                        <div>
                            <img className="icon_rimg" src={icon2} />
                            <span className="c-spansubtitle">{subtitle2}</span>
                            <p>{subdescription2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conteinervid1">
                <iframe src={video}></iframe>
            </div>
        </div>
    )
}
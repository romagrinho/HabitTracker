import React, {useEffect, useState} from "react";
import "./imgs.css";
import ScrollReveal from "scrollreveal";

export default function Img_Right({
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

    useEffect(() => {
        ScrollReveal().reveal('.HrevealC', { delay: 200, reset: true, distance: '40px' });
    }, []);

    useEffect(() => {
        ScrollReveal().reveal('.HrevealC2', { delay: 250, reset: true, distance: '40px' });
    }, []);

    return (
        <div id="img_right">
            <div className="containerdesc1 HrevealC">
                <div className="box-containerdesc">
                    <div>
                        <span id="c-spantitle">{title}</span>
                        <p className="pdesc">{description}</p>
                    </div>
                    <div id="div-subtitles">
                        <div>
                            <div className="icon_img" style={{ backgroundImage: `url(${icon})` }}></div>
                            <span className="c-spansubtitle">{subtitle}</span>
                            <p>{subdescription}</p>
                        </div>
                        <div>
                            <div className="icon_img" style={{ backgroundImage: `url(${icon2})` }}></div>
                            <span className="c-spansubtitle">{subtitle2}</span>
                            <p>{subdescription2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conteinervid1 HrevealC2">
                <video src={video}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
                ></video>
            </div>
        </div>
    )
}
import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <section className="Home">
            <div className="container-section1">
                <header id="header1">
                    <div>
                        <img></img>
                    </div>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul></ul>
                </header>
                <iframe id="video1" src="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <span className="blur_green"></span>
                <span className="blur_blue"></span>
            </div>
            <div className="container-section2"></div>
            <div className="container-section3"></div>
            <div className="container-section4"></div>

        </section>
    )
}
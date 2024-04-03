import React from "react";
import "./Home_1.css";
import "./Home_2.css";
import "./Home_3.css";
import "./Home_4.css";
import RS from "/Users/Romario/Desktop/NotionLandingPage/habittracker/src/imgs/LogoBranco.png";

export default function Home() {
    return (
        <section className="Home">
            <div className="container-section1">
                <header id="header1">
                    <div>
                        <img src={RS}></img>
                    </div>
                    <ul>
                        <li>Gerenciador de Habitos</li>
                        <li>Gerenciador de Tarefas</li>
                        <li>Workout Tracker</li>
                        <li>Gerenciador Financeiro</li>
                    </ul>
                    <a>EXPLORE JÁ</a>
                </header>
                <div className="ContainerHome1">
                    <div>
                        <span className="titleHome">Organize sua vida pessoal e profissional com o </span>
                        <span className="subtitleHome">Gerenciador de Habitos</span>
                        <p className="descHome">Organize o melhor ano da sua vida com o Gerenciador de Habitos. Gerencie seus novos hábitos, controle suas metas, planeje seus estudos, treinos e dieta</p>
                        <span className="descSpanHome"> em um só lugar.</span>
                    </div>
                </div>
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
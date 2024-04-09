import React from "react";
import "./Home_1.css";
import "./Home_2.css";
import "./Home_3.css";
import "./Home_4.css";
import RS from "./imgs/LogoBranco.png";
import stars_rate from './imgs/stars.png'
import people from './imgs/peoples.png';
import ComponentRight from "../../Components/img_Right/img_right.jsx";

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
            <div className="container-section2">
                <div className="c2-container1">

                </div>
                <div className="c2-container2">
                    <div className="block_btn">
                        <a className="btn_gerencie">
                            Gerencia suas metas agora!
                        </a>
                    </div>
                    <span className="spanprice"><span className="spanprice_green">12x de R$ 8,02</span> ou R$79,90 à vista</span>
                    <div className="block_rating">
                        <div className="divimgpeople">
                            <img className="img_people" src={people}></img>
                        </div>
                        <div className="rating">
                            <div className="img1">
                                <img className="img_stars" src={stars_rate}></img>
                            </div>
                            <span>4.9/5 de +510 compras</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-section3">
                <div className="c3-container1">
                   <ComponentRight
                   title="Hábito"/>
                </div>
            </div>
            <div className="container-section4"></div>

        </section>
    )
}
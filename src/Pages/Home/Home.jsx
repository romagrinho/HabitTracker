import React from "react";
import "./Home_1.css";
import "./Home_2.css";
import "./Home_3.css";
import "./Home_4.css";
import "./Home_5.css";
import "./Home_6.css";
import RS from "./imgs/LogoBranco.png";
import stars_rate from './imgs/stars.png'
import people from './imgs/peoples.png';
import ComponentRight from "../../Components/Ferramentas/img_right.jsx";
import ComponentLeft from "../../Components/Ferramentas/img_left.jsx";
import icon_engrenagem from "./imgs/engrenagem_icon.png";
import mockupcel from "./imgs/mockupcel.png";

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
                <div className="c3-container">
                    <ComponentRight
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentRight
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentRight
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Hábito"
                        description="O Dashboard permite que você veja tudo que está acontecendo. Veja os hábitos, notas, finanças e treinos com facilidade"
                        icon={icon_engrenagem}
                        subtitle="Sincronização"
                        subdescription="Acesse o template no computador ou no celular"
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container2">
                    <div className="block_btn2">
                        <a className="btn_gerencie2">
                            Gerencia suas metas agora!
                        </a>
                    </div>
                    <span className="spanprice2"><span className="spanprice_green2">12x de R$ 8,02</span> ou R$79,90 à vista</span>
                </div>
            </div>
            <div className="container-section4">
                <div className="c4-container">
                    <div className="c4-containerleft">
                        <div className="excel_img">

                        </div>
                        <div className="excel_img2">
                            <div className="ferramentasexcel-imgs" />
                            <div className="ferramentasexcel-imgs2" />
                        </div>
                    </div>
                    <div className="c4-containerright">
                        <div className="c4-textconteiner">
                            <span className="c4-subtitletext">🎀 VEJA ESTE PRESENTE</span>
                            <span className="c4-titletext">Controle de Gastos</span>
                            <div className="c4-desc">
                                <p>Além do template 100% editável, você receberá uma série de aulas para tirar o máximo do seu Segundo Cérebro. Aprenda a customizar cada área, domine o Notion do zero e adicione mais uma habilidade ao seu repertório.</p>
                                <div id="c4-div-subtitles">
                                    <div>
                                        <img className="c4-icon_rimg" />
                                        <span className="c4-spansubtitle">Comentários</span>
                                        <p>Automatize seu sistema usando propriedades avançadas.</p>
                                    </div>
                                    <div>
                                        <img className="c4-icon_rimg" />
                                        <span className="c4-spansubtitle">Sincronização</span>
                                        <p>Faça gráficos e exporte relatórios em poucos clicks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="c4-button">
                                <div className="c4-block_btn2">
                                    <a className="c4-btn_gerencie2">
                                        Acesse agora
                                    </a>
                                </div>
                                <span className="c4-spanprice2"><span className="c4-spanprice_green2">12x de R$ 8,02</span> ou R$79,90 à vista</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-section5">
                <div className="c5-containermain">
                    <div className="c5-containerleft">
                        <img src={mockupcel}></img>
                    </div>
                    <div className="c5-containerright">
                        <header>
                            <h1>Aproveite os benefícios</h1>,
                        </header>
                    </div>
                </div>
            </div>
            <div className="container-section6">
                <div className="c6-containertitle">
                    <span>  Um template, entregue em três passos:</span>
                </div>
                <div className="c6-containervideo">
                    <iframe src="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="c6-containersteps">
                    <div className="div-step">
                        <h5>PASSO 1</h5>
                        <h2>Acesse</h2>
                        <p>O acesso será enviado ao seu e-mail imediatamente após a compra. Basta clicar no link e, na área de membros, duplicar o template.</p>
                    </div>
                    <div className="div-step">
                        <h5>PASSO 2</h5>
                        <h2>Compre</h2>
                        <p>O Segundo Cérebro já está disponível para compra. Você pode pagar via pix e cartão. Sua compra é totalmente segura pela Kiwify.</p>
                    </div>
                    <div className="div-step">
                        <h5>PASSO 3</h5>
                        <h2>Aproveite</h2>
                        <p>Você terá acesso total a todas as ferramentas. Customize seu Segundo Cérebro como quiser e tire o máximo de cada área</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
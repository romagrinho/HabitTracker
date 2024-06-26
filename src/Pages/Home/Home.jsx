import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./Home_1.css";
import "./Home_2.css";
import "./Home_3.css";
import "./Home_4.css";
import "./Home_5.css";
import "./Home_6.css";
import "./Home_7.css";
import "./Home_8.css";
import "./Footer.css";
import relogio from "./imgs/iconrelógio100.png"
import estrela from "./imgs/iconestrela.png"
import peso from "./imgs/icondumbell.png"
import saude from "./imgs/iconhealthy.png"
import trofeu from "./imgs/icontrofeu.png";
import cerebro from "./imgs/iconcerebro.png";
import RS from "./imgs/LogoBranco.png";
import stars_rate from './imgs/stars.png'
import people from './imgs/peoples.png';
import ComponentRight from "../../Components/Ferramentas/img_right.jsx";
import ComponentLeft from "../../Components/Ferramentas/img_left.jsx";
import icon_engrenagem from "./imgs/iconsengrenagem-100.png";
import mockupcel from "./imgs/mockupcel.png";
import eu from "./imgs/eu.png";
import notion from "./imgs/notion.png";
import laptopw from "./imgs/laptop notion white.png";

export default function Home() {

    const data = {
        /*  title: "FAQ (How it works)", */
        rows: [
            {
                title: <h1 className="FAQTitle">Como receberei acesso ao sistema?</h1>,
                content: <p>Após a compra, você receberá acesso exclusivo a nossa área de membros.Por lá, disponibilizaremos o link para duplicar o sistema em seu espaço de trabalho.Além disso, terá acesso às aulas gravadas com a trilha de implementação, e a explicação de todos os recursos do sistema.</p>,
            },
            {
                title: <h1 className="FAQTitle">O que é Notion?</h1>,
                content: <p>Notion é um espaço de trabalho completo que permite fazer anotações, adicionar tarefas, gerenciar projetos e se organizar. Esteja você escrevendo ou planejando, o Notion tem um design versátil para realizar suas tarefas</p>,
            },
            {
                title: <h1 className="FAQTitle">Não sei utilizar o Notion, vou conseguir me adaptar?</h1>,
                content: <p>Sim, além de ser super intuitivo, no template contém aulas partindo do pressuposto que você nunca baixou o Notion.</p>,
            },
            {
                title: <h1 className="FAQTitle">Posso personalizar o Notion?</h1>,
                content: <p>Sim! Por ser um template do Notion você tem total controle sobre o Template, podendo assim, editá-lo a qualquer momento, para deixar 100% a sua cara</p>,
            },
            {
                title: <h1 className="FAQTitle">Quanto tempo de acesso eu tenho?</h1>,
                content: <p>Nosso sistema não é uma assinatura. Você paga uma única vez, e pode utilizar para sempre!</p>,
            },
            {
                title: <h1 className="FAQTitle">E meus dados pessoais?</h1>,
                content: <p>Não se preocupe! Uma vez baixado o Potencial dos meu objetivos, todos os dados contido nele são privados. Ninguém terá acesso a sua vida pessoal, somente você.
                </p>,
            },
            {
                title: <h1 className="FAQTitle">Eu tenho mais perguntas</h1>,
                content: <p>Envie sua pergunta para contato@produtivo.org. Terei o maior prazer em responder.</p>,
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        /*   titleTextColor: "blue", */
        rowTitleColor: "blue",
        rowContentColor: 'grey',
        /* arrowColor: "red", */
    };

    const config = {
        /*  animate: true, */
        /*    arrowIcon: "+", */
        /*  tabFocus: true */
        openOnload: 500,
        /*  expandIcon: "+", */
        /*  collapseIcon: "-", */
    };

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
                        <li>Planilha Financeira</li>
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
                        description="O Dashboard permite que você veja tudo que está acontecendo. Gerencie os dias, e todos seus habitos."
                        icon={trofeu}
                        subtitle="Ranking"
                        subdescription="Um ranking que contabiliza os dias em que você cumpriu cada hábito, retornando uma mensagem de status a cada progresso!"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Metas"
                        description="No template você também pode gerenciar suas metas a partir do método SMART, em diversos nivéis de longevidade, desde 7 dias até 1 ano ou mais!"
                        icon={cerebro}
                        subtitle="SMART"
                        subdescription="Metodologia utilizada para ajudar as pessoas a definir e alcançar seus objetivos de maneira clara e eficiente."
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentRight
                        title="Treino"
                        description="Controle seus treinos de forma visual. Crie metas, insira o seu protocolo e veja seu desenvolvimento."
                        icon={peso}
                        subtitle="Avançado"
                        subdescription='Com propriedades que te permite protocolar técnicas avançadas do seu treino, como "drop-set", "bi-set" e mais.'
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Dieta"
                        description="Gerencie sua dieta de maneira visual: estabeleça metas, registre seu plano alimentar e acompanhe seu progresso de forma intuitiva."
                        icon={saude}
                        subtitle="Saúde"
                        subdescription="Sua vida toda num só lugar."
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentRight
                        title="Livros"
                        description="Transforme suas leituras em uma experiência organizada e eficiente! Faça anotações sobre seus livros, gerencie o status e o progresso de cada um."
                        icon={estrela}
                        subtitle="Classificação"
                        subdescription='Além de gerenciar seus livros, você pode destacar os melhores, marcar o status como "concluído", "lendo" e até "iniciar" novas leituras!'
                        icon2={icon_engrenagem}
                        subtitle2="Sincronização"
                        subdescription2="Acesse o template no computador ou no celular"
                        video="https://www.youtube.com/embed/xqZs7K41yvA?si=cHUqmoWywSu56vjH" />
                </div>
                <div className="c3-container">
                    <ComponentLeft
                        title="Tarefas & Lembretes"
                        description="Organize 100% sua vida, gerenciando suas Tarefas & Lembretes, colocando observações, separando por prioridade, por categoria e mais."
                        icon={relogio}
                        subtitle="Alerta"
                        subdescription="Acesse o template no computador ou no celular"
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
                            <h1>Aproveite os benefícios!</h1>
                        </header>
                        <div className="beneficios">
                            <div className="bene_left">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR4nO2Z30tUQRTHP65SGynkq39A7r/QD9MSkXrpxz8QUkGFEFG0+RhB/qh/w97CXquHIq0oe61WeqkstSIKNGiF3DjwvTDIyt5Z79x7of3AwO7szDkzd8+Zc85caNGiRdp0AyPAfaACrKnZ5xn9ZmNyyy5gDPgF1Bq0n8B1oEjO6AHmnYU+AM4CvcButZL6HjrjXmluLugBPmlhZj4HY8zp09ia5vbkwZzmtaDHwB6PuTb2iea+zNrMxrSQd56biDCnX5CMcoD1xV5E5NhxzGkr+p0DoJsMGHEce7s8kqzTZMCMlJ9JQNY5ybpHBkS2bUfsdik5p17qrEp5ZwKyOiVrlQyIglpe5W1LcQcwDEwCc8BH4LeafZ7Vb8Ma20heKriKu5Q7LcbIs2pORC87ppn5Ro7paUff3wLjwGCdXMv6JhRAo/EfJCPzjbgJ4GGP+ftkapvlpErBUVwFzgNtTcixOReAdUdegRS5IaU/gEMJyOuXrJpkp4LZ8189RR9TaoTla1XJPkpgLNX+rCdn5pQ0FyV7MXRaf9mpH5rxiUa0AS+k4xKBsAC2LCVm06E4Ih2mqz2EgqhueEN4KgnUOVsyJeG3CM+kdFlgTZynEm7ROQ47tKAl4IsiuvXFYUi6rKZPnPcSvjfm+Ik6Udv64tCr8VbzJM6aZ/2xVGcj5sCZ1ydVCbdMNw7f62zkW8y5XRr/hwB89TSt6HBwm/mMj2mtEIDnns7esclPxusUU42cfY4A3PF02Ihm0vPbnv+gF33OrWLojSxozn4C0O74yYDHvFnFoLgMOidcsNrkmlMNhkoaX0vHFQJSdF4hWGWXNKNOHR/8dv4UsKHCKsks2Iq0dck+QUrcdErdJDYzkEWpi5zwrhSvq7Jr9vJh1Ll8mA7kew0XUVaNXdObKyuKfE6nyLE3FJ8KZMjJTRd0FQWyIV3KdaqV1DflxInIsY+TE4rAVeVGca9Ml3XE7iSHFIADeurPtLGq2or6pjQmUzNq0eJ/4x94LiDUc+50cgAAAABJRU5ErkJggg==" />
                                </div>
                                <span>Compra 100% segura</span>
                            </div>
                            <div className="bene_right">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7UlEQVR4nO3YT6hNURTH8Y/nP+UlQoT0CgMGDKSkSCkpSSmlGChTQ6NXeiNTQwO9kjJRMjFgQErKSzJhQAyI/Mn//3/e0a316vS69/Z679x7zzntb+06nb322nuf3W+vtQ6JRCKR6BFZTZrabaSqZLXdyIDqMdBsI5+wX3XYg/etxD6K0+hTXqbhJP61EvtgrvMK+pWP/lhbFmsdbCX2/HE9xgblYR0eNpFBy1trFUbi3Rcc1Hv24WOs6cG4i6nt9TsHw7m+s5ip+0wPzY7GOi5i/mTiyHH8jv6bWKp7LMK1mPtPCHxKAXE7XoXNc2zReTbhacz5FruKiuwrcCfsfuKYznEY32Kue1hddIoyG2fG6WaW4pgRehjzfx5zO5lrHcH3GHMby02dJbiRO/GGNruSNG7Gsxj3BjtNnm14Gb5eYGu3s9/FuD6BW6UdjS//K3zcwrJepfHj7/kLmDeBcY04da6gOJUVWY8cwtfwcx9r2tiuxN2w/YGjZSus1uNR+HqH3U1sduB12DzBxrJWiAtwOfz9xakoCRqp94nQUqPvKhaWvdTtw1BON5eijdU7QwXXO1mna/a9+JDz/xkHqvrzYW2UBCPx3Amy2v5FqSpZ2kjJyNKJlIwsnUjJyGp7IlnFm9psJJFIJBK6zX+RmLvdeUFJ9AAAAABJRU5ErkJggg==" />
                                </div>
                                <span>Envio imediato por e-mail</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_right">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADc0lEQVR4nO2aT2xNQRTGf0WqVQmVFgtaBCEoSbcNTYhYaELEglI2JKQqKYkgREmkJRZdNIKNdKPd2Fi0oiXEnwWJLlRYsEAXRdBEKX3tlUnOS8bJva/vNfe+d29yv2QWfffdmflm5jvfOfMKMWKEEieAa0ANUEiEMQY40oaB28B+oISIwZH2HBi3/k4Aj4DjwFIiAEeaQSlQB9wBRqxnpr0DWoFNwDRCTsTGDNGN0c+gIvUFaAd2AjMJOREbU4EqoBl4o0j9kh08CMwn5EQ0Vkm0e6x0ZQLHC+AcsJIIELExNw1dVQFTCDmRdHX12dJVESEnYsPW1dsUupoXdiIa64CzoiHtVzeIEBEbC4HDwF0Z2xCLJJFAxo+J+AQn3hGF+Gj5BCc+Wh4V4kPgUA4qQ8evHbksKUOyw1GgC9gHzCJ4OH76WKEkcyb/+WN1PiKf1QVYQDlBGXKxlZaPuiR6hnC+j+M52cgsSiRD1QXUd0nJa3yo351sp0hlwFEhZafkX6X+MCl7XtR8zJS6FxQh094DF4GKCBnyf5O4AnxUpPqBM8CyNPvICtYCJ4EncpS6gSNqEqYm3+GyS8nLv2PAgmwTMbX3VuAq8MFjcna7BFQDK6wjtgW4CfxQtyxJ4y0Nmog530NqogPAdWCbiH4v0CHRy1F3xw7wyZpoAbAd6PQw3oyImCubWlmhAVnlNmCziydUqFXUROwbEBN6N8iO9Kt3xoBnwGmp1xFTrXUxXs9S16zCRqAFeKk8QLchWa1dwOw0jtaIpZElatzFQL08/63e61XfnQMcAO7py4fVQKNs17DLlnfL8zVAJXAe6FPf+wv0yCTLPcSeUO+8lnytWm7t6z2ImH4nxAP10rjsRIvcnpsd8sIioEEGslMSR/poEuJ5ltvvAW4B31LsdAJ4CpyyjtaEuK86+SnHZbfkTumiWN7pdBG8m66MRtbLgr0SYh0SDCZdDnhdLCfkM/Ns+SRuCltddDJsZcVJXQWCMkn2dHRIOm7zJHIjvxcqYxRJltruElYHrSx2egZ9lgewUBkhX854m8txGfJBV0abdp9Gu4EjT6JRk0QnewKjEsUaJKp5oUCiopdf9ZIDlIt/9Iif2BPqE9+pFB9qFK9w86sueW58LedIpSvH5Vep5D8cpPKrnEPrakBytlrJ4WLEiEF28A/i2r4oWhCc3wAAAABJRU5ErkJggg==" />
                                </div>
                                <span>Atualizações gratuitas</span>
                            </div>
                            <div className="bene_left">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,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" />
                                </div>
                                <span>Acesso vitalício</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_left">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEmklEQVR4nO1b3U8UVxQ/8Kb9L4D0waXqgyYm7VtJmhZbjT5oDKYNEkrSF+sXbWMyhBiy4rfsYjW1ieyu2NgGP4K1VmN2li9BQFyF3UX5EBFBA6itrsrsac5053pndlmXB3Z2L/NLToB7Lnfm95tzztw7MxcgFh8AwBoA2AYA5YLY9wDwFQAshgTIAoCdADANACioTQHA9ihXHbIB4HQanGCqzGMUYSffITc3F0tLS7G8vFwIIy7EySACpTjLeRb2JSUlGA6HUTQQp+LiYmM6LIZocVAb8/LyhCSvgbjl5OTwIqwmAXZoDWVlZayzoijocrlUi0Qic2pLZ1A6GNOgQmuQJIl1JEJau9vtnlNbOoM4cgJUWALALBFA4UxX1OPxsNBOtk2ICBAVlgBSgggoKChAu90ujFVXV2MwGEw+AkBAoxng+wTYvNAFyAaAIrPn6/NhlZWVGAqF3iuAClwgsASQrAhAYwp8CAADtEoy5stCiYCftIaqqioUHdZMULLWAjjrTFCyFkMSig4rBSQrBdCqAWAVQczou8Bo+Dn+MdaLJ0e6sOFxHz4Ov1gYNSCsvMWK0HVcKtdivuxkttRXi3v6vRhWZsQVQIlEsNR/QUfcaN/6L6KCETEFqH/k15Hdcvs87r3fhJu6f9e1n3nkF1OAdZ1nGMmaoRusna43pYXmW9/5m3gCvFZmWN4v9x1T/+Yx8frfd/VArsU3EUUsAV7OvGEEP2k9GeMnQfg0oP5CCUBY2XxCJfeR7IyJALotauRXNB3HRMhYAb7ocDOSRJhH97Mx5ivsSPyGuq6ujhegKGME+LqngZG89WxM5/vryT3m+6anIeE42vcMUfLZGSPArr4rjCQR5uF62MN8uwJXkhoPOFRkggD7BpoZSfdoj853cKCF+fYPNIspwKmHtxhJIszjh8DfzEf9hBTg0kSIkfwxcFXn23L7HPP9OdEvpgC+yWFG8rs7jTrfhq6zzEf9Mk6AV8pbbBwPqcvbePbzcAeuvVnPSNLKj8e23svMt7azHo8/uDnrWI0TIXWilDYCBP95ioUdnoSrPN5oKkz/w6NtakSdICU7xqc3TqHNd3SZ6QLQlZ8LeZrlXRgPxB3r15EuXOY7lvRYNq8jsKrlwCJTBaCw5+f4dAujCm+0o4NteHbsrrroSYQHr6bx9Kgfjwy2xR2Hxv+45Zd3Isg1G00VgHJbO5nDg60pOeahwVY+CnabKoBzqJ2dDP2e6mPavE5zF0OWAENWBGCyVXs+zJZOKWAJIFsRgFYKyObUgO1aDaDtJKkE/zzfDFsiO2hDJXzJf1ebqk1T9B7vs3aXqQLke52FEN06NqWJQFvL5lsEIr87eM3kO4BjUlsM6dKAjD6apHSI9w0+PVamJ6vxMPxyWn0kRT+NoJeWtJKjsDf9yqsC1GzlnwlkRbeTJvUJOokQD5+3u2d9Nn9+PGA6ae7quwAxZv9wVnQfHUuHBKa+UDAiX3b2/38QR8jos8mOzWlAfFK98nHIAweqCVQYqULa4xh7oWDEkuuOPKqstqYjuTFOlLLzZWeRzeuwp9rUc5JrVvM5r+E/lTTopMMtmCMAAAAASUVORK5CYII=" />
                                </div>
                                <span>Totalmente customizável</span>
                            </div>
                            <div className="bene_right">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADUUlEQVR4nO2YyWsUQRTGfxqil6gRk3HDJYtHDVGP5uLuX6AXTy4XERTRiwrR/AWKoCIIXlyiEfFgRBE0gyYhiaAR9aLiYVwxisvBGDNS8DUU7Szd09tMyAfN9FS9el1fvXqvXj2YxMRGP9DLBEBWT5RIAUPAg0omkgKG9Q1j/YokUg88lf4XwDwqkEh9UBKDwGOZNGwiKQWGAR/badjHXP4j4kdBGujxIGdPbjBqErlMOp/g8KqzPmyfcK9KXQBddR5XOBWWJQopPujqWwecBZ4D3/WY9zPAWpfsoSRJ2Ku531LcDNy3HDzfY2SaNCYlHXVJkXCjDfiiD34CjgCtQI2elcBR9WUlu4bCiJ3EMotEFzCjgOxM4LpkPwOLy4UEynHMB68BUykOI3MVGAe2lwuJ9frgxyKWcKMW2BkSif4wMuxz+ujhoIoCWCIbRhr0UkpWJEAinSMipr0KuoV/qK0mZhL55tfjh0hPiETCcOxs0lsrrOiU9piYRuLsiYTYQthQQvgtOxLuA9EcclOoUBJOijKiyV3RYReURAvQAfQB74AxoJsY0KbcyaQdOwKQaLZyMfdjSEWCOcA+3dwMlgTMnbYA3yT3F7gDfNB/8z4rChL25A54lCtGYkxyD7W1VsvCb+IgUeiq62c7OZY4D1Sr/bLa9sRBIozrqeMTt4Aqq904uWlvIAIMSfmzkEi0aPv8zFE9+S0d04kAT0QmrEJBh2RP5ehzLLKImFHKYdcneXNBc+Om+nYRI0o9sZ1Vd0K4jW3qe+Uhu67VLTHQoRkk7XD8YFqeu/2g+rsL5HKzgXuSGy2RQ+DcKaOx+cqkDdah+BrYLZ8xAaAR2Au8tU7/TBIkbB8x1cl8WKoKfb6Cn4l67/X+KAkSBsel40QRuanAVuCGVn1UvxeBVcBd6WlPggS6WY6rPlyqnlblZkbPcq+DorhPdEnfJQ/3GTeqFa3M+E48IqpLUZOVa3X4IFMFXNC4Ea+pTFASxaqBm4E/lmWK6V8I3Ja8GbexnEo2m4CvkjM+c1In/gJtobma8Gngl2WJWEh4rgYKjVaBO1+4dUJup5/MeCCgJTxXA10w0eeYzoWMMoCM/rf7iU4OepUmBHXsUKqB5YBQqoGToILxD4zJnmRf7YThAAAAAElFTkSuQmCC" />
                                </div>
                                <span>Modo noturno</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_right">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACp0lEQVR4nO2Zu2sUURSHv9U81MpHRCPaiRILH5hgEv8LsTEKahUFrSNpVUjpEza1EBSNiK/GIqCFpFRjZSFRCxMTO4kx6sqB38BlcNednXvXvTAfDAvLzLnzu+fMveecCwUFBQUZWQ0MAKPAJPAW+Ar8AL4Dc8AMcEf39AIlWogdwBjwCahkvOyZS0D3P8aYBl6GEtAFlIFl58XeATeAY8ABYCPQDqwBtgD7gJO654PznNm4BmyoMlZyn3eGgEUZXwFuAf0ZbVhYDQJ3gV+y9QU42gwhNrvjjuEnwE4PdvcAU47d60BbKCHr9OJm8BtwGr+Yh85qYbAxHgCdvoW0OyI+K/5DMQjMa6zHWg29CRl3ROwiPHuBBY151ZeQISecQnoiTX9qRazkXWKTmfH9TdTDeV9CyjLwlHC8yLCBNsR2uXbF0xL734SM6WHb7KJlFfBRQrLu2C3FgJM7Rc2ohFhyFzWTEmJZbNTMSMh+ImdRQjYROcsS0kFrMZ21UrRN6jmtRacm19L8qNnsVJFRc1BCXhM5JyTEavyoKUvICBFTAt5LSB8Rc1giZpXQRsuEhFxu1EC9BY/tO6HoAX4CS8C2mIU80xjWUm0Y92XP0XyGNfZcjb5wZiGWGhyiefQpnCpV+sGZSERc0e+Cmmeh2e10G3OFVFqItS0fOW62UjikJ+Y11sNUM7th3DaMZZ/3nTA7E+DEadgJJxOx1pfhdD+pTb3Y3/p/SstjXnqc1amicPLiiYRqjbEjjvvtkOaedt8sHirpmQntE0nY5v6w/0atDt96ecdtNFsv7CZwSvV+t47dOlQ2Wyp+XAlgkjtVFE61jt5yU0+luBW4mDoTrPea1WFowzt2CEqa8QvAbeCNzlOW5DVraLxSPTGi1SnqBLCgoIDm8wfxYRGOrD4G4AAAAABJRU5ErkJggg==" />
                                </div>
                                <span>Acesso sincronizado</span>
                            </div>
                            <div className="bene_left">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,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" />
                                </div>
                                <span className="span-easyto">Easy to use & Desing minimalista</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_main">
                                <div className="beneficiosimg_main">
                                    <img src="data:image/png;base64,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" />
                                </div>
                                <span>Caso você queira algo a mais, você também pode solicitar uma melhoria ou customização no email <span className="span-email">blablabla@gmail.com</span></span>
                            </div>
                        </div>
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
            <div className="container-section7">
                <div className="c7-containermain">
                    <div className="c7-blockleft">
                        <h1>Conheça quem desenvolveu</h1>
                        <img className="img_eu" src={eu}></img>
                        <p>Olá! Sou o Romario, um desenvolvedor Full-Stack e empreendedor com 3 anos de experiência em desenvolvimento. Ao longo da minha trajetória, já ajudei inúmeras pessoas a alcançarem seus objetivos com sistemas personalizados, templates profissionais e planilhas eficientes. </p>
                        <img className="img_notion" src={notion}></img>
                    </div>
                    <div className="c7-blockright">
                        <div className="c7-containerright_top">
                            <div className="c7-titleTop">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACHklEQVR4nO2a3U3DMBRGMxM8lIkSmABGYJtrdy9QNwC1qBWobX4c2981OUfyW1sl56S2E6XrAAAAAAAAAAAA5hKHr9EBhSGAGAKIIYAYAoghgBgCiCGAGAKI2XqA0O+60L/pDmDLAezlsQv95+k8w/CuOYitBrBf8s9DEmGLAeyGfFmErQWwEfmSCJ4ChNOCuCv6+3E4TJ7zKUKthdlLALtcmYcuPj8V/P1p+cdjKHkhuAtgV3LyRnAr30MAuysnTwTX8tUBbFLOugju5SsD2Gw5aRGakK8KYIvkLI/QjHxFAFssf1mEpuTXDmDJ8udFaE5+zQC2Wv54hCbl1wpg2eTfjtCs/BoBwoLb/5/Pzf/s+dHF0u+4omSAkCCndDB3lApgK6aFff/QxeEj65TlUn6pAJZhTs4XwbH8EgEs44K4PoJz+bkDWIHdSHqEBuTnDGAFt4LLIzQiP1cAq7APnx+hIfk5AljFm6DpCI3JXxvABHeg9yM0KH9NAOXt//4qQqPyUwN4ePayv0RoWH5qgOMrGx52I6Hwayyup6DYv/6v3UiLi3C8GwH5VQLcjoD8qgH+RkC+JMB5YWbOFwaARAgghgBiCCCGAGIIIIYAYggghgBiCCCGAGIIIIYAYggghgBiCCCGAGLmvV6ynVEd9QlHZ4MAAwHkV2HkH6AXEZmC9DKiYLAGDASQX4VxS/8AAAAAAAAAAAAAAADonPMNaWKO+EPTyPYAAAAASUVORK5CYII=" />
                                <h1>Gerenciador de Habitos</h1>
                            </div>
                            <div className="c7-priceBox">
                                <div>
                                    <h1>R$86,90</h1>
                                    <s>R$116,90</s>
                                </div>
                                <p>ou<span>12x de R$07,24</span></p>
                            </div>
                            <div className="c7-contentBox">
                                <span>Gerenciador de Habitos</span>
                                <span>Gerenciador de Metas</span>
                                <span>Gerenciador de Dieta</span>
                                <span>Gerenciador de Treino</span>
                                <span>Gerenciador de Livros</span>
                                <span>Gerenciador de Tarefas</span>
                            </div>
                            <div className="c7-block_btn2">
                                <a className="c7-btn_gerencie2">
                                    Gerencia suas metas agora!
                                </a>
                                <span>Seu pagamento é 100% seguro</span>
                            </div>
                        </div>
                        <img src={laptopw} className="img_laptop"></img>
                    </div>
                </div>
            </div>
            <div className="container-section8">
                <div className="c8-containermain">
                    <header>
                        <h1>Perguntas Frequentes</h1>
                    </header>
                    <div className="faq">
                        <Faq
                            data={data}
                            styles={styles}
                            config={config}
                        />
                    </div>
                </div>
            </div>
            <div className="container-section9">
                <div className="c9-containermain">
                    <div className="containerfooter">
                        <div className="c-footerleft">
                            <img src={RS}></img>
                        </div>
                        <div className="c-footerright">
                            <h1>PRODUTOS</h1>
                            <a>
                                <text>Gerenciador de Habitos</text>
                                <text>Planilha Financeira</text>
                                <text>Gerenciador de Tarefas</text>
                                <text>Workout Tracker</text>
                            </a>
                        </div>
                    </div>
                    <div className="c9-containerdireitos">
                        <div className="c9-direitoleft">
                            <text>© 2024 RS.org - todos os direitos reservados.</text>
                        </div>
                        <a className="c9-direitoright">
                            <text>Termos de Serviço</text>
                            <text>Política de Privacidade</text>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
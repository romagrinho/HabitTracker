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
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEv0lEQVR4nO2YW2wUVRjHf51zzkLVhPjiBR9EQ8QLUZqKCW0CRo1oNKYtmCCGgJjCihY1iI1Bu9VeQy0UFrtzCsoLFiUaSRSNF2KMCYHoi5c3EzXcDPXBoG1AejnmzE4JdvfM7DY8zj85Tzvzfd9/vtv/LCRIkCBBggQJEiQojl4qUzmWS8170udnpTmrfIzSXJADnJb9DLKNm5kuurhaZnlWag5Kn9+VZsT6sL6sz5RmmY2hfMMZpNRsUJo/lQ4Cdh+fCbWDo2zj+jLsXyVa6JHtDKsejNoZaX9I+qQ5gCjJdmWOG5TP97GBTznyLUZlJ+k4+7KJGvkCx2UzRr6GkW0YtTWGRP4cq9zD7EjjKsdd0udUucFf8rWM7OAdl31vFavF0/wr0hi5ESM3Y+SrIQmbiWzMR9KcVLu50/nlY4PvLzEbrXxQEHwdafE4E2IlRqzBiHUY2RSSsJnowKjeeB/S50RhJjLImLK5oDSfqD7aVJZvZZY/wmZ2ZkK1kJs0Lx6kzlvKuPcoRtRjxAqMWB2S2IiRL3NOZjgounk98KE5pDSjEfEc/V9PhA3revjQzD3cWFBuXVTJ3mByOEl4r9DEIhZ6tYx4izHe/RjvYYyoC0mswYg0e3mJ66ban5FjjtJ8FlFO6/NPaq6ImDY5MnhRfSPbGXSSyDIuljDkVWG8hRivFuPdd5HEmPcET0XZtr6Vj++aTsGItXPe8cCXpY4uuYW3nV+qA1MxP3+86oskbDmtKsW2jUH5HC5mO+XTgPR5v8iPo6kBbinJwSSJVne6xfOYirkhCZuJJTSWYzuluVX5jBVp6P2EG3aq088pF4YK0covThINmIp5mIoF7CrbNmArokgf/EggDwodtk3HCc3Mkl0Mu0awdy8/cDupaRJoL2L37OUlUI3yFvGdayHJNzlHhmsuGwGfv1wl9MV0nFQsIGfLRDwUsYi6OMWB8rOgNF8VLSGr+oowG0v1M68cB95iNtgGDSbOXIx4xk1CdPBNObZTu7mtaBNrBm2HL3OM0cOljlHvEdYGo9GOyOqQxB2BpHBnopX9JUVvVYLm66JjdID6QPPbpeBwpOMWmbeSRlHHuF1OwZKqDUdlFUbUMqT6GHeS6OQjO72cxg8gpM+A4/0z7GVm8JzV2y4ndp3btV5gfDOzRZp9gRywsqAuv2EDuWBlQw3D1HC3t4l1KufOhNrOSdnNPVPNzxjgJjvOne8NXLpL7LbTHIsgMap8PlV9tIsu3pAtfCybOW+FmBVkgTCzJOoxVrB5SxkTD/DYpHm1hR2x4i/LGSsUVR+dga9oMXekoLytRA30tvulvNTtzcuDQAJbKdwUkrCZsFJ5OeNeXeGmlRkGI0no8ERlK9+4x9GO25+9LMSSsDO+J38JCS4jloTNRBoj1nLeW82TrpJWGXbGBaiigvc5ofqZ7+yZyUzElFP++rc1JGEz0YwRL/KbfK6wlgtIdNOodkWWh3GWjevLF+1+zfqI6ZQnYTPRzt+ihQ42cWVpxoE+rlV9HFE5JkoI/EzQsDHT0P23ik+DXRhS81MoO0akz69S86HMkqabWUwX25kj+9knNaeDW1++R/6xvqTm3WDOT47KBAkSJEiQIEGCBEzFf8PWGwt5IQbBAAAAAElFTkSuQmCC" />
                                </div>
                                <span>Acesso vitalício</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_left">
                                <div className="beneficiosimg">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3ElEQVR4nO2by4sUVxTGfz1d1xnHvyAguEh0max160p8bYSM2gZCyCIKJj4GiQ8sRM2ASSAL6XtmYgRFF7PNxhAFs8oim0iy8DG6cetroRsTbTlNVXuq+jUNOtV9pw4cpuee6lv9fXW+c++tugXttgrYDhwEjgTiB4BtwCQ9rAJMA8+ARqD+FDiUYM3YGHB1CH7gUvmVPAnTuQMWAAFmAnFJMFmMKvGW5m3azwHjhGeK6UJODpMkxSFtvBco+NQU232Dd4s2HjYN9VxdqCVeGbBtmE3yMohNg35OrWbadw/YNszWhjcuCaBjBlSSK7rLpPZi24LIgFCtJIAeGfD7EMzb36XrBG/dIBnQCNAX+hGwZ7kTMJaM5TMB+glgbT8ClpuVBFBmABkJrAMeJKukvF6WRQYcNQ3fEr6VM0F6TIRiwreSAMoMoJQAZQ2gLILlKMCIDoMTP7PG1fki8hxxns9XzrJ6eYwCP7Ay8sw64ZUTGi33/O8857nIRLgEzFN1wm8Z4Hn3XONk8/5GeAREwt4c4OvO86Pz/GnbI+GrMAnw3DJAT7UCDSqJLFIC/g6PgJ8YN7p/qf9n4sIHhpxXzLMiLAIuscoAfNSFoJYM9PiwCACc53lS6F7nM6A5LL4l4EWfrkaTgMhzLwWpgDMxYYOpAXf7dGUfA9RGhgAn/NEC6VlvYyvq7DBD4c0+Xdn9DGMjQ0AkXE1BKuBc7GuTAboBaiCLR4EAJ3xvQO7PxWZMBpwLkoDIc9AUuplMTLhsyNFNkeER4IQpUwMuZWKeGyYDPg2SgKqwyYD81cac8Fca0+NGjwBh0gm7dHnbxY9Hnn8NAeft1yNh3kjgn0g41q0vV2dnfqIUF0mAm+PjyHOn5yov6y/1O7aPqmejTpAW20fkeejqfFI8AcLkgOBfOGlOZNos8kw74b9FkyDc1vsLhRKgaW/n+DqEJUNa1j2n3Sxf6qKnV3/jwoeRZ58TznTp55zzPDbnnCqUANW20fXZpTinE74zUjhedAbE5mrERZ0zLgmgzIDGEEigCI+HSQIlAa7MAEoJuAJqwCFTA/R1kiUzez+/CI+Sewdbc/tql+alqYtMRJ4HRRJQFTaTvDr21JBw4b2ToOCFXwoeAZ6ki6G8DBrJpknpsgdfV2MdH0COz/GR3rrSv23Bk4zpSk7Tvugr30x/zzf25+m7PlcG2ILeeUkqLHS7N+/qfFY06BZ44bI+UyRnleQ9OiuHbl7r9fCiIwHCnqKBa9o3r3wH8BjTmqCFUStkpz34rQcKeWtKQDig6/K2oErAU+u4Tn/Prr+pOssWq/nU3gCTEHOedbciYAAAAABJRU5ErkJggg==" />
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
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAExklEQVR4nO2YXUxbZRjHH74sPWwu6xfCBu9pz2mdMUs0xYtdGM2yeGG8mBfGG2/MrlxJ9ELYsgubFoZyoWZzhrgLFQxLtpjFzZDFVFYEQseg0PKxrXQ9Z4uZ8yMM0UXiGDzmPaXQnp5zWqBAif0n/+TN87bk+b3neZ6+HICCCiro/6ljYZcLfnSgpgdsfZIzfM7YXnd0U5N/f6z+UEPYNa+ZWI/9NoRrH0qma00A57yhve7QpiR/PORyNITqHzSG69WT7+YfQqiWAqBkuqYxNYCOOvoUHpjaX3BsbPJj7+xuCNdHaPKaAEHSt5x8wjSmBdBRh4YOZ2RX5/7dG5K82+8ubQy5fInkVQFozcuTT1ilH4xLAHE7feB/qTTnAI0h1+fJySsCrNS9MoBKPxhTAOrQ0O48k/OJI08+DUBe92pW6AejDGCpJ47mdOJkBFCqezXL+sGoCJCDyZQ8cTQBtOo+i34wKgGsdzLJJ44qQOa6z9gPRjWAtU6mxMQ5EX4P2yZP4ZVol2S6prFlAKW6n6hFuEkQpghCjI07SuKxCYIwlt4PxkSynU6s6HoWSwM2yXRNY6ueTJ9MfnjhXKQD+2J9GIgFUkxjdK9l/AOEEBmESYIQIQhRFkHMwgJBuM3Gv3OD0L8xtOvb57D86tNYNELSnhSN0b2d3+0/nzXAAeHw5WNCM3bH/GkANEb39gkHEQY4EQbsCKMcwg0bgpANAItwy4YQsiEM8gh+XtCfrsTSS9VYFKxJBwjWSHvlZysvZV9D96oYEMk4I+7Dw8IR/ErolEzXNLaczKS1J3WUOhD67QjDHMKELX7S1HRNY3SPfibpOyXnSE+F14zUTIsFdR1VWPzTXsl0TWOM1zQO7ioGVqWY1QEimdU8zRh7H7odCxlvpepe0LdW/pIAUDLjNf29w2t4BtYkgX0zY0kEuNG1AhRd4Ue1ko/b8hasSyI5qwlwi+1dK0DZ1zX9GU7/s/UlHwcoB4ENqkOQWeh2/LNqAJ9jTn/SMqsBcB1O8TrIiaIcDyL5UxViiAusunwu266pn7x5RtdUaYWcSrC+oQowZb22WoAn2vYMKQJ4zIt6j+X13Ca/DMGeUSmjf8HPT2dfPvaZiibzI+UnYGqFDdMUrwOBHVaEGOGybubii5xy83pMAfgCymBDJbAEBHY6DSBKQtkClJ+umlCYOL/pmw17YFMUs74GArsouyIsQo/95yzK5x6tcxnAAtNkfgU2VQL7adpTGLP5MwGUnGd7FU7fDZuuYWcZCGy/7Gqh+f6HWvdx1R3ZyLwKF6AEtkRRrgZE8kcKRB8fUQX4wR6RTZz7jNv8FGypRPJqSj9MyG6oyeXzDUmePvM7PKYXIS8kktakf1h+hW7HYwWABf1Hlumk0mmAvJEfSkEkvUk31JG0q0MXH0r6tf0eEIogrzTF7wWR/C4B3Ex/A1f2Zc3gEsDdnS3VRshL3ak9CAL7GETyV8oN1eeYY06a5yo85kflHssByGsJbLP0FK7zAys3Ty5++k1mF+S9EIpBJD6IrtxQdW3VYcZjzv6twpYrZq0EgdyVbqg++wzjtUQMbsOTsK0kkpchyPUUX7T1Ml7T87AtFba9W9ZJ3oZtK4Ti/Jv3BRVUEOST/gOrhms/lBTYmAAAAABJRU5ErkJggg==" />
                                </div>
                                <span className="span-easyto">Easy to use & Desing minimalista</span>
                            </div>
                        </div>
                        <div className="beneficios">
                            <div className="bene_main">
                                <div className="beneficiosimg_main">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJkklEQVR4nO1daYxlRRX+pl/V6x4YB4RRZozEJdG4jBu4EDfiEvclRkUUcd+iiBpJIGhskbhFVNrufu+c2w0dJy5DIwEN/JAoiigDhoASlyAmxgExAqMwzgzjwEybc/t201O37l73vfveqy+pTDL9qm7d81XVqTp1zrlAHjA26Q626jmc6AuKy6CDrSJDVIFmPEMzOopxp2Ys+YLKMlCEO0SmItv8TMxgg2JcrBkHPQmoayAeVISLRNapXEzM4njFuNUTgZ6sCCJrkXnyzCD83pOBni7PivFHTGFjjI9ombJV2qsYl2nCeYpwti8oLINQdiJDxt4EUuZtCjymMxTjcsxgc34F5JEKxhZF+HGMFMJD4U5sBZHmN8m4ApMYS3+CR2FMYiyBlNnlHyxhnWVru9fPjBrB2KIZ+4wJsHPlj5sss+OyOvvjAdHZl5tyxxyOWdEfpqL5khdavdCM82NyFz2iApxkmSHnpDbWwdYW45UrRTFegEW0EyswjlKMk1frEF6xPsBjMcJQjHNicg9wUmFCkrbHivE7zOMR5u814wTNuNdS50FNeD9GFMoFITrA0zMOOR+3PPjSlDr/wohCOSFkebSnEfIZy4N/klLnPtnlYQShnCxZkxjTjJ9aySDcgQ4ebVYRfaEZ+xPqnIsRhXKlQ7CIVquL12nCR9aUd2ABRydVGQ/wBM147+rvGR9SXTwfIwzljBAPJ/CENAyekIbBE9IweEIGnJDvtxlv9wW1yUBknJsQX9AXGXhCuFmDzxPC/SfBE8IDSIhX6miWUvemk/rhzyENgyekYfCEFMD6eTxGBzhNESYVYZtiLMq/4oGoCe/GRXgUKsITkoUlrNNdvFMzrsn0/BdPQ8LP24w3oSQ8ISkQrxnNuLHkdvW6YvEeq8/0F1Q2aMYHNONApTME4QG5EUUBeEIs0Iwv5hC4+AP8WxMOZZBySBE+gZzwhBjQAd6XIuCfyYgf7+Lxqw7nC5gIvW5EsTPuStItbcIbkQOekDXQHTzH5gmjGH8VLxlkYRuO1ISvWGcNYU9IZAY8IWugGb+wjPDri0bKtgO8xaZ/FGN7aULGO3iiheWhdfFsBXhDTBCE2zGNY8u0pwN82KpPxN85ezNxWD3hIubuGXaOcRSGFIpxhWVkvqRKm5pxpWXGcWolcUAn3L5G7pc8/MdJjLUYrxIrZGao7iBjChujLepawV1VtdkwqUKckH9mRqDNYIPIXGQ/ki61LctyJadzF22L97+FlBNctD20UIRPm0LDHI5z0bYmfMNsW5S+i7aHFpowbW5RXS0VivBJy2Yh90FxJKEZbAjtHodtn27Z/n7OVftDCU240Jgh/wNDu2hbYmMshJzhou2R0iG6i2c5anub1yEFEQUPmaP4C6gKMaUw7jPbnpjH4yq3PdRYwIQm7DYIuRNTGK/SrAQgWRT6be46PsRQjEXLsvWeSm0SbrGYT85z1+shhmK80LJsXVq2vShcL2bxrXa+mcNxYk4OL/Ozy3ZN+JbEGTpNTrOIltwlaMa35Rk5+5JeCN+Ltroc7bC+FhVzvb+6bLfDnIoWs0mRforsHyZwEkoR/mRpNE/5tZOT7gw2a8KOkn2oXggXlu77Ao6W7bOTRGaTUEmGsSLl2qp8aMKv+kjGQ1W3vpI/0UlfknKdlGD3xaVfhnFyH8k4pBifQlVMYaNi3FxZjq4CdhTjrNKEEM61tHl/6FiQVQh7ytRVhH9IhokW42VwhW9ivbxLuOMi7MrR/32uks+cYfn9Z8u+hyJ8PtYe4ew8dTXj1BghAZ6NAYCbO3WGtiVWVl28qGzHWgFebllK7s5zWBt5QsKUGnHybkUNlzvtLt7mCcmYIRbztTUlkwvTtWZ0PSEZhMR2EoQHrEmAi2IK42ZOW0X4gxNC5MDZxZNkJyjZ7MQny5ZobVDzZZmJgK931UE5z2iT7LKEMDYpxpmRJ3tsNxO9407N+E64Ze+Dg0F1QpZHsbkbusRhB39gth+eXFMgesbSpx8lbIeTC2GH2LgwUIQsom26ToodxmEHt8cIYRyRWofw3EKCTydF3q3j6gaxN0sW4W7jt9e56qDFfHJvzizRq85mjso16OCRGARCYl9PIOyuerkTgqEty8wNBUwvB1JG/Q2hY3SA06JwZNEt3YwP1Vybmva2QTOEzN+2GK+vxYGNMJ375ZbfYW0E1H5FWGjP4amJlSYx1ma8NWmGSTrcqu9VOyGtAK+2CO43VXcpNm90RXhpqWDNOTyz0LZ2G46MPiURIyV08Wy06UQUO+Mel97yCf5MO3v6ZQbRRZZc7Kt3FA3PbH2mZTTtLzOixQZm3aJSH8IhlmfK38y+tLt4cx2PcxewIwZGwm0WUvbpLj6Yt0PRoe6/lqXqln59t0QHOMXSnx/W8SynEVSSczfp8z3i3p92zxDOCsZVCXXvb3fxNPQLi2jJfbgxW/fUsWw5D2mLwrkSA+xFD0Rpxi8Qo6SMNMX4e9pVasvBjq0qFCFIjGxy+Zw64tQ1410pMyV/IexuAhkCudI1+ye7SzhGbUGfss1UjL+UJSM6bBbOhFAXrAZLyW/iGPVG4S5gQuIjok+L5iXjLkX4mKzbaBC0JRhTTvmun9ObsOgpjIe6hTAte3jDX0mcEn4r+iSMBW8YESuQzz314oDYvzh1MdS5uMTqEaJkMmuXq0N1fLHOJw7IAblZDB3nCt5cloEnpOSdjPgaowZ4QjIgitt2NmoHeDJqgCck+5Ab9yRkfBc1YbgJYegoiunK6H784vDl8oWifdlqcSDsqjMkbXgJmcEGTfil9dDJuFkxPnpYuiTGEZEt7vzEvFeMgy3Ga+vs9tASohjzOQ+iB8z4whSP+LN60O8hJGQGmyvnSzycDDnInt6Lrg8lIS3Ca1yRIf7FvfTNGkpCtMUQGN1oXqAJ/8lJxJ/Di7UeX4olEmL7fPcgE6IZp4Z/nMK4mPQ146tRgrEbI8vy1bKdlRiUNuMp/eq7lZAwC900jrWspV/HoBPScIiMzb4vH0KXsC5mNifchAGAHmxCdliMmMvZ/DRhNsaWpPtrOPSAEhJZBpYSJ0GoRwwrZ+ieE+AUNBh60AgRJ4rlLKb7MuMqE2OtCTfJeicVGlc4HsIg/9f3fhlFUpqLa2vSjWqYACeWfHQGG2LO1L4s9UAGDyaaaSZmcbwnBb0biGIZyMxEJDNF7EOmTvFlyaUM5CZSMZ6XW/+EOVAIs1EsnieEncyIXeJpH6aPrWQZmMMxIUGSisiXEwvLQPzOGFvykPB/tYSvdkiKuMoAAAAASUVORK5CYII="/>
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

        </section>
    )
}
import Head from "next/head"
import Image from "next/image"
import Script from "next/script"
import precious from "./precious.png"
import react from "react"
import { useState } from "react"


export default function Home() {


    return(
        <div>
            <Head>
                <title>Precious</title>
                <link href="icon.png" rel="icon"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Raleway&display=swap" rel="stylesheet"></link>
                <script src="https://kit.fontawesome.com/f6d4afe053.js" crossOrigin="anonymous"/>
            </Head>
            
            <div className="body">
                <div id="Home">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid navbar-pad">
                            <a className="navbar-brand safe" href="#">#ASAFE Nigeria</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse contact-btn" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-items" id="me-auto">
                                <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link nav-link-j" href="#My-Journey">My Journey</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#Vision-Mission">Vision</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#Activities">Visits</a>
                                </li>
                                
                            </ul>
                            <div className="button">
                                    <a href="#Contact-Me"><button className="btn btn-outline-info contact-button">Donate</button></a>
                                </div>
                            </div>
                        </div>
                        </nav>
                        <div className="container">
                        <div className="row">
                            <div className="about col-lg-6">
                                <h1 className="name">I'm Precious Ifiokabasi Udo</h1>
                                <p className="I-am">A 13 year old Safety Advocate whose vision is a society free of accidents and my goal is to create the much needed Safety Awareness that will help eliminate accidents.</p>
                            </div>
                            <div className="image col-lg-6">
                                <Image 
                                    className="picture"
                                    src={precious}
                                    width={500}
                                    height={500} 
                                    alt="A young girl wearing a safety hat"/>
                            </div>
                    </div>
                        </div>
                    

                </div>
                <div id="My-Journey">
                    <div className="journey">
                    <h3>My Journey</h3>
                    <p>I started this journey in 2021 at the age of eleven (11) when my friend lost her father to a ghastly motor accident. This situation affected her deeply that I wished that I could bring her father back to life. I then reflected on a video my dad played with his phone, showing the consequences of not using a seatbelt when involved in an accident. I remember that the next morning immediately my father stepped into his car I cried that he must use his seatbelt first which was always the case.
                        So many other stories I have heard from my father, and as an ardent reader from a very tender age, stories from his book “Practical Safety Guide for Everyone”, and other sources including newspapers, Safety journals and videos helped me in making this choice to pursue this dream.
                        We must save lives and safety must be our priority. Together we can achieve this goal.</p>
                    </div>
                </div>
                <div id ="Vision-Mission">
                    <div className="container">
                    <div className="m-v-v row">
                        <div className="m-v-v-item item-1 col-lg-4">
                            <h3>Mission</h3>
                            <p>Dedicated to creating Safety Awareness and the provision of Safety Equipment that will help eliminate accidents.</p>
                        </div>
                        <div className="m-v-v-item item-2 col-lg-4">
                            <h3>Vision</h3>
                            <p>A world built on Safety Principles culminating in a Society free of accidents.</p>
                        </div>
                        <div className="m-v-v-item item-3 col-lg-4">
                            <h3>Values</h3>
                            <p>Humanity, Love, Education, and Knowledge.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="Activities">
                    <div id="carouselExampleCaptions" className="carousel slide carousel-dark" data-bs-ride="false">
                       
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="carousel-1">
                                    <div className="video-container">
                                        <div className="video">
                                            <h3 className="visits">Visits</h3>
                                            <video className="vid" src={(require('./vid-1.mp4'))} controls></video>
                                        </div>
                                    </div>
                                </div>
                            <div className="carousel-caption d-none d-md-block text">
                                <h5>Safety Advocate Precious Ifiokabasi Udo</h5>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-1">
                                    <div className="video">
                                        <h3 className="visits">Visits</h3>
                                        <video className="vid" src={(require('./vid-2.mp4'))} controls></video>
                                    </div>
                                </div>                            
                                <div className="carousel-caption d-none d-md-block text">
                                <h5>Safety Advocate Precious Ifiokabasi Udo addressing Delta State Special Marshalls</h5>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-1">
                                    <div className="video">
                                        <h3 className="visits">Visits</h3>
                                        <video className="vid" src={(require('./vid-3.mp4'))} controls></video>
                                    </div>
                                </div>
                                <div className="carousel-caption d-none d-md-block text">
                                <h5>Courtesy Visit to Nigeria Gas Company</h5>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-1">
                                    <div className="video">
                                        <h3 className="visits">Visits</h3>
                                        <video className="vid" src={(require('./vid-4.mp4'))} controls></video>
                                    </div>
                                </div>
                                <div className="carousel-caption d-none d-md-block text">
                                <h5>Safety Advocate Precious Ifiokabasi Udo at Federal Road Safety</h5>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-1">
                                    <div className="video">
                                        <h3 className="visits">Visits</h3>
                                        <video className="vid" src={(require('./vid-5.mp4'))} controls></video>
                                    </div>
                                </div>
                                <div className="carousel-caption d-none d-md-block text">
                                <h5>Courtesy Visit to HG Archbishop (Prof) Iyke Uzorma</h5>
                            </div>
                            </div>
                            <div className="carousel-item">
                                <div className="carousel-1">
                                    <div className="video">
                                        <h3 className="visits">Visits</h3>
                                        <video className="vid" src={(require('./vid-6.mp4'))} controls></video>
                                    </div>
                                </div>
                                <div className="carousel-caption d-none d-md-block text">
                                <h5>Safety Advocate Precious Udo visits Engr. Sam Eyesan</h5>
                            </div>
                            </div>
                        </div>
                        <div className="carousel-indicators indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                </div>
                <div id="Contact-Me">
                        <div className="container">
                        <div className="row">
                        <div className="contact col-lg-6">
                            <div className="container-c">
                            <h3 className="contact-heading">Contact Me</h3>
                            <div className="contact-icons">
                                <i class="fa-brands fa-twitter twitter"></i>
                                <a href="#asafeNigeria"> #asafeNigeria</a>
                            </div>
                            <div className="contact-icons">
                                <i class="fa-brands fa-facebook-f facebook"></i>
                                <a href="https://www.facebook.com/asafeNigeria"> asafeNigeria</a>
                            </div>
                            <div className="contact-icons">
                                <i class="fa-brands fa-instagram instagram"></i> 
                                <a href="https://instagram.com/safetyadvocateprecious?igshid=YmMyMTA2M2Y="> safetyadvocateprecious</a> 
                            </div>
                            <div className="contact-icons">
                                
                                <p><i class="fa-brands fa-whatsapp whatsapp"></i> +234 81 0305 8214</p>
                            </div>
                            <div className="contact-icons">
                                
                                <p><i class="fa-solid fa-phone phone"></i> +234 81 0305 8214</p>
                            </div>
                            </div>
                      
                        </div>
                        <div className="donate col-lg-6">
                            <div className="container-d">
                                <h3 className="donate-heading">Donate</h3>
                                <p>Please support this cause by paying into:<br/>
                                    Name: Precious Ifiokabasi Udo<br/>
                                    Bank: Keystone Bank, Nigeria<br/>
                                    Account number: 6022542098</p>
                            </div>
                        </div>
                    </div>

                        </div>
                </div>
                <div id="Footer">Website created by Udo Ifiokabasi Jr. Contact me on telegram: <i className="fa-brands fa-telegram telegram"></i>  +234 90 3034 9950</div>
            </div>
        </div>
    );
}
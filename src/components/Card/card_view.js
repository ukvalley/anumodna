import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";



import { BsEnvelopeFill, BsTelephoneInboundFill, BsFillLightbulbFill } from "react-icons/bs";

import Swal from 'sweetalert2';
import './card.css';
import './basic.css';
import './blogs.css';

import './magnific-popup.css';
import './animate.css';
import './gradient.css';

import './demos/demo-1-colors.css'
import about from './images/man5_big.jpg';
import about1 from './images/pro_img.jpg';




import { useParams } from 'react-router-dom';
const delay = ms => new Promise(res => setTimeout(res, ms));
const Card_view = () => {
    const { id } = useParams();
    const [username, Setusername] = useState('');
    const [userdata, Setuserdata] = useState('');



    useEffect(() => {
        feach_user();
    }, []);

    async function feach_user() {
        await axios.get("https://nonstopmoney.live/sweekar_landmark/api/user_info/" + id)
            .then(res => {
                console.log(res.data.user_info);
                Setuserdata(res.data.user_info)
                Setusername(res.data.user_info.first_name);

            })
            .catch(error => {
                console.log('errr', error)

            })
    }



    return (



        <>
            <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
            {/* /Added by HTTrack */}
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <link rel="stylesheet" href="css/basic.css" />
            <link rel="stylesheet" href="css/layout.css" />
            <link rel="stylesheet" href="css/blogs.css" />
            <link rel="stylesheet" href="css/ionicons.css" />
            <link rel="stylesheet" href="css/magnific-popup.css" />
            <link rel="stylesheet" href="css/animate.css" />
            <link rel="stylesheet" href="css/gradient.css" />
            <title>Ryan - vCard / Resume / CV Template</title>
            <link rel="shortcut icon" href="images/favicons/favicon.ico" />
            <link rel="stylesheet" href="css/new-skin/new-skin.css" />
            <link rel="stylesheet" href="css/demos/demo-1-colors.css" />
            <meta name="next-head-count" content={14} />
            <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
            <link rel="preload" href="_next/static/css/d28dd30c617ed8c4.css" as="style" />
            <link
                rel="stylesheet"
                href="_next/static/css/d28dd30c617ed8c4.css"
                data-n-g=""
            />
            <noscript data-n-css="" />
            <div id="__next">
                <div className="page new-skin">
                    <div className="background gradient">
                        <ul className="bg-bubbles">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                    <div
                        className="container opened layout-rounded-style minimal-icons-style"
                        data-animation-in="fadeInLeft"
                        data-animation-out="fadeOutLeft"
                    >

                        <div className="card-started" id="home-card">
                            <div className="profile no-photo">
                                <div
                                    className="slide"

                                />
                                <div className="title">title</div>
                                <div className="subtitle subtitle-typed">
                                    <div className="subtitle subtitle-typed" />
                                </div>
                                <div className="social">
                                    <a target="_blank" href="face">
                                        <AiFillFacebook />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="insta">
                                        <AiFillInstagram />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="twitt">
                                        <AiFillTwitterSquare />
                                    </a>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="tele"
                                    >
                                        <SiTelegram />
                                    </a>

                                </div>
                                <div className="lnks">
                                    <a href="#" className="lnk">
                                        <span className="text"><BsTelephoneInboundFill />  Contact Me</span>
                                    </a>
                                    <a href="#" className="lnk discover">
                                        <span className="text"><BsEnvelopeFill />  Mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card-inner animated active " id="about">
                            <div className="card-wrap">
                                <div className="content about">
                                    <div className="title">
                                        <span className="first-word">About</span> Me
                                    </div>
                                    <div className="row">
                                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                            <div className="text-box">
                                                <p>about </p>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="content services">
                                    <div className="title">
                                        <span className="first-word">My</span> Services
                                    </div>
                                    <div className="row service-items border-line-v">
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                            <div className="service-item">
                                                <div className="icon">
                                                    <BsFillLightbulbFill />
                                                </div>
                                                <div className="name">
                                                    <span>Web Development</span>
                                                </div>
                                                <div className="desc">
                                                    <div>
                                                        <p>
                                                            Modern and mobile-ready website that will help you
                                                            reach all of your marketing.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                            <div className="service-item">
                                                <div className="icon">
                                                    <BsFillLightbulbFill />
                                                </div>
                                                <div className="name">
                                                    <span>Music Writing</span>
                                                </div>
                                                <div className="desc">
                                                    <div>
                                                        <p>
                                                            Music copying, writing, creating, transcription,
                                                            arranging and composition services.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                            <div className="service-item">
                                                <div className="icon">
                                                    <BsFillLightbulbFill />
                                                </div>
                                                <div className="name">
                                                    <span>Advetising</span>
                                                </div>
                                                <div className="desc">
                                                    <div>
                                                        <p>
                                                            Advertising services include television, radio, print,
                                                            mail, and web apps.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-h">
                                            <div className="service-item">
                                                <div className="icon">
                                                    <BsFillLightbulbFill />
                                                </div>
                                                <div className="name">
                                                    <span>Game Development</span>
                                                </div>
                                                <div className="desc">
                                                    <div>
                                                        <p>
                                                            Developing memorable and unique mobile android, ios
                                                            and video games.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="clear" />
                                </div>

                                <div className="content fuct">
                                    <div className="title">Fun Fact</div>
                                    <div className="row fuct-items">
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="fuct-item">
                                                <div className="icon">
                                                    <span className="fa fa-music" />
                                                </div>
                                                <div className="name">80 Albumes Listened</div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="fuct-item">
                                                <div className="icon">
                                                    <span className="fa fa-trophy" />
                                                </div>
                                                <div className="name">15 Awards Won</div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="fuct-item">
                                                <div className="icon">
                                                    <span className="fa fa-coffee" />
                                                </div>
                                                <div className="name">1 000 Cups of coffee</div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="fuct-item">
                                                <div className="icon">
                                                    <span className="fa fa-flag" />
                                                </div>
                                                <div className="name">10 Countries Visited</div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="content clients">
                                    <div className="title">Featured Property</div>
                                    <div className="row client-items">
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="client-item">
                                                <div className="image">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.google.com/"
                                                    >
                                                        <img src="about1" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="client-item">
                                                <div className="image">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.google.com/"
                                                    >
                                                        <img src="about1" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="client-item">
                                                <div className="image">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.google.com/"
                                                    >
                                                        <img src="about1" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                                            <div className="client-item">
                                                <div className="image">
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://www.google.com/"
                                                    >
                                                        <img src="about1" alt="" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="content quote">
                                    <div className="title">
                                        <span>Quote</span>
                                    </div>
                                    <div className="row">
                                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                            <div className="revs-item">
                                                <div className="text">
                                                    <div>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </div>
                                                </div>
                                                <div className="user">
                                                    <div className="img">
                                                        <img src="images/man1.jpg" alt="Ryan Adlard" />
                                                    </div>
                                                    <div className="info">
                                                        <div className="name">Ryan Adlard</div>
                                                        <div className="company">Web Designer</div>
                                                    </div>
                                                    <div className="clear" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-inner" id="resume">
                            <div className="card-wrap">
                                <div className="content resume">
                                    <div className="title">Resume</div>
                                    <div className="row">
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                            <div className="resume-title border-line-h">
                                                <div className="icon">
                                                    <i className="fa fa-briefcase" />
                                                </div>
                                                <div className="name">Experience</div>
                                            </div>
                                            <div className="resume-items">
                                                <div className="resume-item border-line-h active">
                                                    <div className="date">2013 - Present</div>
                                                    <div className="name">Art Director</div>
                                                    <div className="company">Facebook Inc.</div>
                                                    <p>
                                                        Collaborate with creative and development teams on the
                                                        execution of ideas.
                                                    </p>
                                                </div>
                                                <div className="resume-item border-line-h">
                                                    <div className="date">2011 - 2012</div>
                                                    <div className="name">Front-end Developer</div>
                                                    <div className="company">Google Inc.</div>
                                                    <p>
                                                        Monitored technical aspects of the front-end delivery
                                                        for several projects.
                                                    </p>
                                                </div>
                                                <div className="resume-item">
                                                    <div className="date">2009 - 2010</div>
                                                    <div className="name">Senior Developer</div>
                                                    <div className="company">Abc Inc.</div>
                                                    <p>
                                                        Optimize website performance using latest technology.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                            <div className="resume-title border-line-h">
                                                <div className="icon">
                                                    <i className="fa fa-university" />
                                                </div>
                                                <div className="name">Education</div>
                                            </div>
                                            <div className="resume-items">
                                                <div className="resume-item border-line-h">
                                                    <div className="date">2006 - 2008</div>
                                                    <div className="name">Art University</div>
                                                    <div className="company">New York</div>
                                                    <p>
                                                        Bachelor's{/* */} Degree in Computer Science ABC
                                                        Technical Institute, Jefferson, Missouri
                                                    </p>
                                                </div>
                                                <div className="resume-item border-line-h">
                                                    <div className="date">2005 - 2006</div>
                                                    <div className="name">Programming Course</div>
                                                    <div className="company">Paris</div>
                                                    <p>
                                                        Coursework - Git, WordPress, Javascript, iOS, Android.
                                                    </p>
                                                </div>
                                                <div className="resume-item">
                                                    <div className="date">2004 - 2005</div>
                                                    <div className="name">Web Design Course</div>
                                                    <div className="company">London</div>
                                                    <p>
                                                        Converted Photoshop layouts to web pages using HTML,
                                                        CSS, and JavaScript
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="card-inner " id="contacts">
                            <div className="card-wrap">
                                <div className="content contacts">
                                    <div className="title">Get in Touch</div>
                                    <div className="row">
                                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                            <div className="map">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
                                                    style={{ border: 0, width: "100%", height: "100%" }}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="info-list">
                                                <ul>
                                                    <li>
                                                        <strong>Address . . . . .</strong> California, USA
                                                    </li>
                                                    <li>
                                                        <strong>Email . . . . .</strong> adlard@example.com
                                                    </li>
                                                    <li>
                                                        <strong>Phone . . . . .</strong> +123 654 78900
                                                    </li>
                                                    <li>
                                                        <strong>Freelance . . . . .</strong> Available
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                                <div className="content contacts">
                                    <div className="title">Contact Form</div>
                                    <div className="row">
                                        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                            <div className="contact_form">
                                                <form id="cform" method="post">
                                                    <div className="row">
                                                        <div className="col col-d-6 col-t-6 col-m-12">
                                                            <div className="group-val">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Full Name"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col col-d-6 col-t-6 col-m-12">
                                                            <div className="group-val">
                                                                <input
                                                                    type="text"
                                                                    name="email"
                                                                    placeholder="Email Address"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col col-d-12 col-t-12 col-m-12">
                                                            <div className="group-val">
                                                                <textarea
                                                                    name="message"
                                                                    placeholder="Your Message"
                                                                    defaultValue={""}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="align-left">
                                                        <a href="#" className="button">
                                                            <span className="text">Send Message</span>
                                                            <span className="arrow" />
                                                        </a>
                                                    </div>
                                                </form>
                                                <div className="alert-success">
                                                    <p>Thanks, your message is sent successfully.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clear" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="s_overlay" />
                    <div className="content-sidebar ">
                        <div className="sidebar-wrap search-form">
                            <aside id="secondary" className="widget-area">
                                <div id="search-2" className="widget widget_search">
                                    <label>
                                        <span className="screen-reader-text">Search for:</span>
                                        <input
                                            type="search"
                                            className="search-field"
                                            placeholder="Search …"
                                            name="s"
                                            defaultValue=""
                                        />
                                    </label>
                                    <input
                                        type="submit"
                                        className="search-submit"
                                        defaultValue="Search"
                                    />
                                </div>
                                <section className="widget widget_recent_entries">
                                    <h2 className="widget-title">
                                        <span className="widget-title-span">
                                            <span className="first-word">Recent</span> Posts
                                        </span>
                                    </h2>
                                    <ul>
                                        <li>
                                            <a href="#">Creativity Is More Than</a>
                                        </li>
                                        <li>
                                            <a href="#">Designing the perfect</a>
                                        </li>
                                        <li>
                                            <a href="#">Music Player Design</a>
                                        </li>
                                        <li>
                                            <a href="#">A Song And Dance Act</a>
                                        </li>
                                        <li>
                                            <a href="#">By spite about do of allow</a>
                                        </li>
                                    </ul>
                                </section>
                                <section className="widget widget_recent_comments">
                                    <h2 className="widget-title">
                                        <span className="widget-title-span">
                                            <span className="first-word">Recent</span> Comments
                                        </span>
                                    </h2>
                                    <ul>
                                        <li className="recentcomments">
                                            <span className="comment-author-link">JOHN SMITH</span> on
                                            {/* */} <a href="#">Creativity Is More Than</a>
                                        </li>
                                        <li className="recentcomments">
                                            <span className="comment-author-link">ADAM SMITH</span> on
                                            {/* */} <a href="#">Creativity Is More Than</a>
                                        </li>
                                        <li className="recentcomments">
                                            <span className="comment-author-link">admin</span> on{/* */}{" "}
                                            <a href="#">Designing the perfect</a>
                                        </li>
                                        <li className="recentcomments">
                                            <span className="comment-author-link">admin</span> on{/* */}{" "}
                                            <a href="#">Designing the perfect</a>
                                        </li>
                                        <li className="recentcomments">
                                            <span className="comment-author-link">James</span> on{/* */}{" "}
                                            <a href="#">Designing the perfect</a>
                                        </li>
                                    </ul>
                                </section>
                                <section className="widget widget_archive">
                                    <h2 className="widget-title">
                                        <span className="widget-title-span">
                                            <span className="first-letter">Archives</span>
                                        </span>
                                    </h2>
                                    <ul>
                                        <li>
                                            <a href="#">November 2018</a>
                                        </li>
                                    </ul>
                                </section>
                                <section className="widget widget_categories">
                                    <h2 className="widget-title">
                                        <span className="widget-title-span">
                                            <span className="first-letter">Categories</span>
                                        </span>
                                    </h2>
                                    <ul>
                                        <li className="cat-item cat-item-2">
                                            <a href="#">Design</a>
                                        </li>
                                        <li className="cat-item cat-item-3">
                                            <a href="#">Music</a>
                                        </li>
                                    </ul>
                                </section>
                            </aside>
                        </div>
                        <span className="close" />
                    </div>
                </div>
            </div>
        </>

    )
}

Card_view.propTypes = {};

Card_view.defaultProps = {};

export default Card_view;

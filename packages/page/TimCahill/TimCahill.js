import React, {useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import './TimCahill.scss'
import 'moment-timezone'
import 'lodash'
import 'react'
import {Helmet} from 'react-helmet'
import share from './image/Group 69.png'
import icon1 from './image/Execution speed.png'
import icon3 from './image/Lost cost trading.png'
import icon6 from './image/No Dealing desk.png'
import icon5 from './image/Time.png'
import icon4 from './image/Regulation.png'
import icon2 from './image/Education.png'
import group3 from './image/Group 3.png'
import group71 from './image/Group 71.png'
import group70 from './image/Group 70.png'
import lowCost from './image/low cost.png'
import companyDes from './image/MT5 companies3.jpg'
import companyMob from './image/MT5 companies 320.png'
import iphone from './image/MT4 instruments png.png'
import forex from './image/Forex.jpg'
import forexMob from './image/Forex 320.jpg'
import map from './image/Map.png'
import favicon from './image/favicon.ico'
import apple from './image/Apple chart.png'
import {Text} from './Text'
// import * as Acy from './acy-chart.b652aae2.js'
import './acy-chart.f97b6b70.css'
import {getUrl, useWindowDimensions} from "./utils";
import {CommonSection} from '@landingpage/common'
import {Section1, Section2} from 'components';

const lang = 'ar'
const Data = Text[lang];

//const sideMenu = new window.PromoLiveAccountSideMenu(Data.form.title, Data.form.subtitle, Data.form.lang);
const sideMenu = new SideForm.PromoDemoAccount({

    documentID: 'app',
    lang,
    setting: {},
    callback: () => {
        console.log('submitted')
    },

});
console.log(sideMenu)


const icons = [icon1, icon2, icon3, icon4, icon5, icon6]
const icons2 = [group71, lowCost, group70, group3]

const Point = ({icon, title, subtitle}) =>
    <div className="point">
        <div className="point-img-wrapper">
            <img alt='icon' src={icon} className='icon'/>
            <p className="point-title">{title}</p>
        </div>
        <div>
            <p className="point-subtitle">{subtitle}</p>
        </div>
    </div>;

const AdvantageTable = () =>
    <div className="advantageTable">
        <div className="container">
            <div id="points-section">
                <div>
                    <h2 className="mb-4">{Data.advantageTable.title}</h2>
                </div>
                <div className="points-wrapper row">
                    {Object.keys(Data.advantageTable.points).map((key, index) =>
                        <Fade up delay={index > 2 ? 500 : 0} key={index}>
                            <div className="col-lg-6 point-shadow-wrapper d-flex">
                                <div className="point-shadow">
                                    <Point
                                        icon={icons2[index]}
                                        title={Data.advantageTable.points[key].title}
                                        subtitle={Data.advantageTable.points[key].subtitle}
                                    />
                                </div>
                            </div>
                        </Fade>
                    )}
                </div>
            </div>
        </div>
    </div>

const CFDtable = () =>
    <div className='CFDtable container'>
        <h2>{Data.section_CFD_table.title}</h2>
        <div className='row table_'>
            {Object.keys(Data.section_CFD_table.points).map((key, index) =>
                <Fade up delay={index > 2 ? 500 : 0} key={index}>
                    <div className='col-md-4'>
                        <p className='th_'>{Data.section_CFD_table.points[key].title}</p>
                        <div className='td-1'>
                            {Object.keys(Data.section_CFD_table.points[key].row1).map((subkey, index) => <p
                                key={index}>{Data.section_CFD_table.points[key].row1[subkey]}</p>)}
                        </div>
                        <div className='td-2'>
                            <p className="point-title">
                                {Data.section_CFD_table.points[key].row2.title}
                            </p>
                            <p>
                                {Data.section_CFD_table.points[key].row2.p}
                            </p>
                        </div>
                        <div className='td-3'>
                            <p className="point-title">
                                {Data.section_CFD_table.points[key].row3.title}
                            </p>
                            <p>
                                {Data.section_CFD_table.points[key].row3.p}
                            </p>
                        </div>
                    </div>
                </Fade>
            )}
        </div>
    </div>

const WhyTrade = () =>
    <div className='whyTrade'>
        <div className='container main-wrapper'>
            <Fade up delay={100}><h2>{Data.why_trade_with_acy.title}</h2></Fade>
            <Fade up delay={100}><p>{Data.why_trade_with_acy.subtitle}</p></Fade>
            <div className='row main-wrapper'>

                <div className="col-md-6 d-md-flex justify-content-center phone-img">
                    <Fade up delay={100}>
                        <img src={iphone} alt='iphone'/>
                    </Fade>
                </div>
                <div className="col-md-6 logo-wrapper">
                    <div className='row'>
                        {Object.keys(Data.why_trade_with_acy.points).map((key, index) => <div className='col-md-6'
                                                                                              key={index}>
                            <Fade up delay={100}>
                                <Point
                                    icon={icons[index]}
                                    title={Data.why_trade_with_acy.points[key].title}
                                    subtitle={Data.why_trade_with_acy.points[key].subtitle}
                                />
                            </Fade>
                        </div>)}
                    </div>
                </div>
            </div>
            <div className="button-group">
                <a className=" hvr-sweep-to-right btn_ btn-live" href={getUrl("open-live-account")} target="_blank">
                    {Data.why_trade_with_acy.button_1}
                </a>

                <a className="hvr-sweep-to-right btn_ btn-demo light-blue-sweep" href={getUrl("open-demo-account")}
                   target="_blank">
                    {Data.why_trade_with_acy.button_2}
                </a>


            </div>
        </div>
    </div>


const TimCahill = () => {
    const {width} = useWindowDimensions();
 const openNav=(e)=>{
     e.preventDefault();
     sideMenu.openNav()
 }
    return (
        <div>

            <Helmet>
                {/* <title>{Data.page_title}</title>
                    <meta name="description" content={Data.meta_description}/> */}
                <link rel="icon" type="image/png" href={favicon} sizes="16x16"/>

            </Helmet>

            <div className="section-1" style={{backgroundImage: `url(${width > 500 ? forex : forexMob})`}}>
                <div className="container">
                    <Section1 />
                    {/* <CommonSection /> */}
                    <div className="row">
                        <div>
                            <div>
                                <Fade up delay={100}><img src={share} alt='share'/></Fade>
                                <Fade up delay={100}><h1>{Data.section_1.title}</h1></Fade>
                                <Fade up delay={100}><p className="subtitle">{Data.section_1.subtitle}</p></Fade>
                                <div className='d-flex justify-content-center btn-wrapper'>
                                    <Fade up delay={100}>
                                        <a className="hvr-sweep-to-right btn_  btn_live btn-live-white"
                                          // href={getUrl("open-live-account")}
                                           //target="_blank"
                                            onClick={openNav}
                                            >
                                            {Data.section_1.button}

                                        </a>
                                    </Fade>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Section2 />
                    <CommonSection />
                </div>
            </div>

            <div className="section-1-below container">
                <div className="row">
                    <div className="col-lg-6">
                        <Fade up delay={100}> <img src={map} alt='map'/></Fade>

                    </div>
                    <div className="col-lg-6">
                        <Fade up delay={100}><h2>{Data.section_1_below.title}</h2></Fade>
                        <Fade up delay={100}><p className="subtitle">
                            <span>{Data.section_1_below.span1}</span>
                            <a href={getUrl('trading-platforms/xchange-mt5')}
                               target="_blank">{Data.section_1_below.span2}</a>
                            <span>{Data.section_1_below.span3}</span>
                        </p></Fade>
                    </div>

                </div>

            </div>
            <div className="section-2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 order-lg-0 order-1">
                            <Fade up delay={100}><h2>{Data.section_2.title}</h2></Fade>
                            <Fade up delay={100}>
                                <div className="subtitle">
                                    <p>{Data.section_2.p1}</p>
                                    <p>{Data.section_2.p2}</p>
                                    <p className="html" dangerouslySetInnerHTML={{__html: Data.section_2.p3()}}></p>
                                </div>
                            </Fade>
                        </div>

                        <div className="col-lg-6 order-lg-1 order-0">
                            <Fade up delay={100}><img className="w-100" src={apple} alt='map'/></Fade>

                        </div>

                    </div>

                </div>
            </div>

            <AdvantageTable/>
            <CFDtable/>

            <div className="section_text_button">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <Fade up delay={100}><h2>{Data.section_text_button.title}</h2></Fade>
                        </div>

                        <div className="col-lg-4 d-flex justify-content-center">

                            <Fade up delay={100}> <a className="hvr-sweep-to-right btn_ btn_live btn-live-white"
                                                     href={getUrl("open-live-account")}
                                                     target="_blank">
                                {Data.section_1.button}
                            </a></Fade>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="section-logo-group">
                    <div className="container">
                        <h2>{Data.section_logo_group.title}</h2>
                        <div className="row">

                            <div className="d-none d-md-block col-12">
                                <img className="w-100" src={companyDes} alt='companyDes'/>
                            </div>

                            <div className="d-block d-md-none col-12">
                                <img className="w-100" src={companyMob} alt='map'/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <WhyTrade/>


        </div>


    );
}


export default TimCahill;

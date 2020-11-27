import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { env } from '../util/env'
import { sideMenu } from '../vendors/sideMenu'

export const WhyTrade = ({data, imgPath})=>{
    return (
        <div className='why-trade'>
            <h1>{data.whyTrade.title}</h1>
            <p>{data.whyTrade.text}</p>
            <div className='why-trade-items'>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={200} animateOnce={true}>
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade1.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle1}</h3>
                        <p>{data.whyTrade.subText1}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={300} animateOnce={true}> 
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade2.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle2}</h3>
                        <p>{data.whyTrade.subText2}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={400} animateOnce={true}>
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade3.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle3}</h3>
                        <p>{data.whyTrade.subText3}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={500} animateOnce={true}>
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade4.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle4}</h3>
                        <p>{data.whyTrade.subText4}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={600} animateOnce={true}>
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade5.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle5}</h3>
                        <p>{data.whyTrade.subText5}</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={700} animateOnce={true}>
                    <div className='why-trade-item'>
                        <img src={require(`../assets/img/whyTrade6.png`).default} alt='icon' />
                        <h3>{data.whyTrade.subTitle6}</h3>
                        <p>{data.whyTrade.subText6}</p>
                    </div>
                </ScrollAnimation>
            </div>
            <div className='why-trade-btn'>
                <a href={env.demoAccount} className='why-trade-btn1'>{data.whyTrade.button1}</a>
                <button className='why-trade-btn2' onClick={()=>sideMenu.openNav()}>{data.whyTrade.button2}</button>
            </div> 
        </div>
    )
}
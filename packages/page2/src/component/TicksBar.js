import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const TicksBar = ({data, imgPath})=>{
    return (
        <div className='ticks-bar'>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={200} animateOnce={true}>
                <div className='tick-item'>
                    <img src={require(`../assets/img/check.png`).default} alt='tick' />
                    <p>{data.ticksBar.text1}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={300} animateOnce={true}>
                <div className='tick-item'>
                    <img src={require(`../assets/img/check.png`).default} alt='tick' />
                    <p>{data.ticksBar.text2}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={400} animateOnce={true}>
                <div className='tick-item'>
                    <img src={require(`../assets/img/check.png`).default} alt='tick' />
                    <p>{data.ticksBar.text3}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={500} animateOnce={true}>
                <div className='tick-item'>
                    <img src={require(`../assets/img/check.png`).default} alt='tick' />
                    <p>{data.ticksBar.text4}</p>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={600} animateOnce={true}>
                <div className='tick-item'>
                    <img src={require(`../assets/img/check.png`).default} alt='tick' />
                    <p>{data.ticksBar.text5}</p>
                </div>
            </ScrollAnimation>
        </div>
    )
}
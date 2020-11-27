import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const HeroBanner = ({data, imgPath, setModalVisible})=>{
    
    return (
        <div className='hero-banner'>
            <div>
                <div>
                    <ScrollAnimation animateIn='fadeInUp' duration={1} delay={10} animateOnce={true}>
                        <h2>{data.heroBanner.freeTraining}</h2>                    
                        <h2>{data.heroBanner.title}</h2>
                        <p>{data.heroBanner.text}</p>
                    </ScrollAnimation>
                    <button onClick={()=>setModalVisible(true)}>{data.heroBanner.button}</button>
                </div>                
            </div>
            <div>
                <ScrollAnimation animateIn='fadeInRight' duration={1} delay={200} animateOnce={true}>
                    <img className='hero-banner-img' src={require(`../assets/img/heroBanner.png`).default} alt='Hero banner' />
                </ScrollAnimation>
            </div>
        </div>
    )
}
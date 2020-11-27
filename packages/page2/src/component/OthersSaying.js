import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const OthersSaying = ({data, imgPath, refOthers})=>{
    
    return (       
        <div className='others-saying' ref={refOthers}>
            <h2>{data.othersSaying.title}</h2>
            <div>
                <div>                    
                    <ScrollAnimation animateIn='fadeIn' duration={1.5} delay={10} animateOnce={true}>
                        <img src={require(`../assets/img/others1.png`).default} alt='appraiser' />
                        <p>{data.othersSaying.others1}</p>
                        <p>&#8220;{data.othersSaying.testimonials1}&#8221;</p>
                    </ScrollAnimation>
                </div>
                <div>                    
                    <ScrollAnimation animateIn='fadeIn' duration={1.5} delay={10} animateOnce={true}>
                        <img src={require(`../assets/img/others2.png`).default} alt='appraiser' />
                        <p>{data.othersSaying.others2}</p>
                        <p>&#8220;{data.othersSaying.testimonials2}&#8221;</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
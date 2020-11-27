import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

export const YouWillLearn = ({data, imgPath, refWillLearn})=>{
    return (        
        <div className='you-will-learn' ref={refWillLearn}>
            <h2>{data.youWillLearn.title}</h2>
            <div>
                <div>
                    <ScrollAnimation animateIn='fadeIn' duration={1.5} delay={0} animateOnce={true}>
                        <img src={require(`../assets/img/trading.svg`).default} alt='icon' />
                        <h3>{data.youWillLearn.subTitle1}</h3>
                        <p>{data.youWillLearn.subText1}</p>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn='fadeIn' duration={1.5} delay={300} animateOnce={true}>
                        <img src={require(`../assets/img/stock-market.svg`).default} alt='icon' />
                        <h3>{data.youWillLearn.subTitle2}</h3>
                        <p>{data.youWillLearn.subText2}</p>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn='fadeIn' duration={1.5} delay={600} animateOnce={true}>
                        <img src={require(`../assets/img/greed.svg`).default} alt='icon' />
                        <h3>{data.youWillLearn.subTitle3}</h3>
                        <p>{data.youWillLearn.subText3}</p>
                    </ScrollAnimation>
                </div>
            </div>
        </div>        
    )
}
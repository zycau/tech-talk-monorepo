import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'


export const MeetTheHost = ({data, imgPath, setModalVisible, refHost})=>{
    
    return (        
        <div className='meet-the-host' ref={refHost}>
            <div>
                <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={300} animateOnce={true}>
                    <h2 className='top-show'>{data.meetTheHost.title}</h2>                
                </ScrollAnimation>
                <div className='host-img'>
                    <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={10} animateOnce={true}>
                        <img src={require(`../assets/img/alistair.png`).default} alt='Alistair' />
                    </ScrollAnimation>
                </div>
                <div className='host-text'>
                    <ScrollAnimation animateIn='fadeInUp' duration={1.5} delay={300} animateOnce={true}>
                        <h2 className='bottom-show'>{data.meetTheHost.title}</h2>
                        <p>{data.meetTheHost.text1}</p>
                        <p>{data.meetTheHost.text2}</p>
                    </ScrollAnimation>
                    <button onClick={()=>setModalVisible(true)} className='show-1440'>{data.meetTheHost.button}</button>
                </div>
            </div>            
            <button onClick={()=>setModalVisible(true)}>{data.meetTheHost.button}</button>
        </div>        
    )
}
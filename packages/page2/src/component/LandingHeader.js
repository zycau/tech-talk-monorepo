import React from 'react'
import { env } from '../util/env'
import { sideMenu } from '../vendors/sideMenu'

export const LandingHeader = ({data, imgPath, refWillLearn, refHost, refOthers})=>{    
    const scrollToRef = ref => ref.current.scrollIntoView({behavior:'smooth'})
       
    return (
        <header className='landing-header wrapper-white'>
            <nav>
                <div>
                    <a href={env.acyUrl}><img src={require(`../assets/img/logo.png`).default} alt='ACY logo' /></a>
                </div>
                <div>
                    <ul>
                        <li onClick={()=>scrollToRef(refWillLearn)}>{data.header.link1.text}</li>
                        <li onClick={()=>scrollToRef(refHost)}>{data.header.link2.text}</li>
                        <li onClick={()=>scrollToRef(refOthers)}>{data.header.link3.text}</li>               
                    </ul>
                    <div>
                        <button onClick={()=>sideMenu.openNav()} >{data.header.button}</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
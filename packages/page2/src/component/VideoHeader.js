import React from 'react'
import { env } from '../util/env'
import { sideMenu } from '../vendors/sideMenu'

export const VideoHeader = ({data, imgPath})=>{    
    
    return (
        <header>
            <nav>
                <div>
                    <a href={env.acyUrl}><img src={require(`../${imgPath}logo.png`).default} alt='ACY logo' /></a>
                </div>
                <div>                   
                    <button onClick={()=>sideMenu.openNav()}>{data.header.button}</button>
                </div>
            </nav>
        </header>
    )
}
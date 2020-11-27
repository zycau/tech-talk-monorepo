import React from 'react'
import 'react'
import { VideoPart } from '../component/VideoPart'
import { SideChart } from '../component/SideChart'
import { TicksBar } from '../component/TicksBar'
import { WhyTrade } from '../component/WhyTrade'


export const VideoPage = ({data, videoPath, imgPath})=>{
    return (
        <div>            
            <div className='wrapper-white flex-part'>
                <VideoPart data={data} videoPath={videoPath} />
                <SideChart />
            </div>            
            <div className='wrapper-blue'>
                <TicksBar data={data} imgPath={imgPath} />
            </div>
            <div className='wrapper-grey'>
                <WhyTrade data={data} imgPath={imgPath} />
            </div>
        </div>
    )
}
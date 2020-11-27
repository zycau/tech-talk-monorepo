import React from 'react'
import { HeroBanner } from '../component/HeroBanner'
import { YouWillLearn } from '../component/YouWillLearn'
import { MeetTheHost } from '../component/MeetTheHost'
import { OthersSaying } from '../component/OthersSaying'
import { ReadyToLearn } from '../component/ReadyToLearn'

export const LandingPage = ({data, imgPath, setModalVisible, refWillLearn, refHost, refOthers})=>{
    return (
        <div>
            <div className='wrapper-grey'>
                <HeroBanner data={data} imgPath={imgPath} setModalVisible={setModalVisible} />
            </div>
            <div className='wrapper-white' id='youWillLearn'>
                <YouWillLearn data={data} imgPath={imgPath} refWillLearn={refWillLearn} />
            </div>
            <div className='wrapper-grey' id='meetTheHost'>
                <MeetTheHost data={data} imgPath={imgPath} setModalVisible={setModalVisible} refHost={refHost} />
            </div>
            <div className='wrapper-white' id='othersSaying'>
                <OthersSaying data={data} imgPath={imgPath} refOthers={refOthers} />
            </div>
            <div className='wrapper-blue'>
                <ReadyToLearn data={data} setModalVisible={setModalVisible}/>
            </div>           
        </div>
    )
}
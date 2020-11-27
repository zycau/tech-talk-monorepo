import React, {useRef, useEffect} from 'react'
import 'moment-timezone'
import * as Acy from '../vendors/acy-chart.b652aae2.js'
import '../vendors/acy-chart.f97b6b70.css'

export const SideChart = ()=>{    
    const charts = [19, 44, 5, 52]
    const refs = charts.map(()=>useRef(null))

    const getUrl = (path) => {
        const str = window.location.href;
        const urlArray = str.split("/");
        return `${window.location.protocol}//${window.location.hostname}/${urlArray[3] && urlArray[3]+'/'}${path}`
    }
    
    useEffect(()=>{
        charts.forEach((id, index)=>{
            new Acy.SmallChart({
                width: 280,
                height: 297,
                id,
                mountPoint: refs[index].current,
                lang: process.env.REACT_APP_LANG,
                click: function () {
                    window.location.href = getUrl('open-live-account');
                },
                clickCanvas: function (v) {
                    window.location.href = getUrl(`products/${v}`);
                }
            })
        })        
    }, [])

    return (
        <div className='side-chart'>
            {charts.map((v,index)=>
                <div ref={refs[index]} key={index}></div>
            )}
        </div>
    )
}
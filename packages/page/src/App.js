import React, {useRef, useEffect} from 'react'
import 'moment-timezone'
import 'lodash'
import * as typeformEmbed from '@typeform/embed'
import './style/webinar.scss'
import * as Acy from './vendor/acy-chart.b652aae2.js'
import './vendor/acy-chart.f97b6b70.css'
import banner from './assets/banner.png'
import smallLogo from './assets/small-logo.png'
import {Text} from './Text'
import {Section1, Section2} from 'components'

export const App = () => {
    const lang = 'en'
    const text = Text[lang]

    // typeform part
    const typeformRef = useRef(null)

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/oRAZwA3m', {
            hideFooter: true,
            hideHeaders: true,
            opacity: 0,
        });
    }, [typeformRef])

    // Charts part
    const charts = [19, 44, 25, 5, 14, 52, 71, 45]
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
                lang,
                click: function () {
                    window.location.href = getUrl('open-live-account');
                },
                clickCanvas: function (v) {
                    window.location.href = getUrl(`products/${v}`);
                }
            })
        })        
    }, [])
    
    // Side form
    const sideMenu = new SideForm.PromoLiveAccount({
        documentID: 'app',
        lang,
        countryCode: 'au',
        setting: {title: text.side_title, subtitle: text.side_subtitle},
        callback: () => {
            console.log('submitted')
        },
    });

    const openSideForm = () => {
        sideMenu.openNav()
    }
    
    return (
        <>
            <div className='banner'>
                <img src={banner} />
                <div>
                    <Section1 />
                    <div className='header'>
                        <a href='https://www.acy.com' target='_blank'>
                            <img src={smallLogo} className='logo'/>
                        </a>
                        <button onClick={openSideForm}>{text.live_account}</button>
                    </div>
                    <div className='typeform'>
                        <div ref={typeformRef} style={{ height: '100%', width: '100%'}}></div>
                    </div>
                </div>
                <Section2 />
            </div>
            <div className='belt'>
                <div>                    
                    <p>{text.belt}</p>
                    <button onClick={openSideForm}>{text.live_account}</button>
                </div>
            </div>
            <div className='widgets'>
                <h2>{text.widgets_title}</h2>
                <p className='widgets-subtitle'>{text.widgets_subtitle}</p>
                <div className='widgets-wrapper'>
                    {charts.map((v,index)=>
                        <div ref={refs[index]} key={index}></div>
                    )}
                </div>
                <p>{text.widgets_footer}<a href={getUrl('trading-platforms/zeroecn')} target='_blank'>{text.zeroecn_link}</a></p>
                <div>
                    <button className='live-btn' onClick={openSideForm}>{text.live_account}</button>
                    <a href={getUrl('open-demo-account/')} target='_blank'><button className='demo-btn'>{text.demo_account}</button></a>
                </div>
            </div>
            <div className='footer'>
                <div>
                    <p>{text.footer_1}</p>
                    <p>{text.footer_2}</p>
                    <p>{text.footer_3}</p>
                    <p>{text.footer_4}</p>
                    <p>{text.footer_5} <a href={`https://www.acyzh.com/${lang}-int/why-acy/terms-and-conditions/`} target='_blank'>{text.footer_link}</a></p>
                </div>
            </div>
        </>
    )
}



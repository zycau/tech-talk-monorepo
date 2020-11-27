import React from 'react'
import { env } from '../util/env'

export const LandingFooter = ({data})=>{    
    return (
        <footer className='wrapper-white'>
            <div className='landing-footer'>
                <p>{data.footer.text1}</p>
                <p>{data.footer.text2}</p>
                <p>{data.footer.text3}</p>
                <p>{data.footer.text4}</p>
                <p>{data.footer.copyright}<a target="_blank" href={env.tacFile}>{data.footer.terms}</a></p>
            </div>
        </footer>
    )
}
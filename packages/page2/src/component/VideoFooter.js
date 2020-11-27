import React from 'react'
import { env } from '../util/env'

export const VideoFooter = ({data})=>{
    return (
        <footer className='wrapper-blue'>
            <div>
                <p>{data.footer.text1}</p>
                <p>{data.footer.text2}</p>
                <p>{data.footer.text3}</p>
                <p>{data.footer.copyright}<a target="_blank" href={env.tacFile}> {data.footer.terms}</a></p>
            </div>
        </footer>
    )
}
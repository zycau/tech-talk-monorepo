import React from 'react'
import { landingPageLang, thanksPageLang } from './util/lang'
import { env } from './util/env'
import { Pages } from './Pages'
import { lang } from 'moment'

export const App = ()=>{
    const language = process.env.REACT_APP_LANG
    
    const data = landingPageLang[language]
    const data2 = thanksPageLang[language]
    const { imgPath, videoPath } = env    

    return (             
        <Pages data={data} data2={data2} imgPath={imgPath} videoPath={videoPath}/> 
    )
}

import React, { useState, useRef } from 'react'
// HashRouter or BrowserRouter
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import './style/style.css'
import { dataType, imgType, videoType } from './propTypes/propTypes'

import { LandingHeader } from './component/LandingHeader'
import { LandingPage } from './pages/LandingPage'
import { LandingFooter } from './component/LandingFooter'
import { VideoHeader } from './component/VideoHeader'
import { VideoPage } from './pages/VideoPage'
import { VideoFooter } from './component/VideoFooter'
import { RegisterModal } from './component/RegisterModal'

export function Pages({data, data2, imgPath, videoPath}) {  

  const [modalVisible, setModalVisible] = useState(false)  

  // Setting auth based on the response from back-end
  const [auth, setAuth] = useState(false)

  const refWillLearn = useRef(null)
  const refHost = useRef(null)
  const refOthers = useRef(null)
  
  return (    
    <Router>
      <div>
        <Switch>
          <Route path='/' exact>
            <div id='alistair-landing-page'>
              <LandingHeader data={data} imgPath={imgPath} refWillLearn={refWillLearn} refHost={refHost} refOthers={refOthers} />            
              <LandingPage  data={data} imgPath={imgPath} setModalVisible={setModalVisible} refWillLearn={refWillLearn} refHost={refHost} refOthers={refOthers}/>
              <LandingFooter  data={data}/>
              <RegisterModal data={data} modalVisible={modalVisible} setModalVisible={setModalVisible} setAuth={setAuth} /> 
            </div>
          </Route>
          <Route path='/thanks'>
            <div id='alistair-video-page'>
              <VideoHeader  data={data2} imgPath={imgPath} />
              <VideoPage  data={data2} videoPath={videoPath} imgPath={imgPath}/>              
              <VideoFooter  data={data2}/>
            </div>
          </Route>          
        </Switch>        
      </div>        
    </Router>    
  )
}

Pages.propTypes = {
  data: dataType,
  imgPath: imgType,
  videoPath: videoType
}



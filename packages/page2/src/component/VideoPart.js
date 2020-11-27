import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import { RightOutlined } from '@ant-design/icons'

export const VideoPart = ({data, videoPath})=>{
    // Videos could come from API in the future
    
    const videos = [
        {
            name: 'video1',
            path: 'https://youtu.be/gZWD1tuXrY8',
            thumbnail: 'thumbnail1.jpg',
            title: '1. ACY Securities Tutorial',
            content: 'Moving Averages'
        }, 
        {
            name: 'video2',
            path: 'https://youtu.be/bAm4Vjtz_pw',
            thumbnail: 'thumbnail2.jpg',
            title: '2. ACY Securities Tutorial',
            content: 'Overview of Financial markets and trading the double top pattern'
        },
        {
            name: 'video3',
            path: 'https://youtu.be/e6JnM7JL4Fc',
            thumbnail: 'thumbnail3.jpg',
            title: '3. ACY Securities Tutorial',
            content: 'Trading Fundamentals'
        }
    ]

    const [ currentVideo, setCurrentVideo ] = useState(0)
    const [ playing, setPlaying ] = useState(false)

    const handleEnd = ()=>{
        if(currentVideo < videos.length-1){
            setCurrentVideo(prev=>prev+1)
        }
        setPlaying(true)
    }
    return (
        <div className='video-part'>
            <div className='video-info'>
                <h1>{data.video.title}</h1>
                <p>{data.video.text}</p>
            </div>
            <div className='video-player'>
                <ReactPlayer 
                    playing={playing} 
                    controls={true}
                    // muted
                    // url={require(`../${videoPath}${videos[currentVideo].name}.mp4`).default}
                    url={`${videos[currentVideo].path}`}
                    onEnded={handleEnd}
                    width='100%'
                    height='auto'
                    config={{
                        youtube: {
                          playerVars: { showinfo: 1 }
                        }
                    }}
                />
            </div>
            <div className='play-list'>
                <h2>{data.playList.title}</h2>
                <div>
                    {videos.map((video, index)=>(
                        <div key={video.name} onClick={()=>setCurrentVideo(index)} className='play-list-item'>                            
                            <img src={require(`../assets/img/${video.thumbnail}`).default} alt='thumbnail' />
                            <h3 className={index===currentVideo ? 'currentVideoTitle':''}>{video.title}<RightOutlined /></h3>
                            <p>{video.content}</p>                                                      
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
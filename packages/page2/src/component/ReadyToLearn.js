import React from 'react'

export const ReadyToLearn = ({data, setModalVisible})=>{
    return (
        <div className='ready-to-learn'>
            <h2>{data.readyToLearn.title}</h2>
            <p>{data.readyToLearn.text}</p>
            <button onClick={()=>setModalVisible(true)} >{data.readyToLearn.button}</button> 
        </div>
    )
}
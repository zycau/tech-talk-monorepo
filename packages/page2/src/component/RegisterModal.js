import React, { useState, useEffect } from 'react'
import countriesList from 'countries-list'
import XRegExp from 'xregexp'
import axios from 'axios'

import { Agent } from '../util/agent'
import { useHistory } from 'react-router-dom'
import { Modal, Select, Input } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

export const RegisterModal = ({data, modalVisible, setModalVisible, setAuth})=>{ 
    // Option tag in Ant Design
    const { Option } = Select
    // Redirect page after register
    const history = useHistory()

    // 3 stages for register: email & name & country & phone, button enable, success and jump to video page
    const [ stage, setStage ] = useState(1)
    
    // Check if email is valid
    const [ emailCheck, setEmailCheck ] = useState({
        checked: false,
        tick: <span />
    })
    // Check if name is valid
    const [ firstNameCheck, setFirstNameCheck ] = useState({
        checked: false,
        tick: <span />
    })
    const [ lastNameCheck, setLastNameCheck ] = useState({
        checked: false,
        tick: <span />
    })

    // Input fields
    const [ input, setInput ] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: ''
    })
    const [ country, setCountry ] = useState('')
    const [ phoneCode, setPhoneCode ] = useState('+ 61')
    // Loading button
    const [ loading, setLoading ] = useState(false)
    
    const [ refer, setRefer ] = useState('N/A')
    const [ cookieLink, setCookieLink ] = useState('')
    const [ leadSource, setLeadSource] = useState('')
    const [ leadSourceClassification, setLeadSourceClassification ] = useState('')

    // Get array of countries' name and phone code
    const countries = Object.values(countriesList.countries).map(value=>[value.name, value.phone])
    const phoneCodes = Object.values(countriesList.countries).map(value=>`+ ${value.phone}`).filter((value, index, arr)=>arr.indexOf(value)===index)
    
    // Generate options for selection bar
    const countryOptions = countries.map(value=>(
        <Option key={value} value={value[0]}>{value[0]}</Option>
    ))
    const phoneOptions = phoneCodes.map(value=>(
        <Option key={value} value={value}>{value}</Option>
    ))

    // Input phone code automatically after selecting country
    useEffect(()=>{
        countries.forEach(value=>{
            if(value[0]===country){
                setPhoneCode(phoneCodes[phoneCodes.indexOf(`+ ${value[1]}`)])
            }
        })
    },[country])

    // Put forward stages
    useEffect(()=>{
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const firstNameReg = XRegExp('^[\\pL |\-]{1,40}$')
        const lastNameReg = XRegExp('^[\\pL |\-]{1,80}$')
        const phoneReg = /^[0-9\-\(\)\s]+$/
        
        if(!emailReg.test(input.email.trim()) || !firstNameReg.test(input.firstName.trim()) || !lastNameReg.test(input.lastName.trim()) || country.length===0){
            setStage(1)
        }else if(input.phone.trim().length>0 && !phoneReg.test(input.phone.trim())){
            setStage(1)
        }else{
            setStage(2)
        }

        if(!emailReg.test(input.email.trim())){
            setEmailCheck({
                checked: false,
                tick: <span />
            })
        }else{
            setEmailCheck({
                checked: true,
                tick: <CheckOutlined />
            })
        }

        if(!firstNameReg.test(input.firstName.trim())){
            setFirstNameCheck({
                checked: false,
                tick: <span />
            })
        }else{
            setFirstNameCheck({
                checked: true,
                tick: <CheckOutlined />
            })
        }

        if(!lastNameReg.test(input.lastName.trim())){
            setLastNameCheck({
                checked: false,
                tick: <span />
            })
        }else{
            setLastNameCheck({
                checked: true,
                tick: <CheckOutlined />
            })
        } 
    }, [input.email, input.firstName, input.lastName, input.phone, country])

    useEffect(()=>{
        setRefer(document.referrer)

        const agent = new Agent('form')
        const {cookieLink, leadSource, leadSourceClassification} = agent.getAgent()
        setCookieLink(cookieLink)
        setLeadSource(leadSource)
        setLeadSourceClassification(leadSourceClassification)
    }, [])

    // Click cancel button
    const modalCancel = () => {
        setModalVisible(false)
        setStage(1)
        setInput({
            email: '',
            phone: '',
            firstName: '',
            lastName:''
        })
        setEmailCheck({
            checked: false,
            tick: <span />
        })
        setFirstNameCheck({
            checked: false,
            tick: <span />
        })
        setLastNameCheck({
            checked: false,
            tick: <span />
        })
        setCountry('')
        setPhoneCode('+ 61')
        setLoading(false)      
    }

    // Control input of email and phone
    const handleInputChange = e=>{
        const {name, value} = e.target
        setInput(prev=>{
            const temp = Object.assign({}, prev)
            temp[name] = value
            return temp
        }
        //     ({
        //     ...prev,
        //     [name]: value
        // })        
        )
        
    }

    // Handle button
    const handleButton = ()=>{        
        if(stage===1){
            
        }else if(stage===2){
            setLoading(true)
            
            const languages = ['en', 'English', 'zh', 'Chinese', 'id', 'Bahasa', 'vi', 'Vietnamese']
            const language = languages[languages.indexOf(process.env.REACT_APP_LANG)+1]
            const country_code = phoneCode.replace(/\+ /, '')

            const apiSource = process.env.OUTPUT === 'dist_test' ? 
                              'http://apiform.acytest.com/v1/landing-page/2020/aistair' :
                              'https://apiform.crm.zerologix.com/v1/landing-page/2020/aistair'
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const body = JSON.stringify({
                email: input.email,
                first_name: input.firstName,
                last_name: input.lastName,
                lang_code: language,
                country,
                country_code,
                phone: input.phone,
                refer,
                live_cache: cookieLink,
                signup_page_url: window.location.href,
                lead_source: leadSource,
                lead_source_classification: leadSourceClassification
            })
            
            axios.post(apiSource, body, config)
                .then(res=>{
                    if(res.status===201){
                        setLoading(false)
                        setStage(3)
                        sessionStorage.setItem('video-auth', true)
                    }
                }).then(()=>{
                    setStage(1)
                    setModalVisible(false)
                    history.push('/thanks')
                })
                .catch(err=>console.log(err))                                        
        }     
    }

    return (
        <div id='modal'>    
        <Modal
            title={data.modal.title}
            visible={modalVisible}
            onCancel={modalCancel}
            footer={null}
            destroyOnClose={true}
            wrapClassName='register-modal'
        >
            <div>
                <label htmlFor='email-input'>{data.modal.email}</label>
                <Input
                    onChange={handleInputChange}
                    name='email'
                    value={input.email}
                    suffix={emailCheck.tick}
                    id='email-input'
                />
            </div>            
            <div>
                <label htmlFor='first-name-input'>{data.modal.firstName}</label>
                <Input
                    onChange={handleInputChange}
                    name='firstName'
                    value={input.firstName}
                    suffix={firstNameCheck.tick}
                    id='first-name-input'
                />
            </div>
            <div>
                <label htmlFor='last-name-input'>{data.modal.lastName}</label>
                <Input
                    onChange={handleInputChange}
                    name='lastName'
                    value={input.lastName}
                    suffix={lastNameCheck.tick}
                    id='last-name-input'
                />
            </div>
            <div>
                <label htmlFor='country-input'>{data.modal.country}</label>
                <Select                    
                    showSearch
                    value={country}
                    optionFilterProp='children'
                    // AntDesign Select自带onChange，不需要e.target
                    onChange={value => setCountry(value)}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input) >= 0
                    }
                >
                    
                    <Option value=''>-- Please select one country --</Option> 
                    {countryOptions}

                </Select>
            </div> 
            <div>
                <label htmlFor='phone-input'>{data.modal.phone}</label>
                <div className='phone-input-area'>
                    <Select
                        showSearch
                        value={phoneCode}
                        optionFilterProp='children'
                        onChange={value => setPhoneCode(value)}
                        filterOption={(input, option) =>
                            option.children.indexOf(input) >= 0
                        }
                    >
                        {phoneOptions}
                    </Select>

                    <Input 
                        id='phone-input'
                        onChange={handleInputChange}
                        name='phone'
                        value={input.phone}
                    />
                </div>                    
            </div>
            <div>
                {stage === 3 ?
                    <button onClick={handleButton} className={`button${stage}`}>{data.modal.button2} <CheckOutlined /></button> :
                    <button onClick={handleButton} className={`button${stage}`} disabled={stage===1 || loading}>{loading ? 'Loading...' : data.modal.button1} <span /></button>
                }                
            </div>
            <p>{data.modal.privacy}</p>
        </Modal>
        </div>
    )
  
}




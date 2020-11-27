import React, { useState, useEffect } from 'react'
import countriesList from 'countries-list'

import { useHistory } from 'react-router-dom'
import { Modal, Select, Input } from 'antd'

export const SideFormModal = ({data, formVisible, setFormVisible})=>{
    const formCancel = ()=>{
        setFormVisible(false)
    }
    
    return (
        <div>
            {/* <Modal
                title={data.form.title}
                visible={false}
                onCancel={formCancel}
                footer={null}
                wrapClassName='side-form'
            >

            </Modal> */}
        </div>
    )
}
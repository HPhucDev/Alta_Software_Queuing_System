import  React, { useState } from 'react';
import "./style.scss";
import { Form, Input} from "antd";
import { useNavigate } from 'react-router-dom';
import { DropDown } from '../../Dropdown';

export interface IAddDeviceProps {
}

export function AddDevice (props: IAddDeviceProps) {
    const nav= useNavigate()
    const serviceList=[
        {   title:"Khám tim mạch",
            value:"0"
        },
        {   title:"Khám sản phụ khoa",
            value:"1"
        },
        {   title:"Khám răng hàm mặt",
            value:"2"
        },
        {   title:"Khám tai mũi họng",
            value:"3"
        },
        {   title:"Khám hô hấp",
            value:"4"
        },
        {   title:"Khám tổng quát",
            value:"5"
        }   
    ]
    const [serviceState,setServiceState]=useState(serviceList)
    const handleDelete=(index:any)=>{
        const newServiceList = serviceState;
        const newService = newServiceList.filter(function(el) { return el.value != `${index}`; })
        setServiceState(newService);  
        console.log(serviceState)
    }
    
    const handleCancelButtonClick=()=>{
        nav("/home/device")
    }
    const styleDeviceDropdown=[
        { label:"Kiosk",
          value:"kiosk"
        },
        { label:"Display counter",
          value:"displaycounter"
        }
      ]
  return (
    <div className='adddevice'>
        <Form className='adddevice__form'>
            <div className='adddevice__container'>
                <span className='adddevice__form--label'>Thông tin thiết bị</span>
                <div className='adddevice__form--panel'>
                    <section className='adddevice__form--panel-left'>
                        <Form.Item>
                            <div className="adddevice__form--panel-item-title">
                                <p>Mã thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập mã thiết bị"} className="adddevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="adddevice__form--panel-item-title">
                                <p>Tên thiết bị :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập tên thiết bị"} className="adddevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="adddevice__form--panel-item-title">
                                <p>Địa chỉ IP :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập địa chỉ IP"} className="adddevice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                    <section className='adddevice__form--panel-right'>
                        <Form.Item className="adddevice__form--panel-item-dropdown">
                            <div className="adddevice__form--panel-item-title">
                                <p>Loại thiết bị :</p>
                                <span>*</span>
                            </div>
                            <DropDown width='540px' title="" listMenu={styleDeviceDropdown} />
                        </Form.Item>
                        <Form.Item className="adddevice__form--panel-item-5">
                            <div className="adddevice__form--panel-item-title">
                                <p>Tên đăng nhập :</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập tên đăng nhập"} className="adddevice__form--panel-item-input"/>
                        </Form.Item>
                        <Form.Item>
                            <div className="adddevice__form--panel-item-title">
                                <p>Mật khẩu:</p>
                                <span>*</span>
                            </div>
                            <Input  placeholder={"Nhập mật khẩu"} className="adddevice__form--panel-item-input"/>
                        </Form.Item>
                    </section>
                </div >
                <div className='adddevice__form--service'>
                    <div className="adddevice__form--panel-item-title">
                                <p>Dịch vụ sử dụng:</p>
                                <span>*</span>
                    </div>
                    <div className="adddevice__form--service-content">
                        {
                            serviceState.map((item,index,serviceState)=>{
                                return(
                                    <div className="adddevice__form--service-content-item" key={item.value}>
                                        <span>{item.title}</span>
                                        <button onClick={()=>handleDelete(item.value)}>x</button>
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>
                <div className='adddevice__form--note'>
                    <span>*</span>
                    <p>Là thông tin bắt buột</p>
                </div>
            </div>
            <div className='adddevice__form--tool'>
                <button className='adddevice__form--tool-cancel' onClick={handleCancelButtonClick}>
                        <span>Hủy bỏ</span>
                </button>
                <button className='adddevice__form--tool-add'>
                        <span>Thêm thiết bị</span>
                </button>
            </div>
        </Form>
    </div>
  );
}

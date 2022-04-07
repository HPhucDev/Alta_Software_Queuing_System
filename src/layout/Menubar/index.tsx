import { Button,Menu } from 'antd';
import * as React from 'react';
import "./style.scss";

export interface IMenuBarProps {
}

export function MenuBar (props: IMenuBarProps) {
  const itemsSettingList=[{id:1,title:"hello",href:"1"},{id:2,title:"chao",href:"2"},{id:3,title:"bye",href:"3"},];

  return (
    <div className="menubar">
        <div className="menubar__header">
        <img 
              src={require('../../configs/images/LogoAlta.png')}
              className="menubar__header--logo"
              alt="Logo"/>
        </div>
        <div className="menubar__content">
            <Button className="menubar__content--button">
              <img className="menubar__content--button-img"
                  src={require('../../configs/icons/dashboard.png')} alt="dashboard"/>
              Dashboard
            </Button>
            <Button className="menubar__content--button">
              <img className="menubar__content--button-img"
                  src={require('../../configs/icons/device.png')} alt="device"/>
              Thiết bị
            </Button>
            <Button className="menubar__content--button">
              <img className="menubar__content--button-img"
                    src={require('../../configs/icons/service.png')} alt="service"/>
              Dịch vụ
            </Button>
            <Button className="menubar__content--button ">
              <img className="menubar__content--button-img"
                    src={require('../../configs/icons/number.png')} alt="number"/>
              Cấp số
            </Button>
            <Button className="menubar__content--button">
              <img className="menubar__content--button-img"
                    src={require('../../configs/icons/report.png')} alt="report"/>
              Báo cáo
            </Button> 
            <div className="menubar__content--button-dropdown " >
              <Button className="menubar__content--button ">
                <img className="menubar__content--button-img"
                      src={require('../../configs/icons/setting.png')} alt="setting"/>
                Cài đặt hệ thống
                <img className="menubar__content--button-drop "
                      src={require('../../configs/icons/drop.png')} alt="drop"/>
              </Button> 
              <div className="menubar__content--button-dropdown-list">
                <a className="menubar__content--button-dropdown-list-item-top">Quản lí vai trò</a>
                <a className="menubar__content--button-dropdown-list-item-center">Quản lí tài khoảng</a>
                <a className="menubar__content--button-dropdown-list-item-bottom">Nhật kí người dùng</a>
              </div>
            </div>

        </div>
        <div className="menubar__footer">
            <Button className="menubar__content--button">
                <img className="menubar__content--button-img"
                      src={require('../../configs/icons/lognout.png')} alt="lognout"/>
                Đăng xuất
            </Button> 
        </div>
    </div>
  );
}

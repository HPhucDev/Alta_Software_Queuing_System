import * as React from 'react';
import { Header, MenuBar } from '../../layout';
import "./style.scss";

export interface IDashboardProps {
}

export function Dashboard (props: IDashboardProps) {
  return (
    <div className="dashboard__panel">
        <div className="dashboard__container" >
            <div className="dashboard__container--left" >
                <MenuBar/>
            </div>
            <div className="dashboard__container--right" >
                <div className="dashboard__container--right-header" >
                    <Header title="Thông tin cá nhân" name="Nguyễn Hoàng Phúc" avatar=""/>
                </div>   
                <div className="dashboard__container--right-content" >

                </div>  

            </div>
        </div>
    </div>
  );
}

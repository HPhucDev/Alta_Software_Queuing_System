import React,{useState} from 'react';
import { Header, MenuBar } from '../../layout';
import "./style.scss";
import urlImage from '../../configs/images/LoginWallpaper.png';
import { UserDetail,Dashboard } from '../../components';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
    const [dashboard,setDashboard]= useState(false);
    const [userDetail,setUserDetail]= useState(false);
    const dashboardOnClick=()=>{
        setUserDetail(false)
        setDashboard(true)

    }
    const userDetailOnClick=()=>{

        setUserDetail(true)
        setDashboard(false)
    }
  return (
    <div className="home__panel">
        <div className="home__container" >
            <div className="home__container--left" >
                <MenuBar dashboardClick={dashboardOnClick}/>
            </div>
            <div className="home__container--right" >
                <div className="home__container--right-header" >
                    {(userDetail === false && dashboard === false )?<Header userDetailOnClick={userDetailOnClick} title="" name="Nguyễn Hoàng Phúc" avatar={urlImage}/>:""}
                    {userDetail? <Header userDetailOnClick={userDetailOnClick} title="Thông tin cá nhân" name="Nguyễn Hoàng Phúc" avatar={urlImage}/>
                                :""}
                    {dashboard ? <Header userDetailOnClick={userDetailOnClick} title="Dashboard" name="Nguyễn Hoàng Phúc" avatar={urlImage}/>
                                :""}
                </div>   
                <div className="home__container--right-content" >
                    {userDetail? <UserDetail />:""}
                    {dashboard ? <Dashboard/>:""}
                </div>  

            </div>
        </div>
    </div>
  );
}

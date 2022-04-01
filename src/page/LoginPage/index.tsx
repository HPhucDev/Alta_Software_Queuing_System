import * as React from 'react';
import "./style.scss";
import {Login,ForgotPassword,ResetPassword} from '../../components';

export interface ILoginPageProps {
}

export function LoginPage (props: ILoginPageProps) {
  return (
    <div className="loginpage__panel">
        <div className="loginpage__container" >
            <section className="loginpage__container--left"  >
             <img 
              src={require('../../configs/images/LogoAlta.png')}
              className="loginpage__container--left-logo"
              alt="Logo"/>
                <Login/>
                {/* <ForgotPassword/>
                <ResetPassword/> */}
            </section>
            <section className="loginpage__container--right" >
              <div className="loginpage__container--right-login">
                <img 
                    src={require('../../configs/images/LoginWallpaper.png')}
                    className="loginpage__container--right-img"
                    alt="Wallpaper"/>
                  <p className="loginpage__container--right-title-small" >Hệ thống</p>
                  <p className="loginpage__container--right-title-large" >QUẢN LÝ XẾP HÀNG</p>
              </div>
              {/* <div className="loginpage__container--right-forgotpassword">
                <img 
                    src={require('../../configs/images/ForgotPassword.png')}
                    className="loginpage__container--right-img2"
                    alt="Wallpaper"/>
              </div> */}
           
            </section>
        </div>
    </div>
  );
}

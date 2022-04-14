import * as React from 'react';
import "./style.scss";
export interface IHeaderProps {
  title:string,
  name:string,
  avatar:string,
  userDetailOnClick:()=>void,
}

export function Header (props: IHeaderProps) {
  const title = props.title;
  const urlAvatar= props.avatar;
  const userName = props.name;
  return (
    <header className = "header">
        <section className = "header__left">
            <span className = "header__left--title">{title}</span>
        </section>
        <section className = "header__right">
            <button className = "header__right--noti">
              <img 
                  src={require('../../configs/icons/notification.png')}
                  className = "header__right--noti-img"
                  alt="Noti"/>
            </button>
            <button className = "header__right--account" onClick={props.userDetailOnClick}>
              <div className = "header__right--account-avatar">
                <img 
                    src={require('../../configs/images/avatar.png')}
                    className = "header__right--account-avatar-img"
                    alt="Noti"/>
              </div>
              <div className = "header__right--account-title">
                  <div className = "header__right--account-title-hello">
                      <p className = "header__right--account-title-hello" >Xin Chào</p>
                  </div>    
                  <div className = "header__right--account-title-name">
                     <p className = "header__right--account-title-name-user">{userName}</p>
                  </div>      
              </div>
            </button>
        </section>
    </header>
  );
}

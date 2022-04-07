import * as React from 'react';
import "./style.scss";
export interface IHeaderProps {
  title:string,
  name:string,
  avatar:string,
}

export function Header (props: IHeaderProps) {
  const title = props.title;
  return (
    <header className = "header">
        <section className = "header__left">
            <span className = "header__left--title">{title}</span>
        </section>
        <section className = "header__right">
            <button className = "header__right--noti">

            </button>
            <button className = "header__right--account">
              <div className = "header__right--account-avatar">

              </div>
              <div className = "header__right--account-title">
                  <div className = "header__right--account-title-hello">

                  </div>    
                  <div className = "header__right--account-title-name">

                  </div>      
              </div>
            </button>
        </section>
    </header>
  );
}

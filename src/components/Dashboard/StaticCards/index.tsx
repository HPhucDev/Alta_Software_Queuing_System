import React,{useState} from 'react';
import "./style.scss";
import classnames from 'classnames';

export interface IStaticCardProps {
  title:string,
  icon:string,
  count:number,
  static:number,
}

export function StaticCard (props: IStaticCardProps) {
  const title = props.title;
  const icon = props.icon;
  const count = props.count;
  const staticNumber = props.static;
  return (
    <div className='staticcard'>
        <div className='staticcard__title'>
            <div className='staticcard__title--icon'>
              <img src={require(`../../../configs/icons/${icon}.png`)}
                  className = "staticcard__title--icon-img"
                  alt="Icon"/>
            </div>
            <div className='staticcard__title--name'>
                {title}
            </div>
        </div>
      <div className='staticcard__content'>
          <div className='staticcard__content--count'>
              {count}
          </div>
          <div className={classnames({
                        "staticcard__content--static":true,
                        down: staticNumber < 0})} >
              <img src={require(`../../../configs/icons/vector.png`)}
                  className={classnames({
                  "staticcard__content--static-img ":true,
                  decrease: staticNumber < 0})}
                  alt="Icon"/>
              <span>{Math.abs(staticNumber)}%</span>
          </div>
      </div>
    </div>
  );
}

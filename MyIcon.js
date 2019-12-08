import React from 'react';

import "./icons/fontawesome.scss";
import "./icons/solid.scss";


export default function MyIcon({iconName, style, onClick}) {

  return (
    <div
  className={style}
  onClick={onClick}
    >
    <i className={"fas fa-" + iconName}/>
  </div>
);
}
import React from 'react';

import "./icons/fontawesome.scss";
import "./icons/solid.scss";
import "./icons/regular.scss";
import "./icons/brands.scss";


export default function MyIcon({iconName, color, size, style, size, onClick}) {

  const divStyle = {
    color: color ? color : '#000000',
    'font-size': size ? size : '12px'
  };

  return (
    <div
      style={divStyle}
      className={style}
      onClick={onClick}
    >
    <i className={"fas fa-" + iconName}/>
  </div>
);
}
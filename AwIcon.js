import React from 'react';

import "./icons/fontawesome.scss";
import "./icons/solid.scss";
import "./icons/regular.scss";
import "./icons/brands.scss";


export default function AwIcon({ iconName, color, size, style, onClick }) {

  const divStyle = {
    color: color ? color : null,
    'font-size': size ? size : null
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
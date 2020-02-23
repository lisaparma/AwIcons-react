import React from 'react';

import "./src/icons/fontawesome.css";
import "./src/icons/solid.css";
import "./src/icons/regular.css";
import "./src/icons/brands.css";


const AwIcon = props => {

  const { iconName, color, size, style, onClick } = props;

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

};

export default AwIcon;
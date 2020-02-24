import React from 'react';

import "./icons/fontawesome.css";
import "./icons/solid.css";
import "./icons/regular.css";
import "./icons/brands.css";


const AwIcon = props => {

  const { iconName, className, style, onClick } = props;

  return (
    <div
      style={style}
      className={className}
      onClick={onClick}
    >
      <i className={"fas fa-" + iconName}/>
    </div>
  );

};

export default AwIcon;
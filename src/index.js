import React from 'react';

import "../src/icons/fontawesome.css";
import "../src/icons/solid.css";
import "../src/icons/regular.css";
import "../src/icons/brands.css";


const AwIcon = props => {

  const { iconName, className, style, onClick } = props;

  const defaultStyle = {
    color: "#000000",
    fontSize: "12px",
    padding: "6px"
  };

  const divStyle = Object.assign(defaultStyle, style);

  return (
    <div
      style={divStyle}
      className={className}
      onClick={onClick}
    >
      <i className={"fas fa-" + iconName}/>
    </div>
  );

};

export default AwIcon;
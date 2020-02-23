# AwIcons-react 
React component to easily add Awesome Icons to your project.

You can see all icons [here](https://fontawesome.com/icons?d=gallery&m=free)


###  Install npm package on your React Project
	
~~~~
npm install awicons-react
~~~~

### Props
You can specify some props:
* _iconName_ : [required] take from [here](https://fontawesome.com/icons?d=gallery&m=free)
* _className_ : pass className to defining rules on your scss file
* _style_ : define inline style rules
* _onClick_ : arrow function 

### Use _AwIcon_ functional component in your file in this way:	
~~~~
import AwIcon from "awicons-react";

    <AwIcon
      iconName="angle-left"
      className={style.icon}
      style={{ padding: 12px }}
      onClick={this._goTo}
    />
~~~~

---
Font Awesome Free 5.12.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)

# AwIcons-react 
Easily add Awesome Icons to your project.

You can see all icons [here](https://fontawesome.com/icons?d=gallery&m=free)


###  Install npm package on your React Project
	
~~~~
npm install awicons-react
~~~~

### Props
| Props | Description |
| --- | --- |
| `iconName`    | [required] take from [here](https://fontawesome.com/icons?d=gallery&m=free) |
| `className`   | pass className to define style rules on your scss file |
| `style`       | define inline style rules |
| `onClick`     | onClick arrow function |


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

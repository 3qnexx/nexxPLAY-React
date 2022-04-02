nexxPLAY for React
=====================

The React Wrapper for nexxPLAY allows full Usage of all supported iFrame Operations for nexxPLAY.
All Mediatypes and Widgets are fully supported.

Getting Started
---------------

```
$ npm install nexxplay-react
```

```javascript
import React from 'react';
import {NexxPLAY} from "nexxplay-react";

class test extends React.Component{

	render(){
		return (
			<div style={{width:"640px",height:"320px"}}>
				<NexxPLAY domain="999" mediaHash="ABCDEFG" streamtype="video" params="{{autoPlay:0}}" />
			</div>
		);
	}

}
```

Resources
---------

Please find all further Documentation and Usage Examples [here](https://play.docs.nexx.cloud/iframe-integration/react-plugin).



import React  from 'react';

import 'styles/cssloader.scss';

const CssLoader = ({error, pastDelay})=>
{	
	return <div className="sk-three-bounce">
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
    </div>;

}

export default CssLoader;
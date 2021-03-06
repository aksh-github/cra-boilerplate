
import rLoadable from 'react-loadable';

import LoadingCompo from 'views/common/LoadingComponent';


const Loadable = (opts) =>
{    
    return rLoadable({
        loading: LoadingCompo,
        delay: 300,
        timeout: 7000,
        ...opts
    })
};

export default Loadable;
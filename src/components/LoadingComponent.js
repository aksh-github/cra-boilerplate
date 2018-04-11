
import React from 'react';
import CssLoader from 'components/CssLoader';

const LoadingComponent = ({isLoading, error, pastDelay}) => {
    if (isLoading) 
    {
        return pastDelay ? <CssLoader />            
        : null; // Don't flash "Loading..." when we don't need to.
    } 
    else if (error) 
    {
        console.log(error);
        return  <div className="row">
            <div className="col-md-12"> 
                <div className="alert alert-info">
                Unable to load
                </div>
            </div>
        </div>;
    } 
    else {
        return null;
    }
};

export default LoadingComponent;
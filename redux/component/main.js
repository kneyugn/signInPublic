/**
 * Template for the single page application.
 * Has navigation on top and component on bottom.
 */

import React from 'react';
import Navigation from './navigation';

const Main = React.createClass ({
    render() {
        return (
            <div>
                <Navigation {...this.props}/>
                <div className="col-sm-8 col-sm-offset-2">
                    {React.cloneElement(this.props.children, this.props)}
                </div>
            </div>
        )
    }
});

export default Main;

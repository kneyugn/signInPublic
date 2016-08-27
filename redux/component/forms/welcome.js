/**
 * Entry page for signing out.
 */
import React from 'react';
import { Image } from 'react-bootstrap';

class Welcome extends React.Component {
    render() {
        return (
            <div id="welcomeDiv">
                <h2 id="welcomeH3">Welcome to BPSOS-Atlanta! </h2>
                <Image src="welcome.jpg" id="welcomeImg" rounded />
            </div>
        )
    }
}

export default Welcome;

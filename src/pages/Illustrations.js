import React, { Component } from 'react';
import Sidenavi from '../components/Sidenavi'
import Gallery from '../components/Gallery'

class Illustrations extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div id="container-wrap">
                    <Sidenavi></Sidenavi>
                    <div id="colorlib-main">
                        <Gallery></Gallery>
                    </div>
                </div>
            </div>

        );
    }
}

export default Illustrations;
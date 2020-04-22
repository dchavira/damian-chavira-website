import React from 'react';
import './art.css'
class Art extends React.Component {

    render() {
        return (
            <div>
                <h1 className='title'>3D Art</h1>
                <div id='art'>
                <ul className='artContainer'>
                    <li className='thumb'>
                        <a href='/img/3d/sunset.png'><img className='r1' src='/img/3d/sunset.png' alt="Jazz Chords Home Screen"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/balanceVR.jpeg'><img className='r1' src='/img/3d/balanceVR.jpeg' alt="Jazz Chords Home Screen" /></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/album finished.jpg'><img className='r1' src='/img/3d/album finished.jpg' alt="Jazz Chords Home Screen"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/image1.jpg'><img className='r1' src='/img/3d/image1.jpg' alt="Jazz Chords Home Screen"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/flowers.jpg'><img className='r1' src='/img/3d/flowers.jpg' alt="Jazz Chords Home Screen"/></a>
                    </li>
                </ul>
            </div>
            </div>
            
        );
    };
}

export default Art;
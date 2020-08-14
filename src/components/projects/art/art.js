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
                        <a href='/img/3d/DeerForest.png'><img className='r1' src='/img/3d/DeerForest.png' alt="DeerForest"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/City.png'><img className='r1' src='/img/3d/City.png' alt="City"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/sunset.jpg'><img className='r1' src='/img/3d/sunset.jpg' alt="Sunset"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/balanceVR.jpeg'><img className='r1' src='/img/3d/balanceVR.jpeg' alt="BalanceVR" /></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/album finished.jpg'><img className='r1' src='/img/3d/album finished.jpg' alt="Album"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/image1.jpg'><img className='r1' src='/img/3d/image1.jpg' alt="Fern"/></a>
                    </li>
                    <li className='thumb'>
                        <a href='/img/3d/flowers.jpg'><img className='r1' src='/img/3d/flowers.jpg' alt="Flowers"/></a>
                    </li>
                </ul>
            </div>
            </div>
            
        );
    };
}

export default Art;
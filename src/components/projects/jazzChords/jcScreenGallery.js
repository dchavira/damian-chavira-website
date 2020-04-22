import React from 'react';
import './gallery.css'
class Gallery extends React.Component {

    render() {
        return (
            <div>
                <ul className='galleryContainer'>
                    <li className='jcScreen'>
                        <a href='/img/jazzChords/cmaj7treble.png'><img className='s1' src='/img/jazzChords/cmaj7treble.png' alt="Jazz Chords Home Screen"/></a>
                    </li>
                    <li className='jcScreen'>
                        <a href='/img/jazzChords/home.png'><img className='s2' src='/img/jazzChords/home.png' alt="Jazz Chords Home Screen" /></a>
                    </li>
                    <li className='jcScreen'>
                        <a href='/img/jazzChords/cmaj7bass.png'><img className='s3' src='/img/jazzChords/cmaj7bass.png' alt="Jazz Chords Home Screen"/></a>
                    </li>
                </ul>
                <ul className='galleryContainer'>
                    <li className='jcScreen'>
                        <a href='/img/jazzChords/scale.png'><img className='s2' src='/img/jazzChords/scale.png' alt="Jazz Chords Home Screen"/></a>
                    </li></ul>
            </div>
            
        );
    };
}

export default Gallery;
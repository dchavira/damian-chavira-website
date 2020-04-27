import React from 'react'
import Gallery from './jcScreenGallery'
import './jc.css'

class JazzChords extends React.Component {



    render() {

        return (

            <div id="jcContainer">
                
                <div className="jazzChords">
                    <h1 className='jazzHeader'>Jazz Chords</h1>
                    <p className='jazzContent'>
                        Jazz Chords is a Jazz Education Tool to be used by musicians of all levels. It will help give any musician quick 
                        information about a chord in a song that they would be practicing on. It will also give the musician different scale
                         choices to use within the given chord. </p>
                    <p className='jazzContent'>
                        A live demo will be up soon. Keep checking for updates!
                        Tap a screen below to see the full image.
                    </p>
                    <Gallery/>   
                </div>
            </div>

        )

    }

}

export default JazzChords;
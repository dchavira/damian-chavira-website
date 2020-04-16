import React from 'react'
import Gallery from '../projects/jazzChords/jcScreenGallery'
import './home.css'


class Home extends React.Component {



    render() {

        return (

            <div>
                <div><img src="/img/concert4k dark.jpg" id='concert' alt="concert" /></div>
                <h1 className='sectionHeader'>Welcome!</h1>
                <p>
                    My name is Damian and I like to experiment with lots of things.
                    Some are Web Dev, Mobile Apps, Music and Computer Graphics just to name a few.
                </p>
                <p style={{paddingBottom:'3%'}}>Check out my latest project below. </p>
                <div className="jazzChords">
                    <h1 className='jazzHeader'>Jazz Chords</h1>
                    <p className='jazzContent'>
                        This a project that I thought of when thinking how I can combine my skills as a musician and a developer.
                        I have been working on this project since about November 2019.</p>
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
                <h1>empty space for scrolling</h1>
            </div>

        )

    }

}

export default Home;
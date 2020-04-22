import React from 'react';
import './projects.css'
import IndivProject from './indivProject'
class Projects extends React.Component {

    render() {

        return (

            <div>
                <h1 className="title">Projects</h1>
                <div id="projectBlock">
                    <ul>
                        <li className='projectWrap'>
                            <IndivProject
                                name='BalanceVR'
                                image='./img/projectLogos/LOGO-JPG.jpg'
                                link='/balancevr'
                            />
                        </li>
                        <li className='projectWrap'>
                            <IndivProject
                                name='Jazz Chords'
                                image='./img/projectLogos/LOGO-JPG.jpg'
                                link='/jazzchords'
                            />
                        </li>
                    </ul>
                    <ul>
                        <li className='projectWrap'>
                            <IndivProject
                                name='Personal website'
                                image='./img/logo/Logo Transparent.png'
                                link='//github.com/dchavira/damian-chavira-website'
                            />
                        </li>
                        <li className='projectWrap'>
                            <IndivProject
                                name='3D Art'
                                image='./img/3d/sunset.png'
                                link='/art'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Projects;
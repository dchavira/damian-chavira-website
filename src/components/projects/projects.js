import React from 'react';
import './projects.css'
import IndivProject from './indivProject'
class Projects extends React.Component {

    render() {

        return (

            <div>
                <h1 className="title">Projects</h1>
                <div id="projectTable">
                    <ul>
                        <li>
                            <IndivProject
                                name='BalanceVR'
                                image='./img/projectLogos/LOGO-JPG.jpg'
                                link='/balancevr'
                            />
                        </li>
                        <li>
                            <IndivProject
                                name='Jazz Chords'
                                image='./img/projectLogos/LOGO-JPG.jpg'
                                link='/jazzchords'
                            />
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <IndivProject
                                name='Personal website'
                                image='./img/logo/Logo Transparent.png'
                                link='/balancevr'
                                invert='true'
                            />
                        </li>
                        <li>
                            <IndivProject
                                name='3D Art'
                                image='./img/3d/sunset.png'
                                link='/jazzchords'
                            />
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default Projects;
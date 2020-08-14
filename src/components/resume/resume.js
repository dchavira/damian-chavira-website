import React from 'react';
import './resume.css'
class Resume extends React.Component {

    render() {
        return (
            <div id='resumeContainer'>
                <h1 className="title">Resume</h1>
                    <div id="resumeTable">
                        <h2 className="ResumeHeader">Technologies</h2>
                        <ul className='resumeList'>
                            <li className='resumeIndiv'>
                                <h1 className='year'>Front End Technologies</h1>
                                <h2 className='desc'>React JS</h2>
                                <h2 className='desc'>React Native/Expo</h2>
                                <h2 className='desc'>Adobe Creative Suite</h2>
                            </li>
                            <li className='resumeIndiv'>
                                <h1 className='year'>Software Developement </h1>
                                <h2 className='desc'>Python</h2>
                                <h2 className='desc'>Java</h2>
                            </li>
                            <li className='resumeIndiv'>
                                <h1 className='year'>Game Development</h1>
                                <h2 className='desc'>C# Unity Scripting</h2>
                                <h2 className='desc'>C++/Blueprint UE4 Scripting</h2>
                                <h2 className='desc'>Blender3D</h2>
                                <h2 className='desc'>Substance Painter</h2>
                                <h2 className='desc'>Motion Capture</h2>
                            </li>
                        </ul>
                        <h2 className='ResumeHeader'>Experience</h2>
                        
                        <ul className='resumeList'>
                            <li className='resumeIndiv'>
                                <h1 className='year'>2020-Current</h1>
                                <h3 className='role'>Software Developer Intern at Blue Yonder</h3>
                                <h2 className='desc'>Front End Development (React Typescript)</h2>
                                <h2 className='desc'>UI/UX Design (Adobe XD)</h2>
                                <h2 className='desc'>API Development (Java Spring Boot/Microsoft Graph)</h2>

                            </li>
                            <li className='resumeIndiv'>
                                <h1 className='year'>2019-Current</h1>
                                <h3 className='role'>Freelance Developer</h3>
                                <h2 className='desc'>Game Developement</h2>
                                <h2 className='desc'>Front End Developement</h2>
                                <h2 className='desc'>Mobile App Developement</h2>
                            </li>
                        </ul>
                        <h2 className='ResumeHeader'>Education</h2>
                        <ul className='resumeList'>
                            <li className='resumeIndiv'>
                                <h1 className='year'>May 2021</h1>
                                <h3 className='role'>University of Arizona</h3>
                                <h2 className='desc'>B.S. in Information Science and Technology</h2>
                                <h2 className='desc'>Minor in Computer Science</h2>
                            </li>
                        </ul>
                    
                </div>
            </div>
            
        );
    };
}

export default Resume;
import React from 'react';
import './bvr.css'
class BalanceVR extends React.Component {

    render() {
        return (
            <div>
                <div id='bvr'>
                <img src='/img/projectLogos/LOGO-JPG.jpg' alt='Balance VR' className='logo'/>
                <p className='balanceContent'>
                        Logo Design by: <a href='//www.linkedin.com/in/kyle-mclemore-758275199/' style={{textDecoration:'underline',color:'white'}}> Kyle McLemore</a>
                    </p>
                    
                    <div id="iframeContainer">  

                        <iframe  title="BVR Update 2" 
                        src="https://drive.google.com/file/d/1CkdtsnQ787t6kRzdA8egCU03YQMLv1WK/preview" allowFullScreen
                        ></iframe>

                    </div>
                    <br/>
                    <p className='balanceContent'>

                        Using the notorious Unreal Engine 4, this Virtual Reality physics-based puzzle game takes a player through various 

                        environments and scenes as they try to build a balanced stack! Puzzle games challenge the mind and with each level 

                        having different scenes and shapes, every player will find various solutions to these puzzles.

                        Grab each shape given to you and figure out how to stack them on the platform but be careful!</p>

                    <p className='balanceContent'>
                        You have a limited time to make sure they don't fall once you placed them. 

                        If they fall, it's game over. Will you be able to balance your stack?

                    </p>
                    
                    
                </div>
            </div>
            
        );
    };
}

export default BalanceVR;
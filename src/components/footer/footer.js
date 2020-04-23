import React from 'react';
import './footer.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <h2 className='footerName'>&copy;2020 Damian Chavira. All rights reserved.</h2>
                <div >
                    <ul className='linkContainer'>
                        <li className='directLink'><a href='/'>Home</a></li>
                        <li className='directLink'><a href='/resume'>Resume</a></li>
                        <li className='directLink'><a href='/contact'>Contact</a></li>
                    </ul>
                    <ul className='footerIcons'>
                    
                        <li className='footerIconContainer'><a href='/contact'><MdMailOutline className='footerIcon mailFooter'/></a></li>
                        <li className='footerIconContainer'><a href='//www.linkedin.com/in/damian-chavira-a45886141'><FaLinkedin className='footerIcon'/></a></li>
                        <li className='footerIconContainer'><a href='//www.github.com/dchavira'><FaGithub className='footerIcon'/></a></li>
                    
                    </ul>
                </div>
            </footer>
            
        );
    };
}

export default Footer;
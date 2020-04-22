import React from 'react';
import './footer.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <h2>&copy; Damian Chavira 2020</h2>
                <ul className='footerIcons'>
                
                    <li><a href='mailto:damianchavira@gmail.com'><MdMailOutline className='footerIcon mailFooter'/></a></li>
                    <li><a href='//www.linkedin.com/in/damian-chavira-a45886141'><FaLinkedin className='footerIcon'/></a></li>
                    <li><a href='//www.github.com/dchavira'><FaGithub className='footerIcon'/></a></li>
                
                </ul>
            </footer>
            
        );
    };
}

export default Footer;
import React from 'react'
import './contact.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdMailOutline} from 'react-icons/md'

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            errorMessage:'',
            buttonText:'Send Your Message'
        }
    }
    eventHandler = (event)=>{
        let nam=event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val})
    }
    
    submitHandler = (event)=>{
        event.preventDefault();
        let err='';
        if(!this.state.email.includes('@')){
            alert('Please enter a valid email address')
            err=<strong>*Your email isn't valid.</strong>
        }
        else{
            
        this.setState({buttonText:'Sending...'})
        }
        this.setState({errorMessage:err})
    }


    render() {

        return (

            <div id="formContainer">
                <h1 className='title'>Contact</h1>
                <p>I will answer the fastest if you email me! I have other socials below that you can contact me through.</p>
                <p >Email: <a href='mailto:damianchavira@gmail.com'>damianchavira@gmail.com</a></p>
                
                
                <ul className='iconContainer'>
                    <li><a href='mailto:damianchavira@gmail.com'><MdMailOutline className='iconsContact mailIcon'/></a></li>
                    <li><a href='//www.linkedin.com/in/damian-chavira-a45886141'><FaLinkedin className='iconsContact'/></a></li>
                    <li><a href='//www.github.com/dchavira'><FaGithub className='iconsContact'/></a></li>
                </ul>
            </div>

        )

    }

}

export default Contact;

/*<form onSubmit={e=>{e.preventDefault()}}>
                    <input
                        name='name'
                        placeholder='NAME'
                        type='text'
                        onChange={this.eventHandler}/>
                    <input
                        placeholder='EMAIL'
                        name='email'
                        type='text'
                        onChange={this.eventHandler}/>
                    <input
                        id='m'
                        placeholder='MESSAGE'
                        name='message'
                        type='text'
                        onChange={this.eventHandler}/>
                    
                    <button type='button' className='submit' onClick={this.submitHandler}>{this.state.buttonText}</button>
                
                </form>
                <ul className='iconContainer'>
                    <li><a href='mailto:damianchavira@gmail.com'><MdMailOutline className='iconsContact mailIcon'/></a></li>
                    <li><a href='//www.linkedin.com/in/damian-chavira-a45886141'><FaLinkedin className='iconsContact'/></a></li>
                    <li><a href='//www.github.com/dchavira'><FaGithub className='iconsContact'/></a></li>
                </ul>
                {this.state.errorMessage}*/
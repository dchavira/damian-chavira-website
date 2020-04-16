import React from 'react'
import './contact.css'


class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            message:'',
            errorMessage:''
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
        this.setState({errorMessage:err})
    }


    render() {

        return (

            <div id="formContainer">
                <h1 className='title'>Contact</h1>
                <form onSubmit={e=>{e.preventDefault()}}>
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
                    
                    <button type='button' className='submit' onClick={this.submitHandler}>Send Your Message</button>
                
                </form>
                {this.state.errorMessage}
            </div>

        )

    }

}

export default Contact;
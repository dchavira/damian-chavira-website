import React from 'react';
import './notFound.css'
class NotFound extends React.Component {

    render() {
        return (
            <div id='containerNF'>
                <h1 className='titleNF'>404 Error: Page not found</h1>
                <p className='notFoundContent'>Sorry about that!</p> 
                <p className='notFoundContent'>It seems like we couldn't find that page...</p>
                <p className='notFoundContent'>Check the URL and make sure it is spelled correctly.
                If so, then the page does not exist or is currently being made. Here's what you can do:</p>
                <p className='notFoundContent'><a href='//www.damianchavira.com'>Go home</a></p>
                <p className='notFoundContent'><a href='/projects'>Check out my projects</a></p>
            </div>
            
        );
    };
}

export default NotFound;
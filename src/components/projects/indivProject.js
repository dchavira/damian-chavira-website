import React from 'react';
import './projects.css'
class Projects extends React.Component {

    render() {
        console.log(this.props.invert)
        return (
            <a href={this.props.link}>
            <div className="projectBlock">
                <img id ='thumbnail'src={this.props.image} alt={this.props.name} style={{filter: this.props.invert?'invert()':'none'}}/> 
                <h3 style={{textAlign:'center'}}>{this.props.name}</h3>
            </div></a>
        );
    };
}

export default Projects;
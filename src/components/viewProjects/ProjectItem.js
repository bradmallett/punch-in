import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainProjTopBar from './MainProjTopBar';
import MainProjTitleBar from './MainProjTitleBar';
import MainProjBottomBar from './MainProjBottomBar';


export class ProjectItem extends Component {

    render() {
        return (
            <div className='projectContain'>
                <MainProjTopBar 
                    projectItem={this.props.projectItem}
                    delProjItem={this.props.delProjItem} 
                />
                <MainProjTitleBar projectItem={this.props.projectItem} />
                <MainProjBottomBar projectItem={this.props.projectItem} />
            </div>
            
        )
    }
}

ProjectItem.propTypes = {
    projectItem: PropTypes.object.isRequired,
    delProjItem: PropTypes.func.isRequired
}


export default ProjectItem


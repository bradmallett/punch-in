import React from 'react';
import PropTypes from 'prop-types';


export default function MainProjTitleBar({projectItem}) {
    const {title, color, payRate} = projectItem;

    return (
        <div className='titleBar' style={{backgroundColor: color}}>
            <h2 className='titleText'>{title}</h2>
            <p className='projectsPayRate'>${payRate} / hour</p>
        </div> 

    )
}


MainProjTitleBar.propTypes = {
    projectItem: PropTypes.object.isRequired
}
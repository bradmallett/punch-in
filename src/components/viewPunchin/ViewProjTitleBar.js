import React from 'react'

export default function ViewProjTitleBar({projectItem}) {
    const {color, title, payRate} = projectItem;

    return (
        <div className='titleBar' style={{backgroundColor: color}}>
            <h2 className='titleText'>{title}</h2>
            <p className='projectsPayRate'>${payRate} / hour</p>
        </div>
    )
}
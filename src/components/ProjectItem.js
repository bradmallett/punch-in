import React, { Component } from 'react';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';

export class ProjectItem extends Component {

    render() {
        const {id, title, color, payRate, punchIns, totalTime, totalPay} = this.props.projectItem;
        return (
            <div className='projectContain'>
               <div className='projectTopBar'>
                   <VisibilityOutlinedIcon className='eyeball'/>
                    <p className='punchInStyle'>PUNCH-ins | <span style={{color: color}}>{punchIns}</span></p>
                    <CancelOutlinedIcon className='closeIcon'/>
               </div>
               <div className='titleBar' style={{backgroundColor: color}}>
                   <h2 className='titleText'>{title}</h2>
                   <p className='projectsPayRate'>${payRate} / hour</p>
               </div>
               <div className='projectBottomBar'>
                   <div className='projectBtmBox' style={{border: `1px solid ${color}`}}>
                       <div className='projectBtmIconContain' style={{backgroundColor: color}}>
                           <QueryBuilderOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                       </div>
                        <p className='projectBtmText'>TOTAL TIME | {totalTime}</p>
                   </div>
                   <div className='projectBtmBox-right' style={{border: `1px solid ${color}`}}>
                       <div className='projectBtmIconContain' style={{backgroundColor: color}}>
                           <AttachMoneyOutlinedIcon style={{fontSize: '2rem', color: '#fff'}}/>
                       </div>
                        <p className='projectBtmText'>TOTAL PAY | {totalPay}</p>
                   </div>
               </div>
            </div>
        )
    }
}



export default ProjectItem

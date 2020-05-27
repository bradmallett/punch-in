import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

export class ProjectItem extends Component {

    delProjForItem = () => {
        const {delProjItem, projectItem: {id}} = this.props;

        delProjItem(id);
    }

    render() {
        const {id, title, color, payRate, punchIns, totalTime, totalPay} = this.props.projectItem;
        return (
            <div className='projectContain'>
                <div className='projectTopBar'>
                    <Tooltip TransitionComponent={Zoom} title="View Project" arrow>
                        <div>
                            <VisibilityOutlinedIcon className='eyeball'/>
                        </div>
                    </Tooltip>
                     <p className='punchInStyle'>PUNCH-ins | <span style={{color: color}}>{punchIns}</span></p>
                     <Tooltip TransitionComponent={Zoom} title="Delete Project" arrow>
                        <div className='closeIconRight'>
                            <IconButton onClick={this.delProjForItem}>
                                <DeleteOutlineOutlinedIcon className='closeIcon'/>
                            </IconButton>
                        </div>
                    </Tooltip>
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


ProjectItem.propTypes = {
    projectItem: PropTypes.object.isRequired,
    delProjItem: PropTypes.func.isRequired
}


export default ProjectItem

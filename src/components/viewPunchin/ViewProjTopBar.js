import React from 'react';
import PropTypes from 'prop-types';


import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';

export default function ViewProjTopBar({projectItem}) {
    const {color, punchIns} = projectItem;

    return (
        <div className='projectTopBar'>
            <Tooltip TransitionComponent={Zoom} title="Back to Projects" arrow>
                <div>
                    <Link to='/' className='linkColors'>
                            <HomeOutlinedIcon className='eyeball'/>
                    </Link>
                </div>
            </Tooltip>
                <p className='punchInStyle'>PUNCH-ins | <span style={{color: color}}>{punchIns}</span></p>
                <Tooltip TransitionComponent={Zoom} title="Delete Project" arrow>
                <div className='closeIconRight'>
                    <IconButton>
                        <DeleteOutlineOutlinedIcon className='closeIcon'/>
                    </IconButton>
                </div>
            </Tooltip>
        </div>
    )
}


ViewProjTopBar.propTypes = {
    projectItem: PropTypes.object.isRequired
}

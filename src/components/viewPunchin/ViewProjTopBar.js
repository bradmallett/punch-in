import React from 'react';
import PropTypes from 'prop-types';


import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';


export default function ViewProjTopBar({projectItem, delProjItem}) {
    const {color, punchIns, id} = projectItem;

    const delProjForItem = () => delProjItem(id);
    

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
            <Link to='/' className='closeIconRight'>
                <Tooltip TransitionComponent={Zoom} title="Delete Project" arrow>
                        <IconButton onClick={delProjForItem}>
                            <DeleteOutlineOutlinedIcon className='closeIcon'/>
                        </IconButton>
                </Tooltip>
            </Link>
        </div>
    )
}







ViewProjTopBar.propTypes = {
    projectItem: PropTypes.object.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';


export default function MainProjTopBar({projectItem, delProjItem}) {
    const {id, color, punchIns} = projectItem;
    const delProjForItem = () => delProjItem(id);
    

    return (
        <div className='projectTopBar'>
            <Tooltip TransitionComponent={Zoom} title="View Project" arrow>
                <div>
                    <Link to={`/punchin/:${id}`} className='linkColors'>
                            <VisibilityOutlinedIcon className='eyeball'/>
                    </Link>
                </div>
            </Tooltip>
                <p className='punchInStyle'>PUNCH-ins | <span style={{color: color}}>{punchIns}</span></p>
                <Tooltip TransitionComponent={Zoom} title="Delete Project" arrow>
                <div className='closeIconRight'>
                    <IconButton onClick={delProjForItem}>
                        <DeleteOutlineOutlinedIcon className='closeIcon'/>
                    </IconButton>
                </div>
            </Tooltip>
        </div>
    )
}


MainProjTopBar.propTypes = {
    projectItem: PropTypes.object.isRequired,
    delProjItem: PropTypes.func.isRequired
}
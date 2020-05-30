import React from 'react';

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';


export default function MainProjTopBar({projectItem, setViewCaller, delProjItem}) {
    const {id, color, punchIns} = projectItem;

    const getThisProjId = () => setViewCaller(id);
    
    const delProjForItem = () => delProjItem(id);
    

    return (
        <div className='projectTopBar'>
            <Tooltip TransitionComponent={Zoom} title="View Project" arrow>
                <div>
                    <Link to='/punchin' className='linkColors' onClick={getThisProjId}>
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

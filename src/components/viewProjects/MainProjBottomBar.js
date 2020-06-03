import React from 'react';
import PropTypes from 'prop-types';

import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';


export default function MainProjBottomBar({projectItem}) {
    const {color, totalTime, totalPay} = projectItem;

    return (
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
    )
}




MainProjBottomBar.propTypes = {
    projectItem: PropTypes.object.isRequired
}
import React from 'react';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';
import PropTypes from 'prop-types';

import {convertTimeIntoString} from '../../helpers';


export default function ViewProjTotalsBox({projectItem}) {
    const {color} = projectItem;

    return (
       <div>
            <div className='totalsBox' style={{border: `2px solid ${color}`}}>
                <div className='IconCont-TotalsBox' style={{backgroundColor: color}}>
                    <QueryBuilderOutlinedIcon style={{fontSize: '4rem', color: '#fff'}}/>
                </div>
                <p className='totalsBoxTxt'>TOTAL TIME | {convertTimeIntoString(projectItem.totalTime)}</p>
            </div>
            <div className='totalsBox' style={{border: `2px solid ${color}`}}>
                <div className='IconCont-TotalsBox' style={{backgroundColor: color}}>
                    <AttachMoneyOutlinedIcon style={{fontSize: '4rem', color: '#fff'}}/>
                </div>
                <p className='totalsBoxTxt'>TOTAL PAY | ${projectItem.totalPay}</p>
            </div>
        </div>
    )
}




ViewProjTotalsBox.propTypes = {
    projectItem: PropTypes.object.isRequired
}
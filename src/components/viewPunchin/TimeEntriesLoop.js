import React, { Component } from 'react';
import TimeEntry from './TimeEntry';


const TimeEntriesLoop = (props) => {
    if (props.timeEntries && props.timeEntries.length) {
        return (
            props.timeEntries.map((entry) => (
                <TimeEntry 
                    key={entry.id} 
                    entryItem={entry} 
                    color={props.color} 
                    delTimeEntry={props.delTimeEntry}
                    projID={props.projID}
                />
            ))
        );
    }

    return null;
}

export default TimeEntriesLoop

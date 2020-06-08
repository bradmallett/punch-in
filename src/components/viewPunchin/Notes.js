import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Notes extends Component {

    state = {
        notes: this.props.projectItem.notes
    }

    onChange = (e) => this.setState( {notes: e.target.value} );

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNotes(this.props.projectItem.id,this.state.notes);
        this.setState({ 
            notes: this.props.projectItem.notes
        });
    } 

    render() {

        const {color} = this.props.projectItem;
        return (
            <div className='notesContainer'>
                <h2 className='notesTitle' style={{backgroundColor: color}}>NOTES</h2>
                    <form onSubmit={this.onSubmit}>
                        <textarea
                            style={{border: `2px solid ${color}`}}
                            className = 'notesTxtArea'
                            rows= '15'
                            name='notes'
                            value={this.state.notes}
                            onChange={this.onChange}
                            >
                        </textarea>
                        <input 
                            type='submit'
                            value='SAVE NOTES'
                            className='saveNotes'
                        />
                    </form>
            </div>
        )
    }
}

export default Notes



Notes.propTypes = {
    projectItem: PropTypes.object.isRequired,
    addNotes: PropTypes.func.isRequired
}
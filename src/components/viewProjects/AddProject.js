import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';


export class AddProject extends Component {
    state = {
            title: '',
            payRate: '',
            displayColorPicker: false,
            color: '#01C4FC'
        }



    // functions
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.hex })
    };

    onChange = (e) => this.setState( {[e.target.name]: e.target.value} );

    onSubmit = async (e) => {
        e.preventDefault();
        await this.props.addProject(this.state.title, this.state.payRate, this.state.color);
        this.setState({ 
            // id: uuidv4(),
            title: '',
            payRate: '',
            displayColorPicker: false,
            color: '#01C4FC'
        });
    }

    render() {
        // Color Picker Styles
        const styles = reactCSS({
            'default': {
              color: {
                height: '36px',
                borderRadius: '2px',
                background: this.state.color
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });

          
        return (
            <div className='createProjContainer'>
                <h1 className='createProjTitle'>CREATE NEW PROJECT</h1>

                <div className='createProjFormCont'>
                    <form onSubmit={this.onSubmit} className='createProjForm'>
                        <input
                            className = 'createProjTxt-First'
                            type='text'
                            name='title'
                            placeholder='Project title...'
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                        <div className="input-icon">
                            <input
                                className = 'createProjTxt'
                                type='number'
                                name='payRate'
                                placeholder='0.00'
                                value={this.state.payRate} 
                                onChange={this.onChange}
                            />
                            <i className='dollarSign'>$</i>
                            <i className='perHourSign'> / hour</i>
                        </div>

                        <Tooltip TransitionComponent={Zoom} title="Project Color" arrow>
                            <div className='colorPickerCont'>
                                <div className='colorPickerMid' style={ styles.swatch } onClick={ this.handleClick }>
                                    <div className='colorPickerInner' style={ styles.color } />
                                </div>
                                { this.state.displayColorPicker ? <div style={ styles.popover }>
                                <div style={ styles.cover } onClick={ this.handleClose }/>
                                    <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                                </div> : null }
                            </div>
                        </Tooltip>

                        <Tooltip TransitionComponent={Zoom} title="Create Project" arrow>
                            <IconButton type='submit'>
                                <AddBoxOutlinedIcon style={btnStyle}/>
                            </IconButton>
                        </Tooltip>
                    </form>
                </div>
            </div>
        )
    }
}

const btnStyle = {
    fill: '#6b6b6b',
    fontSize: '4rem'
}



AddProject.propTypes = {
    addProject: PropTypes.func.isRequired
}


export default AddProject


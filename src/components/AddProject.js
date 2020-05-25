import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';


export class AddProject extends Component {
    state = {
            id: uuidv4(),
            title: '',
            payRate: '',
            punchIns: 0,
            totalTime: '00:00:00',
            totalPay: 0.00,
            displayColorPicker: false,
            color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
            }
        }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    onChange = (e) => this.setState( {[e.target.name]: e.target.value} )

    render() {

        const styles = reactCSS({
            'default': {
              color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
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
            <div>
                <h1 className='createProjTitle'>CREATE NEW PROJECT</h1>

                <div className='createProjFormCont'>
                    <form className='createProjForm'>
                        <input
                            className = 'createProjTxt-First'
                            type='text'
                            name='title'
                            placeholder='Project title...'
                            value={this.state.title}
                            onChange={this.onChange}
                        />
                        <input
                            className = 'createProjTxt'
                            type='number'
                            name='payRate'
                            placeholder='$0.00/hour'
                            value={this.state.payRate}
                            onChange={this.onChange}
                        />

                        <div className='colorPickerCont'>
                            <div style={ styles.swatch } onClick={ this.handleClick }>
                                <div style={ styles.color } />
                            </div>
                            { this.state.displayColorPicker ? <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose }/>
                                <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                            </div> : null }
                        </div>

                        <input 
                            className='createProjSubmit'
                            type='submit'
                            value='Submit'
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddProject

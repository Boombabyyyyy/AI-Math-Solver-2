import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, FormText} from "reactstrap"
import FileBase64 from 'react-file-base64';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Upload extends Component {
    state = {  
        confirmation : ""
    } 
    async handleSubmit(event){
        event.PreventDefault();
    }
    processing="Processing doc";
    render() { 
        return (
            <div className='row'>
                    <div classname='col-6 offset-3'></div>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <h3 className='text-danger'>{this.processing}</h3>
                                <h6>Upload Your Problem image</h6>

                            </FormGroup>
                        </Form>
            </div>
        );
    }
}
 
export default Upload;
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


class Demographics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: null,
            gender: null,
            firstLanguage: null,
            currentCity: null,
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div style={ {width: "500px", margin: 'auto', marginTop: '5%', display: 'block'} } >
                <div className="form-group">
                    <label htmlFor="age">What is your age?</label>
                    <input className="form-control" id="age" name="age" type="number" placeholder="Please enter you age" onChange={ e => this.handleChange(e) } />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">What is your gender?</label>
                    <input className="form-control" id="gender" name="gender" type="text" placeholder="Please enter your gender" onChange={ e => this.handleChange(e) } />
                </div>
                <div className="form-group">
                    <label htmlFor="firstLanguage">What is your first language?</label>
                    <input className="form-control" id="firstLanguage" name="firstLanguage" type="text" placeholder="Please enter your first language" onChange={ e => this.handleChange(e) } />
                </div>
                <div className="form-group">
                    <label htmlFor="currentCity">What city do you currently live in?</label>
                    <input className="form-control" id="currentCity" name="currentCity" type="text" placeholder="Please enter your current city" onChange={ e => this.handleChange(e) } />
                </div>
                <Button onClick={ this.handleSubmit } >Submit</Button>
            </div>
        );
    }
}

export default Demographics;
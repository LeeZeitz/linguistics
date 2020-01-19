import React, { Component } from 'react';
import ConsentForm from './consent-form';
import Demographics from './demographics';
import Experiment from './experiment';
import Instructions from './instructions';
import ThankYou from './thank-you';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state={
            accept: false,
            decline: false,
            start: false,
            continue: false,
            results: null,
        }
    }

    onUpdateResults = (results) => {
        this.setState({results: results})
    }

    onRadioChange = (key) => {
        if (this.state.accept === this.state.decline) {
          this.setState({
            [key]: !this.state[key]
          })
        }
        else {
          this.setState({
            accept: !this.state.accept,
            decline: !this.state.decline
          })
        }
    }

    onSubmit = (demographics) => {
        axios.post('/.netlify/functions/results_create', {results: this.state.results, demographics: demographics})
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <Router>
                <Switch>
                    { /* CONSENT FORM */ }
                    <Route path="/consent-form">
                        <ConsentForm 
                            onRadioChange={ this.onRadioChange }
                            accept={ this.state.accept }
                            decline={ this.state.decline }
                            onContinueClick={ () => this.setState({continue: true}) }
                        />
                        {
                            this.state.continue === true &&
                            <Redirect to="/instructions" />
                        }
                    </Route>
                    
                    { /* INSTRUCTIONS */ }
                    <Route path='/instructions'>
                        <Instructions 
                            onStartClick={ () => this.setState({start: true}) }
                        />
                        {
                            this.state.start === true &&
                            <Redirect to='/experiment' />
                        }
                    </Route>

                    { /* EXPERIMENT */ }
                    <Route path="/experiment">
                        <Experiment 
                            onUpdateResults={ this.onUpdateResults }
                        />
                    </Route>

                    { /* DEMOGRAPHICS */ }
                    <Route path="/demographics">
                        <Demographics 
                            onSubmit={ this.onSubmit }
                        />
                    </Route>

                    { /* THANK YOU */ }
                    <Route path="/thank-you">
                        <ThankYou />
                    </Route>

                    { /* EXIT */ }
                    <Route path="/exit">
                        <p>Thank you for participating.</p> 
                        <p>Since you have quit the experiment your data will not be used.</p>
                    </Route>

                    <Route path="/">
                        <Redirect to="/consent-form" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Content;
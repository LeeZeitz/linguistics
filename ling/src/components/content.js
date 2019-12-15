import React, { Component } from 'react';
import ConsentForm from './consent-form';
import Experiment from './experiment';
import Instructions from './instructions';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state={
            accept: false,
            decline: false,
            start: false,
            continue: false
        }
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
                        <Experiment />
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
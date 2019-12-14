import React, { Component } from 'react';
import ConsentForm from './consent-form';
import Experiment from './experiment';
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";

class Content extends Component {

    constructor(props) {
        super(props);
        this.state={
            accept: false,
            decline: false,
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
                            <Redirect to="/experiment" />
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
import React, { Component } from 'react';
import jsPsych from 'jspsych';
import audio_slider_response from './custom-audio-slider-response';
import { trialVars, stimLabels, mediaUrl } from './constants';
import Footer from './footer';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class Experiment extends Component {
    constructor(props) {
        super(props);
        
        let stimuliResults = {}
        let sliderValues = {}
        for (let j = 0; j < Object.keys(stimLabels).length; j++) {
            sliderValues[j] = 0;
        }
        for (let i = 0; i < trialVars.length; i++) {
            stimuliResults[i] = sliderValues
        }

        Object.assign(jsPsych.plugins, {'audio-slider-response': audio_slider_response})
        this.experimentDiv = null;

        this.state = {
            stimuliResults,
            experimentComplete: false,
        }
    }

    componentDidMount() {
        jsPsych.init({
            timeline: this.createTimeline(),
            display_element: this.experimentDiv,
            on_finish: () => this.finishExperiment(jsPsych.data.get().values())
        })
    }

    finishExperiment = (rawResults) => {
        let results = {}
        for (let i = 0; i < rawResults.length; i++) {
            results[i] = rawResults[i].response;
        }
        this.setState({experimentComplete: true});
        axios.post('http://localhost:8080/', results);
    }

    /**
    * Randomly shuffle an array
    * https://stackoverflow.com/a/2450976/1293256
    */
    shuffle = (array) => {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    createTimeline = () => {
        // Generate a random order for the trials
        let order = [];
        for (let i = 0; i < Object.keys(trialVars).length; i++) {
            order.push(i);
        };
        let random_order = this.shuffle(order);

        // Add the trials in their random order to the jsPsych timeline
        let timeline = [];//[instructions];

        random_order.forEach((trialNum) => {
            let trial = trialVars[trialNum];
            let labels = [];
            let prompts = [];
            let mins = [];
            let maxes = [];
            let starts = [];
            for (let i = 0; i < Object.keys(stimLabels).length; i++) {
                labels.push([stimLabels[i].minVal, stimLabels[i].maxVal]);
                prompts.push(stimLabels[i].prompt);
                mins.push(stimLabels[i].min);
                maxes.push(stimLabels[i].max);
                starts.push(this.state.stimuliResults[trialNum][i])
            }
            timeline.push({
                timeline:[{
                    type: 'audio-slider-response',
                    stimulus: mediaUrl.concat(trial.audio),
                    labels: labels,
                    prompt: prompts,
                    min: mins,
                    max: maxes,
                    start: starts,
                    data: {stimulusId: trialNum},
                    button_label: 'Proceed'
                }],
                on_start: () => this.setState({currentTrialId: trialNum})
            });
        });
        return timeline;
    }

    renderStartExperimentButton = () => {
        return (
            <button onClick={ () => this.setState({startExperiment: true}) } >
                Start Experiment
            </button>
        )
    }

    onReplayAudio = () => {
        let audio = new Audio(mediaUrl.concat(trialVars[this.state.currentTrialId].audio));
        audio.play();
    }

    render() {
        return (
            <React.Fragment>
                <div id="experiment" style={ {height: this.height, width: this.width} } ref={ e => {this.experimentDiv = e;} }/>
                {/*
                    !this.state.experimentComplete
                    ?
                    <Footer>
                        <Button
                            onClick={ this.onReplayAudio }    
                        >
                            Replay Audio
                        </Button>
                    </Footer>
                    :
                    <Redirect to='thank-you' />
                */}
            </React.Fragment>
        )
    }
}

export default Experiment;

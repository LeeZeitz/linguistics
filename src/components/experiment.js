import React, { Component } from 'react';
import jsPsych from 'jspsych';
import audio_slider_response from './custom-audio-slider-response';
import html_button_response from 'jspsych/plugins/jspsych-html-button-response';
import { trialVars, stimLabels, mediaUrl } from './constants';
import { Redirect } from 'react-router-dom';

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

        Object.assign(jsPsych.plugins, {'audio-slider-response': audio_slider_response, 'html-button-response': html_button_response})
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
            show_progress_bar: true,
            on_finish: () => this.finishExperiment(jsPsych.data.get().values())
        })
    }

    finishExperiment = (rawResults) => {
        let results = {}
        for (let i = 0; i < rawResults.length; i++) {
            results[i] = {...rawResults[i].response, stimulus: rawResults[i].stimulus};
        }
        this.setState({experimentComplete: true});
        this.props.onUpdateResults(results);
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

        let labels = [];
        let prompts = [];
        let mins = [];
        let maxes = [];
        for (let i = 0; i < Object.keys(stimLabels).length; i++) {
            labels.push([stimLabels[i].minVal, stimLabels[i].maxVal]);
            prompts.push(stimLabels[i].prompt);
            mins.push(stimLabels[i].min);
            maxes.push(stimLabels[i].max);
        }

        // Add the trials in their random order to the jsPsych timeline
        let timeline = [
            {
                type: 'audio-slider-response',
                stimulus: mediaUrl.concat('testfile.mp3'),
                labels: labels,
                prompt: prompts,
                min: mins,
                max: maxes,
                start: [0, 0, 0, 0, 0, 0, 0],
                button_label: 'Proceed'
            },
            {
                type: 'audio-slider-response',
                stimulus: mediaUrl.concat('testfile2.mp3'),
                labels: labels,
                prompt: prompts,
                min: mins,
                max: maxes,
                start: [0, 0, 0, 0, 0, 0, 0],
                button_label: 'Proceed'
            },
            {
                type: 'html-button-response',
                stimulus: '<p>The experiment will now start.</p>',
                choices: ['Begin']
            }
        ];

        random_order.forEach((trialNum) => {
            let trial = trialVars[trialNum];
            let starts = [];
            for (let i = 0; i < Object.keys(stimLabels).length; i++) {
                starts.push(this.state.stimuliResults[trialNum][i])
            }
            timeline.push({
                timeline: [{
                    type: 'audio-slider-response',
                    stimulus: mediaUrl.concat(trial.audio),
                    labels: labels,
                    prompt: prompts,
                    min: mins,
                    max: maxes,
                    start: starts,
                    data: {stimulusId: trialNum, stimulusName: trial.audio},
                    button_label: 'Proceed',
                    require_movement: true
                }]
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
                {
                    this.state.experimentComplete && <Redirect to="demographics" />
                }
            </React.Fragment>
        )
    }
}

export default Experiment;

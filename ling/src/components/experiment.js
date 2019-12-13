import React, { Component } from 'react';
import jsPsych from 'jspsych';
import audio_slider_response from "jspsych/plugins/jspsych-audio-slider-response.js";
import { trialVars, mediaUrl } from './constants';

class Experiment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        Object.assign(jsPsych.plugins, {'audio-slider-response': audio_slider_response})
        this.experimentDiv = null;
    }

    componentDidMount() {
        jsPsych.init({
            timeline: this.createTimeline(),
            display_element: this.experimentDiv
        })
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
        for (let i = 1; i < Object.keys(trialVars).length + 1; i++) {
            order.push(i);
        };
        let random_order = this.shuffle(order);

        // Add the trials in their random order to the jsPsych timeline
        let timeline = [];//[instructions];
        random_order.forEach((trialNum) => {
            var trial = trialVars[trialNum];
            timeline.push({
                type: 'audio-slider-response',
                stimulus: mediaUrl.concat(trial.audio),
                labels: [trial.min, trial.max],
                prompt: trial.prompt
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

    render() {
        return (
            <div
                id="experiment"
                style={{ height: this.height, width: this.width }}
                ref={e => {
                    this.experimentDiv = e;
                }}
          />
        )
    }
}

export default Experiment;

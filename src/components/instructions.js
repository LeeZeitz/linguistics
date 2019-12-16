import React from 'react';
import { Button } from 'react-bootstrap';

const Instructions = (props) => {
    return (
        <div style={ {marginTop: '50px'} } >
            <h1>
                Instructions
            </h1>
            <span style={ {'margin': '10% 25%', 'fontSize': '1.2em'} } >
                <p>
                    You will listen to a series of two second audio clips of various speakers. Each audio clip will be played one at a time. 
                </p>
                <p>
                    After listening to each audio clip, you will be presented with eight questions about the speaker’s personal attributes. 
                </p>
                <p>
                    Use the slider to answer all eight questions.
                    Please respond as quickly as possible based on your initial reaction. 
                </p>
                <p>
                    If you need to replay the audio clip press the <i><b>replay</b></i> button. 
                </p>
                <p>
                    Once you have finished answering all eight questions press <i><b>proceed</b></i> and the next audio clip will play. 
                </p>
            </span>
            <div>
                <Button
                    onClick={ props.onStartClick }
                >
                    Start
                </Button>
            </div>
        </div>
    )
};

export default Instructions;
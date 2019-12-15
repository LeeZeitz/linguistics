import React from 'react';
import { Button } from 'react-bootstrap';

const Instructions = (props) => {
    return (
        <div>
            <p style={ {'margin': '10% 25%'} } >
                You will listen to a series of two second audio clips of various speakers. Each audio clip will be played one at a time. After listening to each audio clip, you will be presented with eight questions about the speaker’s personal attributes. Use the slider to answer all eight questions. Please respond as quickly as possible based on your initial reaction.  If you need to replay the audio clip press the <i><b>replay</b></i> button. Once you have finished answering all eight questions press <i><b>proceed</b></i> and the next audio clip will play. 
            </p>
            <Button
                onClick={ props.onStartClick }
            >
                Start
            </Button>
        </div>
    )
};

export default Instructions;
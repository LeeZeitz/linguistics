import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

const radioStyle = {
  margin: '0px 40px'
}

class ConsentForm extends Component {

  render() {
 
    return (
      <div>
        <div>
          <h1>Informed Consent Form</h1>
          <p>Please read the following consent form and click Accept to start the experiment.</p>
        </div>
        <div>
          <object width="60%" height="750" data="/media/InformedConsentForm.pdf" type="application/pdf" />
        </div>
        <div>
          <Form>
              <div key={ 1 } style={ {fontSize: '1.3em'} } className="mb-3">
                  <Form.Check style={ radioStyle } inline label="Decline" type="radio" checked={ this.props.decline } id="radio-decline" onChange={ () => this.props.onRadioChange('decline') } />
                  <Form.Check style={ radioStyle } inline label="Accept" type="radio" checked={ this.props.accept} id="radio-accept" onChange={ () => this.props.onRadioChange('accept') } />
              </div>
          </Form>
        </div>
        <div>
            { 
                this.props.decline && 
                <p>
                    You will not be able to participate in the experiment unless you accept the Informed Consent Form.    
                </p>
            }
        </div>
        <div style={ {'margin': '20px 0'} } >
            <Button 
                disabled={ !this.props.accept }
                onClick={ this.props.onContinueClick }
            >
                Continue
            </Button>
        </div>
      </div>
    );
  }
}

export default ConsentForm;
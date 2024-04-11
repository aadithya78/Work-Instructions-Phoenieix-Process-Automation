import React, { Component ,  useState} from 'react';
import "./App.css";
import './SMSForm.css';
class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  };
  
  onSubmit(props) {
    this.setState({ submitting: true });
    const message = {
      to: this.props.number,
      body: this.props.message 
    };
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }
  render() {
    return (
      <div className={this.state.error ? 'error sms-form' : 'sms-form'}>
    <button type="button" className="btn btn-danger" onClick={this.onSubmit} disabled={this.state.submitting}>Send Alert Message</button>
    </div>
    );
  }
}

export default SMSForm;

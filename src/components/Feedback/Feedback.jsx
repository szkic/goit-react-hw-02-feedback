import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {
    step: 1,
  };

  countFeedback = e => {
    console.log('button clicked', e.target.innerText);

    switch (e.target.innerText) {
      case 'Good':
        return this.setState((state, props) => ({
          good: state.good + props.step,
        }));
      case 'Neutral':
        return this.setState((state, props) => ({
          neutral: state.neutral + props.step,
        }));
      case 'Bad':
        return this.setState((state, props) => ({
          bad: state.bad + props.step,
        }));
      default:
        return;
    }
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    let total = 0;

    for (const value of values) {
      total += value;
    }

    return total;
  }

  countPositiveFeedbackPercentage() {
    const positiveFeedback = this.state.good;

    if (this.countTotalFeedback() === 0) {
      return '0%';
    } else {
      return `${Math.round(
        (positiveFeedback / this.countTotalFeedback()) * 100
      )}%`;
    }
  }

  render() {
    return (
      <>
        <div>
          <h2>Please leaeve Feedback</h2>
          <button type="button" onClick={this.countFeedback}>
            Good
          </button>
          <button type="button" onClick={this.countFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.countFeedback}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}</p>
        </div>
      </>
    );
  }
}

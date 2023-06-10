import React, { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from './FeedbackOptions';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // static defaultProps = {
  //   step: 1,
  // };

  countFeedback = e => {
    console.log('button clicked', e.target);

    const {
      target: { name, value },
    } = e;

    return this.setState(() => {
      return { [`${name}`]: +value + 1 };
    });
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
          <button
            type="button"
            onClick={this.countFeedback}
            name="good"
            value={this.state.good}
          >
            Good
          </button>
          <button
            type="button"
            onClick={this.countFeedback}
            name="neutral"
            value={this.state.neutral}
          >
            Neutral
          </button>
          <button
            type="button"
            onClick={this.countFeedback}
            name="bad"
            value={this.state.bad}
          >
            Bad
          </button>
        </div>
        {/* <FeedbackOptions options={} onLeaveFeedback={} /> */}
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

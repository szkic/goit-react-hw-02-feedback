import React, { Component } from 'react';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    console.log('button clicked', e.target);

    const {
      target: { name },
    } = e;

    return this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
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
    const btnNames = Object.keys(this.state);

    return (
      <>
        <Section title={'Please leave Feedback'}>
          <FeedbackOptions
            options={btnNames}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

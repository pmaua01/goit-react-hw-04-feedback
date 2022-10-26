import { Section } from './Section/Section';
import { Feedback } from './Feddback/Feedback';
import { Statistics } from './Statistics/Statistics';

import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addState = data => {
    this.setState(prevState => ({
      [data]: prevState[data] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    if (countTotalFeedback === 0) {
      return 0;
    }
    return Number(((good / countTotalFeedback) * 100).toFixed(0));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;

    const feedbackList = Object.keys(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          width: 720,
          margin: 'auto',
          fontSize: 40,
        }}
      >
        <Section title={'Please leave feedback'}>
          <Feedback
            options={feedbackList}
            onLeaveFeedback={this.addState}
          ></Feedback>
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            percent={positiveFeedback}
          ></Statistics>
        </Section>
      </div>
    );
  }
}

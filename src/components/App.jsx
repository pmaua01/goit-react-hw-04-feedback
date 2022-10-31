import { Section } from './Section/Section';
import { Feedback } from './Feddback/Feedback';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

// import React, { Component } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackList = { good, neutral, bad };

  const addState = data => {
    switch (data) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = good + neutral + bad;
    if (countTotalFeedback === 0) {
      return 0;
    }
    return Number(((good / countTotalFeedback) * 100).toFixed(0));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

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
          options={Object.keys(feedbackList)}
          onLeaveFeedback={addState}
        ></Feedback>
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percent={countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    </div>
  );
};

//   render() {
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;

//     const feedbackList = Object.keys(this.state);
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (

//     );
//   }
// }

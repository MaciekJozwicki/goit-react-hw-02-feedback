import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementStats = type => {
    if (type === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }
    if (type === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }
    if (type === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  totalStats = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  positivePercentage = () => {
    if (this.totalStats() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.totalStats()) * 100);
  };

  render() {
    return (
      <div>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.incrementStats}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.totalStats()}
          positivePercentage={this.positivePercentage()}
        />
      </div>
    );
  }
}
export default App;

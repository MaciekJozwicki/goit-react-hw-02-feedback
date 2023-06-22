import Notification from 'components/Notification/Notification';
const { Component } = require('react');

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    if (total === 0) {
      return (
        <div>
          <h2>Statistics</h2>
          <Notification message="There is no feedback" />
        </div>
      );
    }

    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}
export default Statistics;

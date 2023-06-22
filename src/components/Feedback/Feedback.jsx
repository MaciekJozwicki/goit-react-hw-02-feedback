const { Component } = require('react');

class Feedback extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={() => onLeaveFeedback('good')}>
          Good
        </button>
        <button type="button" onClick={() => onLeaveFeedback('neutral')}>
          Neutral
        </button>
        <button type="button" onClick={() => onLeaveFeedback('bad')}>
          Bad
        </button>
      </div>
    );
  }
}
export default Feedback;
console.log('Feedback');

export const FeedbackOptions = () => (
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
);

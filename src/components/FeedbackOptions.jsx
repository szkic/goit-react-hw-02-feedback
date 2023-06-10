export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <h2>Please leaeve Feedback</h2>
    {options.map((el, index) => {
      return (
        <button type="button" onClick={onLeaveFeedback} name={el} key={index}>
          {el.charAt(0).toUpperCase() + el.slice(1)}
        </button>
      );
    })}
  </div>
);

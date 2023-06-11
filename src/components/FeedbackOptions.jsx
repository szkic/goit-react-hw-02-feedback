export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map((name, index) => {
      return (
        <button type="button" onClick={onLeaveFeedback} name={name} key={index}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </button>
      );
    })}
  </>
);

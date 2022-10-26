import PropTypes from 'prop-types';
import { ListButton, ItemButton, Button } from './Feedback.styled';
export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(option => {
        return (
          <ItemButton key={option}>
            {
              <Button type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </Button>
            }
          </ItemButton>
        );
      })}
    </ListButton>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

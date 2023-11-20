import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

export const StyledInput = styled(TextField)(({ theme, variant }) => {
  let styles = {
    '& label.Mui-focused': {
      color: theme.palette.secondary.main
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.main
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.secondary.main
      }
    }
  };
  if (variant === 'filled') styles = {};
  if (variant === 'standard') styles = {};
  if (variant === 'outlined') styles = {};
  return styles;
});

const RyInput = ({ children, ...restProps }) => {
  return React.createElement(StyledInput, restProps, children);
};

RyInput.propTypes = {
  children: PropTypes.node
};

export default RyInput;

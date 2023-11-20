import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import React from 'react';

export const StyledButton = styled(Button)(({ theme, variant }) => {
  let styles = {};
  if (variant === 'contained')
    styles = {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary[200]
      }
    };
  if (variant === 'outlined')
    styles = {
      borderColor: theme.palette.secondary[200],
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.main
      }
    };
  if (variant === 'text')
    styles = {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    };
  return styles;
});

const RyButton = ({ children, ...restProps }) => {
  return React.createElement(StyledButton, restProps, children);
};

RyButton.propTypes = {
  children: PropTypes.node
};

export default RyButton;

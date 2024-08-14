import React from 'react';
import { Link } from 'gatsby';
import { Box } from 'rebass';

const baseButtonStyles = {
  display: 'inline-flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 1 auto',
  px: 4,
  py: 2,
  textDecoration: 'none',
  minWidth: '160px',
  fontSize: 1,
  fontWeight: 'bold',
  fontFamily: 'bold',
  borderRadius: '20px',
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
};

const Button = ({ variant, as = Link, hasIcon, url, sx, ...props }) => {
  const urlRegex = new RegExp(/(https?:\/\/[^\s]+)/g);
  const isExternalUrl = urlRegex.test(props.to);
  const isHash = props.to && props.to.startsWith('#');
  if (isHash) {
    return (
      <Box
        variant={`button.${variant}`}
        as={'a'}
        href={props.to}
        onClick={(event) => {
          // Can't use global scroll-behavior: smooth; as it messes with SPAs
          event.preventDefault();
          document.querySelector(props.to).scrollIntoView({
            behavior: 'smooth',
          });
        }}
        sx={{ ...baseButtonStyles, ...sx }}
        {...props}
      />
    );
  } else if (isExternalUrl) {
    return (
      <Box
        variant={`button.${variant}`}
        as={'a'}
        href={props.to}
        target="_blank"
        rel="noreferrer noopener"
        sx={{ ...baseButtonStyles, ...sx }}
        {...props}
      />
    );
  } else {
    return (
      <Box
        variant={`button.${variant}`}
        as={as}
        to={url || '#'}
        sx={{ ...baseButtonStyles, ...sx }}
        {...props}
      />
    );
  }
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  const now = new Date();

  return (
    <footer className="center w5 f6 tc pa4">
      <h4>
        <span>&copy; </span>
        <span>{now.getFullYear()} </span>
        <span>{props.copyright}</span>
      </h4>
    </footer>
  );
}

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Footer;

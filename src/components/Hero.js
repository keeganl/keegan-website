import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function Hero(props) {
  return (
    <div className={`relative tc ${props.backgroundClass}`}>
      <div className="mw7 center white">
        <div className="">
          <div className="flex justify-around">
            {props.topLinks &&
              props.topLinks.length > 0 &&
              props.topLinks.map((link, i) => {
                return link.href.indexOf('http') === -1 ? (
                  <Link href={link.href} key={i}>
                    <a className="dim db f3 white no-underline pa1" key={i}>
                      <p className="avenir">{link.text}</p>
                    </a>
                  </Link>
                ) : (
                  <a className="dim db f3 white no-underline pa1" href={link.href} key={i}>
                    <p className="avenir">{link.text}</p>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  backgroundClass: PropTypes.string,
  topLinks: PropTypes.array,
  heroTitle: PropTypes.string,
  subtitle: PropTypes.string,
};

Hero.defaultProps = {
  backgroundClass: 'bg-mid-gray',
  topLinks: [],
  heroTitle: '',
  subtitle: '',
};

export default Hero;

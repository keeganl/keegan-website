import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../src/components/Page';
import Footer from '../../src/components/Footer';

import CONFIG from '../../content/index.json';
import SUMMARY_JSON from '../../content/summary.json';

function Contact(props) {
  return (
    <div className="vh-100 bg-dark grey white">
      <Page
        siteTitle={`${CONFIG.siteTitle} - Index`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundclassName={CONFIG.backgroundClass}
        body={Body({ summaryJson: SUMMARY_JSON })}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  );
}

function Body(props) {
  return (
    <div className="center mw6 pa3 pa4-ns white">
      <main className="pa4 white-80">
        <form className="measure center" action="https://formspree.io/f/xaylppdq" method="POST">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 white">Contact Me</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba br3 bg-white w-100 black"
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="message">
                Message
              </label>
              <textarea
                className="pa2 input-reset ba br3 bg-wite w-100 black"
                name="message"
                id="message"
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba br3  b--white bg-transparent grow pointer f6 dib white"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;

import React from 'react';
import { withRouter } from 'next/router';
import Page from '../src/components/Page';
import PagePreview from '../src/components/PagePreview';
import { formatDate } from '../src/utils/date';

import CONFIG from '../content/index.json';
import SUMMARY_JSON from '../content/summary.json';

function Index(props) {
  const pageJson = props.pageJson;

  return (
    <div>
      <style jsx global>{`
        .content a {
          color: #0365a5;
          text-decoration: none;
          border-bottom: 1px solid #dfdfdf;
          transition: all 300ms ease;
        }

        a:hover,
        a:focus {
          border-bottom-color: currentColor;
        }

        code {
          background-color: #eee;
          line-height: 1;
          border-radius: 2px;
          padding: 1px;
        }
        code:not(.hljs) {
          border: 1px solid #ddd;
        }
      `}</style>
      <Page
        siteTitle={`${CONFIG.siteTitle} - ${pageJson && pageJson.title}`}
        heroTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundclassName={CONFIG.backgroundClass}
        body={Body(pageJson)}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  );
}

function Body(props = {}) {
  return (
    <div className="content center mw6 pa3 pa4-ns white vh-100">
      <h3 className="mt0 lh-title">{props.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.bodyHtml }}></div>
    </div>
  );
}

Index.getInitialProps = async function (req) {
  if (req.pathname === '/post') {
    return import(
      `../content${
        req.query.filePath
          ? req.query.filePath.replace('content', '').replace('.json', '')
          : req.query.fullUrl
      }.json`
    )
      .then((d) => {
        return {
          pageJson: d.default,
        };
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return {};
};

export default withRouter(Index);

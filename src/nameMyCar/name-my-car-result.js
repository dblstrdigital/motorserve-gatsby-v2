/* global iagDataLayer */

import React, { useEffect } from 'react';
import BlankPage from '@components/global/BlankPage';
import { navigate } from 'gatsby';

const slugify = (text) => {
  // eslint-disable-next-line
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

const SEO = ({ pageContext }) => (
  <>
    <title>{'Name My Car | Motorserve' || ''}</title>
    <meta
      name={`description`}
      content={
        `My car's name is ${pageContext.name}. Name your car and win!` || ''
      }
    />
    <meta name={`og:title`} content={'Name My Car | Motorserve' || ''} />
    <meta
      name={`og:description`}
      content={
        `My car's name is ${pageContext.name}. Name your car and win!` || ''
      }
    />
    <meta name={`og:type`} content={`website`} />
    <meta
      name={`og:image`}
      content={`/images/name-my-car/social-tiles/${slugify(
        pageContext.name
      )}.jpg`}
    />
  </>
);

export function Head({ pageContext }) {
  return <SEO pageContext={pageContext} />;
}

const QuizNamePage = ({ pageContext }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
    navigate('/namemycar/');
  }, []);

  return <BlankPage title={'quiz-name'} />;
};

export default QuizNamePage;

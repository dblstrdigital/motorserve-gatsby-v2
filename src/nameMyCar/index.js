/* global iagDataLayer */

import React, { useEffect } from 'react';
import BlankPage from '@components/global/BlankPage';
import Quiz from '@components/modules/NameMyCarQuiz/Quiz';

const SEO = () => (
  <>
    <title>{'Name My Car | Motorserve' || ''}</title>
    <meta
      name={`description`}
      content={
        `Find the perfect name for your car. Share your car’s name on our Facebook or Instagram post now for your chance to win a Car Care Kit valued at $70 RRP.` ||
        ''
      }
    />
    <meta name={`og:title`} content={'Name My Car | Motorserve' || ''} />
    <meta
      name={`og:description`}
      content={
        `Find the perfect name for your car. Share your car’s name on our Facebook or Instagram post now for your chance to win a Car Care Kit valued at $70 RRP.` ||
        ''
      }
    />
    <meta name={`og:type`} content={`website`} />
    <meta
      name={`og:image`}
      content={`/images/name-my-car/MTRS1446_NameYourCarDay2021_SocialPost_1080x1080.jpg`}
    />
  </>
);

export function Head() {
  return <SEO />;
}

const NameMyCar = ({ data, errors }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);
  if (errors) return { errors };
  return (
    <BlankPage title={'nameMyCar'}>
      <Quiz />
    </BlankPage>
  );
};

export default NameMyCar;

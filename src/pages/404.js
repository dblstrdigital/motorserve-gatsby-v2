/* global iagDataLayer */

import React, { useEffect } from 'react';
import { Box } from 'rebass';
import Page from '../components/global/Page';
import SEO from '../components/global/SEO';

export function Head() {
  return <SEO title={'Page Not Found'} description={'Page Not Found'} />;
}

const NotFoundPage = () => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);
  return (
    <Page title={'page-not-found'}>
      <Box
        as="main"
        sx={{ px: ['20px', '', '60px'], py: ['60px', '', '120px'] }}
        className={`content--page-not-found`}
      >
        <h1>Page Not Found</h1>
      </Box>
    </Page>
  );
};

export default NotFoundPage;

/* global iagDataLayer */

import React, { useEffect } from 'react';
import { Box } from 'rebass';
import Page from '@components/global/Page';
import Spacer from '@components/global/Spacer';
import HeaderBanner from '@components/modules/HeaderBanner';
import RichText from '@components/modules/RichText';
import FullWidthBannerIcons from '@components/modules/FullWidthBannerIcons';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import FaqsComponent from '@components/modules/FAQs';
import SEO from '@components/global/SEO';

export function Head({ pageContext }) {
  return (
    <SEO
      title={pageContext.seoTitle}
      description={pageContext.seoDescription}
    />
  );
}

const ContentPage = ({ pageContext }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);
  return (
    <Page title={'locations'}>
      <Box as="main" className={`content--page`}>
        <HeaderBanner
          as="h1"
          slide={{
            pageHeading: pageContext.headerPage.pageHeading,
            headerText: pageContext.headerPage.headerText
              ? pageContext.headerPage.headerText
              : '',
            image: {
              path: pageContext.headerPage.image.asset.url,
              alt: pageContext.headerPage.image.alt,
            },
            cta: pageContext.headerPage.cta
              ? {
                  route: pageContext.headerPage.cta.route,
                  title: pageContext.headerPage.cta.title,
                }
              : null,
          }}
        />
        {pageContext._rawRichTextOne && (
          <>
            <RichText richText={pageContext._rawRichTextOne} />
            <Spacer size="2" />
          </>
        )}
        {pageContext.bannerIcons && (
          <>
            <FullWidthBannerIcons
              title={pageContext.bannerIcons.title}
              icons={pageContext.bannerIcons.icons}
            />
            <Spacer size="2" />
          </>
        )}
        {pageContext._rawRichTextTwo && (
          <>
            <RichText richText={pageContext._rawRichTextTwo} />
            <Spacer size="2" />
          </>
        )}
        {pageContext.faqGroups && (
          <>
            <FaqsComponent faqGroups={pageContext.faqGroups} />
            <Spacer size="2" />
          </>
        )}
        {pageContext.bannerMessage && (
          <FullWidthBannerMessage
            data={{
              title: pageContext.bannerMessage.title || '',
              text: pageContext.bannerMessage._rawSimpleText,
              image: {
                path: pageContext.bannerMessage.image.asset.url,
                alt: pageContext.bannerMessage.image.alt,
              },
              ctaButton:
                pageContext.bannerMessage.ctaButton.title &&
                pageContext.bannerMessage.ctaButton,
            }}
          />
        )}
      </Box>
    </Page>
  );
};

export default ContentPage;

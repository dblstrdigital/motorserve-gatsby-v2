/* global iagDataLayer */

import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';
import { Box } from 'rebass';
import Page from '@components/global/Page';
import { MaxContainer } from '@components/global/Container';
import Spacer from '@components/global/Spacer';
import RichTextBookingForm from '@components/modules/RichTextBookingForm';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import SEO from '../components/global/SEO';

export const query = graphql`
  query {
    page: sanityBookServicePage(title: { eq: "Book A Service" }) {
      title
      seoTitle
      seoDescription
      _rawRichTextOne
      bannerMessage {
        title
        _rawSimpleText
        image {
          alt
          asset {
            url
          }
        }
        ctaButton {
          link
          route
          title
        }
      }
    }
  }
`;

export function Head({ data }) {
  const seoTitle = data?.page?.seoTitle || 'Car Servicing, Repairs, Mechanics in Sydney and NSW | Motorserve'; 
  const seoDescription = data?.page?.seoDescription || 'Visit one of our Motorserve service centres across NSW and ACT today for expert car servicing and repairs.'; 

  return (
    <SEO title={seoTitle} description={seoDescription} />
  );
}
const ServiceCentres = ({ data, errors }) => {
  const [height, setHeight] = useState();
  const frameRef = useRef();
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (frameRef.current) {
      if (!isBrowser) return;
      window.addEventListener(
        'message',
        (event) => {
          if (event.origin !== 'https://bookings.motorserve.com.au') return;
          let { message, value } = event.data;
          // console.log('event.data.value', value);
          message === 'getIframeHeightInBookingPortal' && setHeight(value);
        },
        false
      );
    }
  }, [frameRef, isBrowser]);

  // Fallback re-render for case of
  // 'Request location response with error Geolocation has been disabled in this document by permissions policy.'
  useEffect(() => {
    if (!height) {
      frameRef.current.setAttribute(
        'src',
        'https://bookings.motorserve.com.au'
      );
    }
  }, [height]);

  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);

  if (errors) return { errors };
  const { page } = data;

  return (
    <Page title={'book-a-service'} hideCTA={true}>
      <Box as="main" className={`content--book-a-service`}>
        <Box as="h1" sx={{ m: 0 }} aria-label={'Book a car service'} />
        <Box
          id="booking-form"
          as="iframe"
          allow="geolocation"
          ref={frameRef}
          src="https://bookings.motorserve.com.au/"
          title="Car service booking form"
          sx={{
            height: height ? height + 'px' : 'auto',
            border: 'none',
            width: '100%',
          }}
        />
        <Spacer size="2" />
        {page?._rawRichTextOne && (
          <>
            <RichTextBookingForm richText={page._rawRichTextOne} />
            <Spacer size="3" />
          </>
        )}
        <MaxContainer className="card-grid">
        {page?.bannerMessage && (
          <FullWidthBannerMessage
            data={{
              title: page.bannerMessage.title || '',
              text: page.bannerMessage._rawSimpleText,
              image: {
                path: page.bannerMessage.image.asset.url,
                alt: page.bannerMessage.image.alt,
              },
              ctaButton:
                page.bannerMessage.ctaButton.title &&
                page.bannerMessage.ctaButton,
            }}
          />
        )}
      </MaxContainer>

      </Box>
      
    </Page>
  );
};

export default ServiceCentres;

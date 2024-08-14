/* global iagDataLayer */

import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { Box } from 'rebass';
import Page from '@components/global/Page';
import Spacer from '@components/global/Spacer';
import HeaderSlim from '@components/modules/HeaderSlim';
import RichText from '@components/modules/RichText';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import SEO from '../components/global/SEO';
import ContactForm from '../components/modules/ContactForm';

export const query = graphql`
  query {
    page: sanityContactPage(title: { eq: "Contact Us" }) {
      title
      seoTitle
      seoDescription
      _rawRichText
      headerPageSlim {
        image {
          asset {
            id
            url
          }
          alt
        }
        pageHeading
      }
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
    stores: allSanityLocationCentre {
      nodes {
        state
        name
        slug
        email
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

const ContactUs = ({ data, errors }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);

  if (errors) return { errors };
  const { page, stores } = data;
  const bannerData = {
    pageHeading: page.headerPageSlim.pageHeading,
    image: {
      path: page.headerPageSlim.image.asset.url,
      alt: page.headerPageSlim.image.alt,
    },
  };

  return (
    <Page title={'contact-us'}>
      <Box as="main" className={`content--contact-us`}>
        <HeaderSlim slide={bannerData} as="h1" />
        {page._rawRichText && (
          <>
            <RichText richText={page._rawRichText} />
            <Spacer size="2" />
          </>
        )}
        <ContactForm stores={stores.nodes} />
        {page.bannerMessage && (
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
      </Box>
    </Page>
  );
};

export default ContactUs;

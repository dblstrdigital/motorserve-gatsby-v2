/* global iagDataLayer */

import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { Box, Flex } from 'rebass';
import { mapEdgesToNodes } from '../util/helpers';
import Page from '@components/global/Page';
import { MaxContainer } from '@components/global/Container';
import Spacer from '@components/global/Spacer';
import HeaderSlim from '@components/modules/HeaderSlim';
import RichText from '@components/modules/RichText';
import CentreLocator from '@components/modules/CentreLocator/CentreLocator';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import SEO from '../components/global/SEO';

export const query = graphql`
  query {
    page: sanityLocationsPage(title: { eq: "Our Locations" }) {
      title
      seoTitle
      seoDescription
      _rawRichTextOne
      _rawRichTextTwo
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
    locations: allSanityLocationCentre(sort: { fields: name, order: ASC }) {
      edges {
        node {
          id
          slug
          location {
            _key
            _type
            lat
            lng
            alt
          }
          name
          address
          state
          phoneNumber
          locationServices {
            _key
            _type
            servicing
            insurance
            paint
          }
        }
      }
    }
  }
`;

export function Head({ data }) {
  const seoTitle = data?.page?.seoTitle || 'Car Servicing, Repairs, Mechanics in Sydney and NSW | Motorserve'; 
  const seoDescription = data?.page?.seoDescription || 'Visit one of our Motorserve service centres across NSW today for expert car servicing and repairs.'; 

  return (
    <SEO title={seoTitle} description={seoDescription} />
  );
}



const ServiceCentres = ({ data, errors }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);
  if (errors) return { errors };
  const locations = mapEdgesToNodes(data.locations);
  const { page } = data;

const bannerData = {
  pageHeading: page?.headerPageSlim?.pageHeading || 'Default Heading',
  image: {
    path: page?.headerPageSlim?.image?.asset?.url || '',
    alt: page?.headerPageSlim?.image?.alt || 'Default Alt Text',
  },
};

  return (
    <Page title={'locations'}>
     <Box as="main" className={`content--locations`}>
  <HeaderSlim slide={bannerData} as="h1" />
  {page && page._rawRichTextOne && <RichText richText={page._rawRichTextOne} />}
  <MaxContainer className="card-grid">
    <Spacer size="2" />
    <Flex
      sx={{
        flexDirection: 'column',
        maxWidth: '1180px',
        margin: '0 auto',
        px: 4,
        mb: 4,
      }}
    >
      <CentreLocator centres={locations} />
    </Flex>
    <Spacer size="2" />
    {page && page._rawRichTextTwo && (
      <>
        <RichText richText={page._rawRichTextTwo} />
        <Spacer size="3" />
      </>
    )}
    {page && page.bannerMessage && (
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

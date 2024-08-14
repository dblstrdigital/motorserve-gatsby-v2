/* global iagDataLayer */

import React, { useEffect } from 'react';
import { Box } from 'rebass';
import { graphql } from 'gatsby';
import Page from '@components/global/Page';
import Spacer from '@components/global/Spacer';
import HeaderBanner from '@components/modules/HeaderBanner';
import ComparisonTable from '@components/modules/ComparisonTable';
import CardGrid from '@components/modules/CardGrid';
import FullWidthBannerIcons from '@components/modules/FullWidthBannerIcons';
import RichText from '@components/modules/RichText';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import { TruckOne, Wheel, Car } from '../styles/icons';
import SEO from '../components/global/SEO';

const comparisonTableData = {
  columns: [
    {
      Header: 'Features',
      accessor: 'feature', // accessor is the "key" in the data
      width: 250,
    },
    {
      Header: 'Essential',
      icon: <TruckOne />,
      description: 'Service for standard vehicles',
      accessor: 'essential',
      width: 150,
    },
    {
      Header: 'Log Book',
      icon: <Wheel />,
      description: 'Service to manufacturer specifications',
      accessor: 'logBook',
      width: 150,
    },
    {
      Header: 'Essential Plus',
      icon: <Car />,
      description: 'Service for 4WD and European vehicles',
      accessor: 'essentialPlus',
      width: 150,
    },
  ],
  rows: [
    {
      feature: 'Comprehensive safety check',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Engine oil replacement',
      essential: true,
      logBook: true,
      essentialPlus: false,
    },
    {
      feature: 'Synthetic engine oil replacement',
      essential: false,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Engine oil filter replacement',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Brake check, clean & adjustment',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Tyre and tread check',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Tyre pressures check',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Fluid check and top up',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Lighting check and test',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Windscreen wiper check',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Battery system test',
      essential: true,
      logBook: true,
      essentialPlus: true,
    },
    {
      feature: 'Service reminder re-set',
      essential: false,
      logBook: true,
      essentialPlus: false,
    },
    {
      feature: 'Logbook service stamps',
      essential: false,
      logBook: true,
      essentialPlus: false,
    },
    {
      feature: 'Complimentary car wash & vacuum',
      essential: false,
      logBook: true,
      essentialPlus: false,
    },
    {
      feature: 'Complimentary car wash',
      essential: true,
      logBook: false,
      essentialPlus: true,
    },
    {
      feature: 'Prices',
      essential: 'From $198*',
      logBook: 'From $217*',
      essentialPlus: 'From $340*',
    },
  ],
};

export const query = graphql`
  {
    page: sanityCarServicingPage(title: { eq: "Car Servicing" }) {
      title
      seoTitle
      seoDescription
      headerPage {
        image {
          asset {
            id
            url
          }
          alt
        }
        headerText
        cta {
          _key
          _type
          title
          route
          link
        }
        pageHeading
      }
      cardGridThree {
        textField {
          cardGridHeading
          cardGridText
          cardGridLink {
            label
            href
          }
        }
        cards {
          title
          link {
            label
            href
          }
          description
          image {
            alt
            asset {
              url
            }
          }
        }
      }
      bannerIcons {
        title
        icons {
          _key
          iconImage {
            alt
            asset {
              url
            }
          }
          iconText
          iconTitle
        }
      }
      _rawRichText
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
      comparisonFooterCopy
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
const CarServicing = ({ data, errors }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);

  if (errors) return { errors };
  const { page } = data;
  const bannerData = {
    pageHeading: page.headerPage.pageHeading,
    headerText: page.headerPage.headerText || '',
    image: {
      path: page.headerPage.image.asset.url,
      alt: page.headerPage.image.alt,
    },
    cta: page.headerPage.cta.title
      ? {
          route: page.headerPage.cta.route,
          title: page.headerPage.cta.title,
        }
      : null,
  };

  return (
    <Page title={'carServicing'}>
      <Box as="main" className={`content--car-servicing`}>
        <HeaderBanner as="h1" slide={bannerData} />
        <ComparisonTable
          tableData={comparisonTableData}
          footerCopy={data.page.comparisonFooterCopy}
        />
        <Spacer size="3" />

        {page.bannerIcons && (
          <>
            <FullWidthBannerIcons
              title={page.bannerIcons.title}
              icons={page.bannerIcons.icons}
            />
            <Spacer size="3" />
          </>
        )}
        {page._rawRichText && (
          <>
            <RichText richText={page._rawRichText} />
            <Spacer size="3" />
          </>
        )}
        {page.cardGridThree && (
          <>
            <CardGrid
              columns="3"
              data={{
                textField: page.cardGridThree.textField,
                cards: page.cardGridThree.cards,
              }}
            />
            <Spacer size="3" />
          </>
        )}
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

export default CarServicing;

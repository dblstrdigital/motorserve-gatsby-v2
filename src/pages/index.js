/* global iagDataLayer */

import React, { useEffect } from 'react';
import { Box } from 'rebass';
import { graphql } from 'gatsby';
import Page from '@components/global/Page';
import Spacer from '@components/global/Spacer';
import HeaderBannerCarousel from '@components/modules/HeaderBannerCarousel';
import CardGrid from '@components/modules/CardGrid';
import FullWidthBannerIcons from '@components/modules/FullWidthBannerIcons';
import RichText from '@components/modules/RichText';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import SEO from '../components/global/SEO';

export const query = graphql`
  {
    page: sanityLandingPage(title: { eq: "Home Page" }) {
      title
      seoTitle
      seoDescription
      headerCarousel {
        carousel {
          carouselOne {
            enableBanner
            headerText
            pageHeading
            responsiveImage {
              largeImage {
                asset {
                  url
                }
              }
              smallImage {
                asset {
                  url
                }
              }
              alt
            }
            cta {
              title
              route
              link
            }
          }
          carouselTwo {
            enableBanner
            headerText
            pageHeading
            responsiveImage {
              largeImage {
                asset {
                  url
                }
              }
              smallImage {
                asset {
                  url
                }
              }
              alt
            }
            firstLogo {
              asset {
                url
              }
            }
            secondLogo {
              asset {
                url
              }
            }
            cta {
              title
              route
              link
            }
          }
          carouselThree {
            enableBanner
            headerText
            pageHeading
            responsiveImage {
              largeImage {
                asset {
                  url
                }
              }
              smallImage {
                asset {
                  url
                }
              }
              alt
            }
            firstLogo {
              asset {
                url
              }
            }
            secondLogo {
              asset {
                url
              }
            }
            cta {
              title
              route
              link
            }
          }
        }
      }
      cardGridTwo {
        textField {
          cardGridHeading
          cardGridLink {
            label
            href
          }
          cardGridText
        }
        cards {
          title
          image {
            alt
            asset {
              url
            }
          }
          description
          link {
            label
            href
          }
        }
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

const Home = ({ data, errors }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);
  if (errors) return { errors };
  const carousel = data.page.headerCarousel.carousel;
  const headerCarouselSlides = [
    {
      showBanner: carousel.carouselOne.enableBanner,
      pageHeading: carousel.carouselOne.pageHeading,
      headerText: carousel.carouselOne.headerText
        ? carousel.carouselOne.headerText
        : '',
      largeImage: carousel.carouselOne.responsiveImage.largeImage
        ? {
            path: carousel.carouselOne.responsiveImage.largeImage.asset.url,
            alt: carousel.carouselOne.responsiveImage.alt,
          }
        : null,
      smallImage: carousel.carouselOne.responsiveImage.smallImage
        ? {
            path: carousel.carouselOne.responsiveImage.smallImage.asset.url,
            alt: carousel.carouselOne.responsiveImage.alt,
          }
        : null,
      cta: carousel.carouselOne.cta.title
        ? {
            route: carousel.carouselOne.cta.route,
            link: carousel.carouselOne.cta.link,
            title: carousel.carouselOne.cta.title,
          }
        : null,
    },
    {
      showBanner: carousel.carouselTwo.enableBanner,
      pageHeading: carousel.carouselTwo.pageHeading,
      headerText: carousel.carouselTwo.headerText,
      largeImage: carousel.carouselTwo.responsiveImage.largeImage
        ? {
            path: carousel.carouselTwo.responsiveImage.largeImage.asset.url,
            alt: carousel.carouselTwo.responsiveImage.alt,
          }
        : null,
      smallImage: carousel.carouselTwo.responsiveImage.smallImage
        ? {
            path: carousel.carouselTwo.responsiveImage.smallImage.asset.url,
            alt: carousel.carouselTwo.responsiveImage.alt,
          }
        : null,
      firstLogo: carousel.carouselTwo.firstLogo
        ? {
            path: carousel.carouselTwo.firstLogo.asset.url,
          }
        : null,
      secondLogo: carousel.carouselTwo.secondLogo
        ? {
            path: carousel.carouselTwo.secondLogo.asset.url,
          }
        : null,
      cta: carousel.carouselTwo.cta.title
        ? {
            route: carousel.carouselTwo.cta.route,
            link: carousel.carouselTwo.cta.link,
            title: carousel.carouselTwo.cta.title,
          }
        : null,
    },
    {
      showBanner: carousel.carouselThree.enableBanner,
      pageHeading: carousel.carouselThree.pageHeading,
      headerText: carousel.carouselThree.headerText,
      largeImage: carousel.carouselThree.responsiveImage.largeImage
        ? {
            path: carousel.carouselThree.responsiveImage.largeImage.asset.url,
            alt: carousel.carouselThree.responsiveImage.alt,
          }
        : null,
      smallImage: carousel.carouselThree.responsiveImage.smallImage
        ? {
            path: carousel.carouselThree.responsiveImage.smallImage.asset.url,
            alt: carousel.carouselThree.responsiveImage.alt,
          }
        : null,
      firstLogo: carousel.carouselThree.firstLogo
        ? {
            path: carousel.carouselThree.firstLogo.asset.url,
          }
        : null,
      secondLogo: carousel.carouselThree.secondLogo
        ? {
            path: carousel.carouselThree.secondLogo.asset.url,
          }
        : null,
      cta: carousel.carouselThree.cta.title
        ? {
            route: carousel.carouselThree.cta.route,
            link: carousel.carouselThree.cta.link,
            title: carousel.carouselThree.cta.title,
          }
        : null,
    },
  ];
  const gridTwo = data.page.cardGridTwo;
  const gridThree = data.page.cardGridThree;
  const bannerIcons = data.page.bannerIcons;
  const bannerMessage = data.page.bannerMessage;

  return (
    <Page title={'home'}>
      <Box as="main" className={`content--home`}>
        <HeaderBannerCarousel slides={headerCarouselSlides} />
        <CardGrid
          columns="2"
          data={{
            textField: gridTwo.textField,
            cards: gridTwo.cards,
          }}
        />
        <Spacer size="3" />
        <CardGrid
          columns="3"
          data={{
            textField: gridThree.textField,
            cards: gridThree.cards,
          }}
        />
        <Spacer size="3" />
        <FullWidthBannerIcons
          title={bannerIcons.title}
          icons={bannerIcons.icons}
        />
        <Spacer size="4" />
        <RichText richText={data.page._rawRichText} />
        <Spacer size="4" />
        <FullWidthBannerMessage
          data={{
            title: bannerMessage.title || '',
            text: bannerMessage._rawSimpleText,
            image: {
              path: bannerMessage.image.asset.url,
              alt: bannerMessage.image.alt,
            },
            ctaButton: bannerMessage.ctaButton.title && bannerMessage.ctaButton,
          }}
        />
      </Box>
    </Page>
  );
};

export default Home;

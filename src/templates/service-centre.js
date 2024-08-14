/* global iagDataLayer */

import React, { useEffect } from 'react';
import { Flex, Box } from 'rebass';
import Page from '@components/global/Page';
import Spacer from '@components/global/Spacer';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '@components/global/Container';
import HeaderSlim from '@components/modules/HeaderSlim';
import RichText from '@components/modules/RichText';
import CardGrid from '@components/modules/CardGrid';
import FullWidthBannerIcons from '@components/modules/FullWidthBannerIcons';
import FullWidthBannerMessage from '@components/modules/FullWidthBannerMessage';
import BookingForm from '@components/modules/BookingForm';
import SEO from '@components/global/SEO';
import {
  ORIGINAL_SCRIPT_SRC,
  DELACON_SCRIPT_ID,
  loadScript,
} from '../util/load-script';

export const Head = ({ pageContext }) => {
  return (
    <SEO
      title={pageContext.seoTitle}
      description={pageContext.seoDescription}
    />
  );
};

const OpeningHours = ({ days }) => {
  return (
    <MaxContainer className="opening-hours">
      <Box
        sx={{
          ...gridFallbackStylesColumn,
        }}
      >
        <Flex
          flexDirection="column"
          sx={{ ...containerInnerStyles, height: '100%' }}
        >
          {days.map((day) => {
            return (
              <Flex key={day._key}>
                <Box width="120px">{day.day}</Box>
                <Box width="60px">{day.opensAt}</Box>
                <Box width="20px">
                  {day.opensAt.trim().toLowerCase() !== 'closed' && '-'}
                </Box>
                <Box width="60px">{day.closesAt}</Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </MaxContainer>
  );
};

const ServiceCentre = ({ pageContext }) => {
  useEffect(() => {
    iagDataLayer.push({
      event: 'pageview',
      pageId: '/motorserve/all' + window.location.pathname,
      data: {},
    });
  }, []);

  useEffect(() => {
    const scriptId = DELACON_SCRIPT_ID;
    let locationSpecificScript;

    if (pageContext.locationId) {
      const originalScript = document.getElementById(scriptId);

      if (originalScript) {
        originalScript.remove();
      }

      const newScriptSrc = `${ORIGINAL_SCRIPT_SRC}-${pageContext.locationId}`;
      locationSpecificScript = loadScript(scriptId, newScriptSrc, false, true);
    }

    return () => {
      locationSpecificScript && locationSpecificScript.remove();
    };
  }, [pageContext]);

  return (
    <Page title={'locations'}>
      <Box as="main" className={`content--locations`}>
        <HeaderSlim
          as="h1"
          slide={{
            pageHeading: pageContext.name,
            image: {
              path: pageContext.bannerImage.asset.url,
              alt: pageContext.bannerImage.asset.alt,
            },
          }}
        />
        {pageContext.bookingURL && (
          <>
            <Spacer size="2" />
            <BookingForm
              bookingURL={pageContext.bookingURL}
              locationName={pageContext.name}
            />
            <Spacer size="2" />
          </>
        )}
        <Spacer size="2" />
        <RichText richText={pageContext._rawIntroText} />
        <Spacer size="2" />
        {pageContext._rawLocationDetails && (
          <>
            <RichText richText={pageContext._rawLocationDetails} />
            <Spacer size="1" />
          </>
        )}
        {pageContext.openingHours && (
          <>
            <OpeningHours days={pageContext.openingHours} />
            <Spacer size="2" />
          </>
        )}

        {pageContext.bannerIcons && (
          <>
            <Spacer size="2" />
            <FullWidthBannerIcons
              title={pageContext.bannerIcons.title}
              icons={pageContext.bannerIcons.icons}
            />
            <Spacer size="2" />
          </>
        )}
        {pageContext._rawLocationDirections && (
          <>
            <Spacer size="2" />
            <RichText richText={pageContext._rawLocationDirections} />
            <Spacer size="2" />
          </>
        )}
        {pageContext.cardGrid && (
          <>
            <Spacer size="2" />
            <CardGrid
              columns={
                pageContext.cardGrid && pageContext.cardGrid.cards.length > 2
                  ? '3'
                  : '2'
              }
              data={{
                cards: pageContext.cardGrid.cards,
                textField: pageContext.cardGrid.textField,
              }}
            />
            <Spacer size="2" />
          </>
        )}
        {pageContext.bannerMessage && (
          <>
            <Spacer size="2" />
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
          </>
        )}
      </Box>
    </Page>
  );
};

export default ServiceCentre;

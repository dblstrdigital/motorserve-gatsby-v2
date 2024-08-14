import React from 'react';
import { Box, Text } from 'rebass';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';

const iFrameStyles = {
  borderWidth: 0,
  width: '100%',
  height: '100%',
  overflow: 'scroll',
};

const BookingForm = ({ bookingURL, locationName }) => {
  return (
    <MaxContainer className="booking-form" id="booking-form">
      <Box sx={{ ...gridFallbackStylesColumn }}>
        <Box sx={{ ...containerInnerStyles }}>
          <Text as="h2" sx={{ textTransform: 'uppercase', mb: 3 }}>
            Book your car service with{' '}
            <Box as="br" display={['none', 'inline']} />
            {locationName}
          </Text>
          <Box sx={{ height: ['1720px', '', '1150px'] }}>
            <iframe
              title="Booking Form"
              src={bookingURL}
              style={iFrameStyles}
              width="800"
              height="600"
              frameBorder="0"
            />
          </Box>
        </Box>
      </Box>
    </MaxContainer>
  );
};

export default BookingForm;

import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { theme } from '@styles/theme';
import Button from '@components/global/Button';

import { Service, Assessment, Phone, ColorPalette } from '@styles/icons';

const CentreLocatorListItem = ({ centre, selected, onSelect }) => {
  const isSelected = centre.id === selected;
  // keep track of insurance-only centre (displaying different CTA)
  // insurance only: More info
  // others: Book service
  // const { insurance, servicing } = centre.locationServices;
  // const insuranceOnly = insurance && !servicing;
  return (
    <Box
      data-tracking={`btn-click:selectCenter-${centre.slug}`}
      onClick={() => {
        // the entire cell is clickable only when the centre isn't selected
        if (!isSelected) onSelect(centre.id);
      }}
      as="li"
      sx={{
        cursor: !isSelected ? 'pointer' : 'auto',
        borderBottom: `1px solid ${
          isSelected ? theme.colors.navy : theme.colors.navy10
        }`,
      }}
    >
      {/* centre detail */}
      <Flex
        id={centre.id}
        sx={{
          justifyContent: 'space-between',
          py: 2,
        }}
      >
        <Box sx={{ flex: '0 1 calc(100% - 80px)' }}>
          <Text
            sx={{
              fontWeight: 'bold',
              textDecoration: isSelected ? 'underline' : null,
              '&:hover,&:active': {
                textDecoration: 'underline',
              },
            }}
          >
            {centre.name}
          </Text>
          <Text>{centre.address}</Text>
        </Box>
        <Flex
          sx={{
            justifyContent: 'flex-end',
            svg: {
              flex: '0 0 22px',
              width: '22px',
              ml: 1,
              opacity: isSelected ? 10 : 0.6,
            },
          }}
        >
          {centre.locationServices.servicing && <Service />}
          {centre.locationServices.insurance && <Assessment />}
          {centre.locationServices.paint && <ColorPalette />}
        </Flex>
      </Flex>
      {/* /centre detail */}

      {/* booking detail */}
      {isSelected && (
        <Flex
          sx={{
            justifyContent: 'space-between',
            position: 'relative',
            flexDirection: ['row', 'column', 'column', 'row'],
            mt: 4,
            mb: 2,
            '&:after': {
              content: '""',
              position: 'absolute',
              mt: -2,
              width: '20px',
              height: '2px',
              background: theme.colors.brightBlue,
            },
          }}
        >
          <Box sx={{ flex: '0 0 50%' }}>
            <Text
              sx={{
                fontWeight: 'bold',
              }}
            >
              Phone Store
              <Box
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                  color: theme.colors.navy,
                  svg: {
                    width: '12px',
                    height: '12px',
                  },
                }}
                as="a"
                data-tracking="link-click:centrePhoneNumber"
                href={`tel:${centre.phoneNumber}`}
              >
                <Phone /> {centre.phoneNumber}
              </Box>
            </Text>
          </Box>
          <Box>
            <Button
              data-tracking={`link-click:${'moreInfo'}`}
              to={`/service-centres/${centre.state}/${centre.slug}/`}
              variant="lightBlue"
              sx={{
                flex: '0 0 50%',
                minWidth: 'auto',
                fontSize: [0],
                mt: [0, 2, 2, 0],
              }}
            >
              {'more info'}
            </Button>
          </Box>
        </Flex>
      )}
      {/* /booking detail */}
    </Box>
  );
};

export default CentreLocatorListItem;

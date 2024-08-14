import React from 'react';
import { Box } from 'rebass';
import { LogoMotorserve, LogoNameMyCar, PageInner } from './Global';
const LandingPanel = (props) => {
  return (
    <PageInner
      background={[
        '/images/name-my-car/bg_mob_landing.jpg',
        '/images/name-my-car/bg_mob_landing@2x.jpg',
        '/images/name-my-car/bg_tablet_landing.jpg',
        '/images/name-my-car/bg_tablet_landing@2x.jpg',
        '/images/name-my-car/bg_desktop_landing.jpg',
        '/images/name-my-car/bg_desktop_landing@2x.jpg',
      ]}
    >
      <Box
        sx={{
          my: ['50px', '', '60px'],
          '@media screen and (max-height: 700px)': {
            my: ['30px', '', '60px'],
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '625px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}
          {...props}
        >
          <Box
            sx={{
              width: ['211px', '', '290px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoMotorserve />
          </Box>
          <Box
            sx={{
              width: ['284px', '', '347px'],
              mt: ['60px', '', '60px'],
              '@media screen and (max-height: 700px)': {
                mt: ['30px', '', '60px'],
              },
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoNameMyCar />
          </Box>
          {props.children}
        </Box>
      </Box>
    </PageInner>
  );
};

export const landingHeadingStyles = {
  fontFamily: 'bold',
  fontSize: ['28px', '', '36px'],
  lineHeight: ['30px', '', '36px'],
  color: 'white',
  maxWidth: ['240px', '', '330px'],
};

export default LandingPanel;

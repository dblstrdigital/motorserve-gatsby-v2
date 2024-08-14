import React from 'react';
import { Box, Text } from 'rebass';
import { LogoMotorserve, LogoNameMyCar, PageInner } from './Global';
export const iconButtonStyles = {
  padding: '20px',
  borderRadius: '50%',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  flex: '0 1 64px',
  margin: '24px 8px',
  minWidth: 'none',
  '&:hover': {
    background: '#04BAE0',
  },
};

export const iconContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const srOnly = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  border: '0',
};
const resultStyles = {
  backgroundColor: 'white',
  color: '#1D1655',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  border: 'solid 3px #1D1655',
  borderRadius: '10px',
  mb: 3,
  mt: 3,
  px: [4, 6],
  minWidth: ['240px', '', '320px'],
  textAlign: 'center',
  height: '95px',
  '&:before': {
    position: 'absolute',
    content: '""',
    width: 'calc(100% - 12px)',
    height: 'calc(100% - 12px)',
    border: 'solid 3px #1D1655',
    borderRadius: '6px',
    top: '6px',
    left: '6px',
  },
  h2: {
    fontSize: ['44px', '', '56px'],
    textTransform: 'uppercase',
    fontFamily: 'UKNumberPlate',
    fontWeight: '400',
    m: 0,
  },
};

export const shareButtonContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  button: {
    p: 0,
    border: 0,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    flex: '0 1 auto',
    pl: 2,
    pr: 4,
    pt: '14px',
    pb: '10px',
    textDecoration: 'none',
    minWidth: '160px',
    fontSize: 1,
    fontWeight: 'bold',
    fontFamily: 'bold',
    borderRadius: '20px',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    backgroundColor: 'brightBlue',
    mt: [3, '', 4],
    mx: 1,
    color: 'white',
  },
};

export const CustomerFormPanel = (props) => {
  return (
    <PageInner>
      <Box sx={{ py: [4, '', 6], px: [0], mb: ['80px', '', '120px'] }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: ['30px', '', '30px'],
          }}
        >
          <Box
            sx={{
              width: ['150px', '', '290px', '290px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoMotorserve />
          </Box>
          <Box
            sx={{
              width: ['125px', '', '182px', '232px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoNameMyCar />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: ['', '', '960px'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
          {...props}
        >
          {props.children}
        </Box>
      </Box>
    </PageInner>
  );
};
export const ShareToWinPanel = (props) => {
  return (
    <PageInner
      background={[
        '/images/name-my-car/bg_mob_share.jpg',
        '/images/name-my-car/bg_mob_share@2x.jpg',
        '/images/name-my-car/bg_tablet_share.jpg',
        '/images/name-my-car/bg_tablet_share@2x.jpg',
        '/images/name-my-car/bg_desktop_share.jpg',
        '/images/name-my-car/bg_desktop_share@2x.jpg',
      ]}
    >
      <Box sx={{ py: [4, '', 6], px: [0], mb: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: ['30px', '', '30px'],
          }}
        >
          <Box
            sx={{
              width: ['150px', '', '290px', '290px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoMotorserve />
          </Box>
          <Box
            sx={{
              width: ['125px', '', '182px', '232px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoNameMyCar />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: ['', '', '960px'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
          {...props}
        >
          {props.children}
        </Box>
      </Box>
    </PageInner>
  );
};

export const ThankYouPanel = (props) => {
  return (
    <PageInner
      background={[
        '/images/name-my-car/bg_mob_ending.jpg',
        '/images/name-my-car/bg_mob_ending@2x.jpg',
        '/images/name-my-car/bg_tablet_ending.jpg',
        '/images/name-my-car/bg_tablet_ending@2x.jpg',
        '/images/name-my-car/bg_desktop_ending.jpg',
        '/images/name-my-car/bg_desktop_ending@2x.jpg',
      ]}
    >
      <Box sx={{ py: [4, '', 6], px: [0], mb: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: ['30px', '', '30px'],
          }}
        >
          <Box
            sx={{
              width: ['150px', '', '290px', '290px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoMotorserve />
          </Box>
          <Box
            sx={{
              width: ['125px', '', '182px', '232px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoNameMyCar />
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: ['', '', '960px'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
          {...props}
        >
          {props.children}
        </Box>
      </Box>
    </PageInner>
  );
};

export const textStyles = {
  width: '100%',
  maxWidth: '530px',
  fontSize: '20px',
  lineHeight: '22px',
  fontFamily: 'bold',
  mx: ['', 'auto'],
  mt: [2, 3, 4],
  textAlign: ['left', 'center'],
};
export const headingStyles = {
  fontFamily: 'black',
  fontSize: ['32px', '36px'],
  lineHeight: ['30px', '30px'],
  textTransform: 'uppercase',
  mt: [6],
  mb: [2, 3, 4],
  textAlign: 'center',
  maxWidth: ['300px', '450px', ''],
};
export const disclaimerStyles = {
  maxWidth: '530px',
  fontSize: '16px',
  lineHeight: '22px',
  fontFamily: 'bold',
  color: 'white',
  mx: 'auto',
  mt: [2, 3, 4],
  textAlign: ['', 'center'],
};
export const tcStyles = {
  lineHeight: '22px',
  fontFamily: 'regular',
  color: 'navy',
  fontSize: ['16px', '', '20px'],
  mx: 'auto',
  mt: [2, 3, 4],
  textAlign: ['', 'center'],
  a: {
    color: 'navy',
    '&:visited': {
      color: 'navy',
    },
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

export const NumberPlate = (props) => {
  return (
    <Box sx={{ ...resultStyles }}>
      <Text as="h2" {...props} />
    </Box>
  );
};

export const HiddenFormInputs = ({ formId, register }) => {
  return (
    <>
      <input
        type="hidden"
        name="u"
        value={formId}
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="f"
        value={formId}
        ref={register({ required: true })}
      />
      <input type="hidden" name="s" ref={register({})} />
      <input
        type="hidden"
        name="c"
        value="0"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="m"
        value="0"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="act"
        value="sub"
        ref={register({ required: true })}
      />
      <input
        type="hidden"
        name="v"
        value="2"
        ref={register({ required: true })}
      />
    </>
  );
};

export const storesByRegion = {
  act: { name: 'ACT', stores: ['Majura Park', 'Tuggeranong'] },
  regionalnsw: {
    name: 'Regional NSW',
    stores: ['Kotara', 'Wollongong'],
  },
  northernmetrosydney: {
    name: 'Northern Metro Sydney',
    stores: ['Artarmon', 'Brookvale', 'Gladesville', 'Hornsby', 'Narrabeen'],
  },
  southernmetrosydney: {
    name: 'Southern Metro Sydney',
    stores: ['Campbelltown', 'Caringbah', 'Padstow'],
  },
  westernmetrosydney: {
    name: 'Western Metro Sydney',
    stores: [
      'Liverpool',
      'Marrickville',
      'North Parramatta',
      'Penrith',
      'Rouse Hill',
      'Seven Hills',
      'South Strathfield',
    ],
  },
};

export const FormInputItem = (props) => {
  return (
    <Box
      sx={{
        gridColumn: ['1 / -1', '', 'span 1'],
        textAlign: 'left',
        maxWidth: '100%',
        label: {
          fontSize: [2, 3, 4],
          textTransform: 'uppercase',
          fontFamily: 'bold',
          letterSpacing: '0.2px',
          mt: ['10px', '', '0'],
          display: ' inline-block',
        },
        input: {
          color: 'navy',
          width: '100%',
          minHeight: '50px',
          borderStyle: 'solid',
          borderColor: 'navy',
          borderWidth: '2px',
          backgroundColor: 'white',
          fontSize: [2, 3, 4],
          borderRadius: '4px',
          p: '10px',
          '&::placeholder': {
            /* Chrome, Firefox, Opera, Safari 10.1+ */ color: 'navy80',
            opacity: 1 /* Firefox */,
          },

          '&:-ms-input-placeholder': {
            /* Internet Explorer 10-11 */ color: 'navy80',
          },
          '&:focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&:-webkit-direct-focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
        },
        select: {},
        p: {
          mb: 0,
        },
      }}
      {...props}
    />
  );
};

export const FormCheckboxItem = (props) => {
  return (
    <Box
      sx={{
        gridColumn: ['1 / -1'],
        textAlign: 'left',
        width: ['100%', '360px', '420px'],
        mx: 'auto',
        display: 'flex',
        position: 'relative',
        mt: '10px',
        a: {
          color: 'navy',
          '&:hover': {
            textDecoration: 'none',
          },
        },
        label: {
          fontSize: [2, 3, 4],
          letterSpacing: '0.2px',
          display: ' inline-block',
          maxWidth: ['300px', '360px', 'none'],
          pl: ['32px', '38px'],

          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            pointerEvents: 'none',
            borderRadius: '4px',
            lineHeight: '1',
          },
          // 	Here is where you can style the radio border
          '&:before': {
            width: '24px',
            height: '24px',
            left: '0px',
            top: '-2px',
            display: 'inline-block',
            backgroundColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'navy',
          },
          //		Here is where you can style the selected radio inner
          '&:after': {
            width: '16px',
            height: '16px',
            left: '4px',
            top: '3px',
            display: 'none',
            backgroundImage: 'url("/svg/radio-check-navy.svg")',
            backgroundSize: '14px auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        },
        input: {
          position: 'absolute',
          opacity: '0',
          cursor: 'pointer',
          pointerEvents: 'none',
          '&:checked + label:after': {
            display: 'inline-block',
          },
          '&:checked + label:before': {
            borderWidth: '2px',
          },
          '&:focus + label:before': {
            borderWidth: '3px',
          },
          '&:focus + label': {
            borderColor: 'brightBlue',
          },
          '&:checked + label': {
            borderColor: 'navy',
          },
        },

        p: {
          mb: 0,
        },
      }}
      {...props}
    />
  );
};
export const SelectWrapper = (props) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '50px',
        borderStyle: 'solid',
        borderColor: 'navy',
        borderRadius: '4px',
        borderWidth: '2px',
        backgroundColor: 'transparent',
        maxWidth: '100%',
        select: {
          color: 'navy',
          border: 'none',
          backgroundColor: 'white',
          borderRadius: '4px',
          width: '100%',
          height: '100%',
          minHeight: '50px',
          padding: '10px',
          fontSize: [2, 3, 4],
          appearance: 'none',
          '&:disabled': {
            opacity: '0.8',
          },
          '&:focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&:-webkit-direct-focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
        },
        svg: {
          color: 'brightBlue',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '15px',
          width: '16px',
          height: 'auto',
          pointerEvents: 'none',
        },
      }}
    >
      {props.children}
      <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
        <title>icon/chevron-down</title>
        <g
          id="icon/chevron-down"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <polygon
            id="Path-Copy"
            fill="currentColor"
            fillRule="nonzero"
            transform="translate(15.666667, 16.000000) rotate(-270.000000) translate(-15.666667, -16.000000) "
            points="9.06714628 1.29851685e-12 5 3.76888889 18.1990408 16 5 28.2311111 9.06714628 32 26.3333333 16"
          ></polygon>
        </g>
      </svg>
    </Box>
  );
};

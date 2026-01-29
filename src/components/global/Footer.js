import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { camelize } from '../../util/helpers';
import { Box, Text, Flex } from 'rebass';
import { MaxContainer, containerInnerStyles } from '../global/Container';
import { LogoFullHorizontal } from '../../styles/logos';
import { ChevronRight } from '../../styles/icons';
import SimpleText from '../modules/SimpleText';
// import { navItems } from '../global/Nav';

export const navItems = [
  {
    title: 'Car Servicing & Repairs',
    url: '#',
    secondLevel: [
      {
        title: 'Car Servicing',
        url: '/car-servicing/',
      },
      {
        title: 'Log Book Service',
        url: '/service/logbook-service/',
      },
      {
        title: 'Essential Service',
        url: '/service/essential-service/',
      },
      {
        title: 'Other Services',
        url: '/other-services/',
      },
    ],
  },
  {
    title: 'Our Locations',
    url: '/service-centres/',
    secondLevel: [],
  },
  {
    title: 'About Us',
    url: '#',
    secondLevel: [
      {
        title: 'About Motorserve',
        url: '/about-motorserve/',
      },
      {
        title: 'Contact us',
        url: '/contact-us/',
      },
      {
        title: 'Careers',
        url: '/careers/',
      },
    ],
  },
  {
    title: 'Book a Service',
    url: '/book-a-service/',
    secondLevel: [],
  },
  {
    title: 'Connect with us',
    url: '#',
    secondLevel: [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/Motorserve-104167044742193',
      },
      {
        title: 'LinkedIn',
        url:
          'https://www.linkedin.com/company/motorserve-pty/?viewAsMember=true',
      },
      {
        title: 'Instagram',
        url: 'https://www.instagram.com/Motorserve/',
      },
    ],
  },
];

const utilItems = [
  {
    title: 'NRMA | Help Hub T&Cs',
    url: '/nrma-i-help-hub-ts-cs/',
  },
  {
    title: 'Terms & Conditions',
    url: '/terms-and-conditions/',
  },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy/',
  },
  {
    title: 'Purchase Order T&Cs',
    url: '/purchase-order-policy/',
  },
];

const FooterWrap = (props) => (
  <Box
    as="footer"
    sx={{
      width: '100%',
      bg: 'navy',
    }}
    {...props}
  />
);

const FooterInner = (props) => (
  <Box
    sx={{
      ...containerInnerStyles,
      position: 'relative',
      maxWidth: '1320px',
      m: '0 auto 20px',
    }}
    {...props}
  />
);

const NavItem = ({ item, index, ...props }) => {
  return (
    <Text
      as="li"
      sx={{
        m: 0,
        p: 0,
        listStyle: 'none',
        width: 'auto',
        flex: ['1 0 100%', '', '1 1 200px', '', '0 1 auto'],
      }}
    >
      <Box
        as={props.children ? 'span' : Link}
        data-tracking={
          props.children
            ? `btn-click:dropdownMenuItem`
            : `link-click:${camelize(item.url)}`
        }
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          pl: [0, '', '', props.children ? 0 : 3, 3],
          pr: [3, 3, 6, 4],
          py: [2, '', 3],
          fontSize: 2,
          fontWeight: 'bold',
          textDecoration: 'none',
          position: 'relative',
          '&:hover, &:focus': {
            textDecoration: !props.children && 'underline',
          },
          '&:active': {
            textDecoration: !props.children && 'underline',
            color: !props.children && 'white60',
          },
        }}
        to={item.url}
      >
        <Box
          sx={{
            width: '12px',
            height: '12px',
            display: props.children ? 'none' : 'flex',
            alignItems: 'center',
            mr: 1,
            color: 'brightBlue',
            svg: { width: '100%', height: 'auto' },
          }}
        >
          <ChevronRight />
        </Box>
        {item.title}
      </Box>
      {props.children && (
        <Box
          as="ul"
          sx={{
            alignItems: 'flex-end',
            ml: [0, '', '', '', 3],
            mb: 2,
          }}
        >
          {props.children}
        </Box>
      )}
    </Text>
  );
};

const SecondaryItem = ({ item }) => {
  const urlRegex = new RegExp(/(https?:\/\/[^\s]+)/g);
  const isExternalUrl = urlRegex.test(item.url);
  return (
    <Text as="li" sx={{ m: 0, p: 0, listStyle: 'none' }}>
      <Box
        as={isExternalUrl ? 'a' : Link}
        sx={{
          color: 'white',
          display: 'inline-block',
          py: '2px',
          textDecoration: 'underline',
          fontSize: 2,
          '&:hover, &:focus': {
            textDecoration: 'underline',
            color: 'white60',
          },
          '&:active': {
            textDecoration: 'none',
            color: 'white',
          },
        }}
        {...(isExternalUrl ? { href: item.url } : { to: item.url })}
        target={isExternalUrl ? '_blank' : '_self'}
        rel={isExternalUrl ? 'noreferrer noopener' : ''}
        data-tracking={`link-click:${camelize(item.title)}`}
      >
        {item.title}
      </Box>
    </Text>
  );
};

const Footer = () => {
  const footerQuery = useStaticQuery(graphql`
    {
      sanityFooterDisclaimer {
        _rawDisclaimerText
      }
    }
  `);
  return (
    <FooterWrap>
      <MaxContainer>
        <FooterInner>
          <Box
            as="nav"
            sx={{
              display: 'flex',
              position: 'relative',
              flexDirection: ['column', '', '', 'row'],
              width: '100%',
              flexWrap: 'wrap',

              '&:after': {
                content: '""',
                width: '100%',
                borderBottom: '1px solid',
                borderColor: 'white60',
                position: 'absolute',
                bottom: '2px',
                left: 0,
              },
            }}
          >
            <Box
              as={Link}
              to="/"
              sx={{
                color: 'white',
                width: ['82px', '', '82px'],
                flex: ['0 0 auto', '', '0 0 82px'],
                height: 'auto',
                display: 'flex',
                pt: 6,
                pb: [3, 2, 2, 5],
                position: 'relative',
                svg: {
                  height: '82px',
                },
              }}
              data-tracking={`link-click:logoFooterHome`}
            >
              <LogoFullHorizontal />
            </Box>
            <Box
              as="ul"
              sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: ['column', '', 'row'],
                width: ['auto', '', '700px', '', 'auto'],
                flex: ['1 1 100%', '', '0 1 auto', '0 1 auto'],
                flexWrap: 'wrap',
                mr: ['', '', '', 0],
                ml: ['', '', '', 'auto'],
                py: [3, '', '', '25px'],
              }}
            >
              {navItems.map((item, index) => (
                <NavItem key={index} item={item} index={index}>
                  {item.secondLevel.length > 0 &&
                    item.secondLevel.map((sItem, sIndex) => (
                      <SecondaryItem item={sItem} key={sIndex}></SecondaryItem>
                    ))}
                </NavItem>
              ))}
            </Box>
          </Box>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box as="ul" sx={{ mt: [4, 4, 4, 6], mr: [6, '', 8] }}>
              {utilItems.map((item, index) => (
                <SecondaryItem key={index} item={item} index={index} />
              ))}
            </Box>
            <Box>
            {footerQuery.sanityFooterDisclaimer && footerQuery.sanityFooterDisclaimer._rawDisclaimerText ? (
              <SimpleText
                sx={{
                  p: {
                    a: {
                      color: 'currentColor',
                      '&:hover, &:focus': {
                        textDecoration: 'underline',
                        color: 'white60',
                      },
                      '&:active': {
                        textDecoration: 'none',
                        color: 'white',
                      },
                    },
                  },
                }}
                simpleText={footerQuery.sanityFooterDisclaimer._rawDisclaimerText}
              />
            ) : (
              <p>No disclaimer text available.</p> // Or any fallback content
            )}
          </Box>

          </Flex>
        </FooterInner>
      </MaxContainer>
    </FooterWrap>
  );
};

export default Footer;

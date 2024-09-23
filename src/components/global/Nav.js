import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { camelize } from '../../util/helpers';
import { RemoveScroll } from 'react-remove-scroll';
import { Box, Text } from 'rebass';
import { MaxContainer, gridFallbackStylesColumn } from './Container';
import Heading from './Heading';
import Button from './Button';
// Logos
import { LogoFull } from '../../styles/logos';
import { Phone, ChevronDown, Hamburger, CloseX } from '../../styles/icons';

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
        title: 'Other Services',
        url: '/other-services/',
      },
    ],
  },
  {
    title: 'Insurance Services',
    url: '/insurance-services/',
    secondLevel: [],
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
];

const NavWrapper = ({ secondLevelOpen, mobileMenuOpen, ...props }) => (
  <Box
    as="header"
    sx={{
      width: '100%',
      bg: 'navy',
      zIndex: '100',
      position: 'fixed',
      top: 0,
      left: 0,
    }}
  >
    <RemoveScroll enabled={mobileMenuOpen}>
      <MaxContainer>
        <Box
          sx={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'space-between',
          }}
          {...props}
        />
      </MaxContainer>
    </RemoveScroll>
  </Box>
);

const NavBar = ({ menuOpen, ...props }) => {
  return (
    <Box
      as="nav"
      sx={{
        height: [
          menuOpen ? 'calc(100% - 56px)' : '0%',
          menuOpen ? 'calc(100% - 56px)' : '0%',
          menuOpen ? 'calc(100% - 76px)' : '0%',
          'auto',
        ],
        display: [menuOpen ? 'flex' : 'none', '', '', 'flex'],
        flexDirection: ['column', '', '', 'row'],
        alignItems: 'center',
        bg: ['white', '', '', 'transparent'],
        position: [menuOpen ? 'fixed' : 'absolute', '', '', 'static'],
        top: ['56px', '', '76px', 'auto'],
        bottom: [menuOpen ? '0' : 'auto', '', '', 'auto'],
        flex: '1 0 auto',
        width: ['100%', '', '', 'auto'],
      }}
    >
      <Box
        as="ul"
        sx={{
          height: 'auto',
          display: 'flex',
          flexDirection: ['column', '', '', 'row'],
          m: ['30px 0 30px 10px', '', 0],
          px: ['', '', '', 2],
          width: ['100%', '', '', 'auto'],
          alignItems: 'center',
          flex: '1 0 auto',
        }}
      >
        {props.children}
      </Box>
      <Button
        variant="navy"
        hasIcon="true"
        sx={{
          minWidth: '160px',
          px: [2],
          alignSelf: 'stretch',
          ml: ['', '', '', 'auto'],
          borderRadius: 0,
          fontSize: [2, 2, 3],
          svg: {
            width: '14px',
            height: '14px',
            mr: 2,
            mt: '-2px',
          },
        }}
        as="a"
        href="tel:792 563"
        data-tracking={`link-click:Phone`}
      >
        <Phone />792 563
      </Button>
      {!props.hideCTA && (
        <Button
          variant="lightBlue"
          sx={{
            minWidth: ['', '', '160px', '160px'],
            px: [2],
            alignSelf: 'stretch',
            borderRadius: 0,
            textTransform: 'none',
            fontSize: [2, 2, 3],
          }}
          to="/book-a-service/"
          data-tracking={`link-click:bookAService`}
        >
          Book a Service
        </Button>
      )}
    </Box>
  );
};

const NavItem = ({ item, index, activeMenu, setActiveMenu, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Text
      as="li"
      sx={{ m: 0, p: 0, listStyle: 'none', width: ['100%', '', '', 'auto'] }}
    >
      <Box
        as={props.children ? 'button' : Link}
        data-tracking={
          props.children
            ? `btn-click:${camelize(item.title)}OpenDropDownMenu`
            : `link-click:${camelize(item.url)}`
        }
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: [
            open && activeMenu === index ? 'navy80' : 'navy',
            '',
            '',
            'white',
          ],
          height: ['auto', '', '', '50px'],
          px: [2, '', 3],
          py: [2, '', 3],
          fontSize: [3, '', '', 2],
          fontWeight: 'body',
          textDecoration: 'none',
          width: ['100%', '', '', 'auto'],
          border: 'none',
          borderBottom: ['2px solid', '', '', 'none'],
          borderColor: 'lightGrey',
          position: 'relative',
          cursor: 'pointer',
          bg: 'transparent',
          svg: {
            color: [
              'navy',
              '',
              '',
              open && activeMenu === index ? 'white' : 'white60',
            ],
            transform:
              open && activeMenu === index ? 'rotate(180deg)' : 'rotate(0deg)',
          },

          '&:after': {
            content: '""',
            position: 'absolute',
            width:
              open && activeMenu === index
                ? ['0px', '', '', 'calc(100% - 30px)']
                : '0px',
            height: '3px',
            bg: 'brightBlue',
            bottom: '5px',
            left: [2, '', 3],
            transition: 'width 0.2s ease',
          },
          '&:hover': {
            textDecoration: 'none',
            color: [
              'navy',
              '',
              '',
              open && activeMenu === index ? 'white' : 'white60',
            ],
            svg: {
              color: ['navy', '', '', 'white'],
            },
            '&:after': { width: ['0px', '', '', 'calc(100% - 30px)'] },
          },
          '&:active': {
            textDecoration: 'none',
            color: ['navy', '', '', 'white'],
            svg: {
              color: ['navy', '', '', 'white'],
            },
            '&:after': { width: ['0px', '', '', 'calc(100% - 30px)'] },
          },
        }}
        to={item.url}
        onClick={() => {
          props.children && setOpen(activeMenu === index ? !open : true);
          setActiveMenu(index);
        }}
      >
        {item.title}
        {props.children && (
          <Box
            sx={{
              width: '12px',
              height: 'auto',
              display: 'flex',
              alignItems: 'center',
              ml: 2,
              svg: { width: '100%', height: 'auto' },
            }}
          >
            <ChevronDown />
          </Box>
        )}
      </Box>
      {props.children && (
        <DropdownMenu open={open && activeMenu === index} title={item.title}>
          {props.children}
        </DropdownMenu>
      )}
      {props.children && (
        <Box
          sx={{
            display: [
              'none',
              '',
              '',
              open && activeMenu === index ? 'inline-block' : 'none',
            ],
            position: 'absolute',
            top: '100px',
            left: '0px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              ...gridFallbackStylesColumn,
              alignItems: 'flex-end',
            }}
          >
            <Box
              as="button"
              sx={{
                color: 'navy',
                bg: 'transparent',
                border: 'none',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: '10',
                cursor: 'pointer',
                '&:hover': {
                  bg: 'navy10',
                },
                svg: { width: '17px', height: '17px', pointerEvents: 'none' },
              }}
              onClick={() => setOpen(false)}
              data-tracking={`btn-click:${camelize(
                item.title
              )}CloseDropDownMenu`}
            >
              <CloseX />
            </Box>
          </Box>
        </Box>
      )}
    </Text>
  );
};

const DropDownItem = ({ item }) => {
  return (
    <Text as="li" sx={{ m: 0, p: 0, listStyle: 'none' }}>
      <Box
        as={Link}
        sx={{
          color: 'navy',
          display: 'inline-block',
          py: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontSize: [3, '', '', 2],
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
        to={item.url}
        data-tracking={`link-click:${camelize(item.url)}`}
      >
        {item.title}
      </Box>
    </Text>
  );
};

const DropdownMenu = ({ open, title, ...props }) => {
  const ref = useRef(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);

  useEffect(() => {
    setDropdownHeight(ref.current.clientHeight + 'px');
  }, [ref]);

  return (
    <Box
      sx={{
        position: ['relative', '', '', 'absolute'],
        top: ['', '', '', '76px'],
        left: ['', '', '', '0px'],
        maxWidth: '1920px',
        width: '100%',
        overflow: 'hidden',
        transition: open
          ? 'height 0.3s 0.2s ease-in-out'
          : 'height 0.3s 0.5s ease-in-out',
        zIndex: open ? '10' : '0',
        height: open ? ['auto', '', '', dropdownHeight] : '0px',
        '&:before': {
          display: ['none', '', '', 'inline-block'],
          content: '""',
          position: 'absolute',
          width: '100vw',
          maxWidth: '1920px',
          top: '0',
          left: '0',
          bg: 'lightGrey',
          height: '100%',
          bottom: '0',
        },
      }}
    >
      <Box
        ref={ref}
        sx={{
          ...gridFallbackStylesColumn,
          pb: ['', '', '', 4],
          pt: ['', '', '', 6],
          alignItems: 'flex-start',
          transition: 'opacity 0.3s 0s ease-in-out',
          opacity: open ? '1' : '0',
        }}
      >
        <Heading.H2
          as="span"
          sx={{
            display: ['none', '', '', 'inline-block'],
            position: 'relative',
            pb: 3,
            mb: 3,
            ml: 3,
            '&:before': {
              position: 'absolute',
              content: '""',
              bottom: 0,
              width: '18px',
              height: '3px',
              left: 0,
              bg: 'brightBlue',
            },
          }}
        >
          {title}
        </Heading.H2>
        <Box
          as="ul"
          sx={{
            display: 'flex',
            position: 'relative',
            flexDirection: 'column',
            m: 0,
            px: [2, '', 3],
            pb: 3,
            pt: [3, '', '', 0],
            width: '100%',
            gridColumn: '1 / -1',
          }}
          {...props}
        />
      </Box>
    </Box>
  );
};

const Nav = ({ hideCTA }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <NavWrapper mobileMenuOpen={mobileMenuOpen}>
      <Box
        as={Link}
        to="/"
        sx={{
          color: 'white',
          width: ['151px', '', '208px'],
          flex: ['0 0 151px', '', '0 0 208px'],
          height: 'auto',
          display: 'flex',
          px: [4, '', 5],
          py: [4, '', 5],
          position: 'relative',
          '&:after': {
            content: '""',
            width: '1px',
            height: '12px',
            position: 'absolute',
            top: '34px',
            right: '0px',
            bg: 'white',
            opacity: 0.2,
            display: ['none', '', 'inline-block'],
          },
        }}
        data-tracking={`link-click:logoNavHome`}
      >
        <LogoFull />
      </Box>
      <Button
        variant="navy"
        hasIcon="true"
        sx={{
          display: ['flex', '', '', 'none'],
          minWidth: '120px',
          px: [0, 2],
          alignSelf: 'stretch',
          mr: 'auto',
          ml: [0, 3],
          borderRadius: 0,
          textTransform: 'none',
          fontSize: [2, 2, 3],
          svg: {
            width: '14px',
            mr: 2,
            mt: '-2px',
            height: 'auto',
          },
        }}
        as="a"
        href="tel:1300 869 585"
        data-tracking={`link-click:Phone`}
      >
        <Phone /> 1300 869 585
      </Button>
      <Button
        variant="navy"
        onClick={(event) => {
          event.preventDefault();
          setMobileMenuOpen(!mobileMenuOpen);
        }}
        hasIcon="true"
        sx={{
          display: ['flex', '', '', 'none'],
          minWidth: '90px',
          fontWeight: 'bold',
          px: [2],
          alignSelf: 'stretch',
          borderRadius: 0,
          textTransform: 'none',
          svg: {
            width: '14px',
            ml: 2,
            mt: '-2px',
          },
        }}
        data-tracking={`btn-click:toggleNav`}
      >
        {mobileMenuOpen ? (
          <>
            Close <CloseX />
          </>
        ) : (
          <>
            Menu <Hamburger />
          </>
        )}
      </Button>
      <NavBar menuOpen={mobileMenuOpen} hideCTA={hideCTA}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            index={index}
            activeMenu={activeMenu}
            setActiveMenu={() => setActiveMenu(index)}
          >
            {item.secondLevel.length > 0 &&
              item.secondLevel.map((sItem, sIndex) => (
                <DropDownItem item={sItem} key={sIndex}></DropDownItem>
              ))}
          </NavItem>
        ))}
      </NavBar>
    </NavWrapper>
  );
};

export default Nav;

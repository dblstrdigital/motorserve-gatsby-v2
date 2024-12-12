import React, { Component } from 'react';
import { Box, Flex } from 'rebass';

// components
import CentreLocatorList from './CentreLocatorList';
import CentreLocatorMap from './CentreLocatorMap';
import CentreLocatorServiceFilter from './CentreLocatorServiceFilter';
import Heading from '@components/global/Heading';
import Button from '@components/global/Button';

// themes
import { theme } from '@styles/theme';

// button style
const buttonStyle = {
  cursor: 'pointer',
  minWidth: 'auto',
  borderColor: 'navy',
  px: 3,
  py: '3px',
  mr: 2,
  fontSize: [0],
  my: 1,
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',
  '&:hover': {
    path: {
      fill: theme.colors.navy,
    },
  },
  '&:focus, &:active': {
    outline: 0,
    boxShadow: `inset 0px 0px 0px 1px ${theme.colors.navy}`,
  },
  '&.active': {
    background: theme.colors.navy,
    color: theme.colors.white,
    path: {
      fill: theme.colors.white,
    },
  },
};

class CentreLocator extends Component {
  state = {
    states: ['nsw', 'vic', 'qld'],
    selectedState: null,
    selectedService: null,
    selectedMarkerId: null,
    centres: this.props.centres,
    filtered: [],
  };

  componentDidMount() {
    const queryState = this.getUrlParams('state');
    const queryService = this.getUrlParams('service');

    this.setState(
      {
        selectedState: queryState || 'nsw',
        selectedService: queryService || 'servicing',
      },
      this.filterCollection
    );
  }

  getUrlParams = (query) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(query);
  };

  setUrlParams = (query, value) => {
    const params = new URLSearchParams(window.location.search);
    params.set(query, value);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${params}`
    );
  };

  filterByState = (state) => {
    this.setUrlParams('state', state);
    this.setState({ selectedState: state }, this.filterCollection);
  };

  filterByService = (serviceType) => {
    this.setUrlParams('service', serviceType);
    this.setState({ selectedService: serviceType }, this.filterCollection);
  };

  filterCollection = () => {
    const filtered = this.state.centres.filter((c) => {
      return (
        // return every centres matching the currently selected state
        // the default value behind NSW
        c.state === this.state.selectedState &&
        // if a service type has been selected filter by that
        (this.state.selectedService === 'all'
          ? c.locationServices
          : c.locationServices[this.state.selectedService])
      );
    });
    this.setState({
      filtered: filtered,
      selectedMarkerId: filtered.length === 1 ? filtered[0].id : null, // if there is only one result, we pre-select the item
    });
  };

  onCentreSelect = (id) => {
    this.setState({ selectedMarkerId: id });
  };

  render() {
    return (
      <Box as="section" className="centre-locator">
        <Flex
          sx={{
            flexDirection: ['column', 'column', 'row', ''],
            alignItems: ['start', 'start', 'center', ''],
            my: 4,
          }}
        >
          <Heading.H4 mr={[2]}>Choose a location:</Heading.H4>
          <Box>
            {this.state.states.map((state) => (
              <Button
                variant="outlined"
                key={state}
                as="button"
                className={this.state.selectedState === state ? 'active' : null}
                data-tracking={`btn-click:filterByState-${state.toUpperCase()}`}
                sx={{
                  ...buttonStyle,
                }}
                onClick={() => this.filterByState(state)}
              >
                {state}
              </Button>
            ))}
          </Box>
        </Flex>

        <CentreLocatorServiceFilter
          onChange={this.filterByService}
          selected={this.state.selectedService}
          style={buttonStyle}
        />

        <Flex sx={{ flexDirection: ['column', 'column', 'row', ''] }}>
          <CentreLocatorList
            centres={this.state.filtered}
            selected={this.state.selectedMarkerId}
            service={this.state.selectedService}
            onSelect={this.onCentreSelect}
          />
          <CentreLocatorMap
            centres={this.state.filtered}
            selected={this.state.selectedMarkerId}
            state={this.state.selectedState}
            onSelect={this.onCentreSelect}
          />
        </Flex>
      </Box>
    );
  }
}

export default CentreLocator;

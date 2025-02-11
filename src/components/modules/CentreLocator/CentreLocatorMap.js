import React from 'react';
import { Box, Flex } from 'rebass';
import { Helmet } from 'react-helmet';
import ReactDOMServer from 'react-dom/server';
import MarkerClusterer from '@googlemaps/markerclustererplus';

// map theme
import { MAP_STYLES, ICON_STYLES } from './theme/motorserve';
import { CLUSTER_STYLES } from './theme/cluster';

import CentreLocatorInfoWindow from './CentreLocatorInfoWindow';
import CentreLocatorMapControls from './CentreLocatorMapControls';
import Loader from '@components/global/Loader';

const MAX_ZOOM = 11;
const NO_RESULT_POSITION = {
  australia: { position: { lat: -25.363, lng: 131.044 }, zoom: 4 },
  nsw: { position: { lat: -32.7324135, lng: 145.5602378 }, zoom: 5.5 },
  act: { position: { lat: -35.477595, lng: 148.961469 }, zoom: 6 },
  vic: { position: { lat: -36.831726, lng: 144.296055 }, zoom: 5.9 },
  qld: { position: { lat: -22.161272, lng: 145.008903 }, zoom: 4.8 },
};

class CentreLocatorMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.markers = [];
    this.clusterer = null;
    this.infoWindow = null;
  }

  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.initMap = this.initMap;
  }

  componentDidUpdate(prevProps) {
    if (this.state.isLoading) return;
    if (prevProps.selected !== this.props.selected) this.zoomToSelectedMarker();
    // check if we need to update anything first
    if (prevProps.centres !== this.props.centres) this.updateMarkers();
  }

  zoomToSelectedMarker = () => {
    const selectedMarker = this.markers.find(
      (m) => m.data.id === this.props.selected
    );
    if (selectedMarker) {
      this.setMarkerAsSelected(selectedMarker);
      this.zoomAndPanToMarker(selectedMarker);
    }
  };

  updateMarkers = () => {
    // clear existing markers
    this.clusterer.clearMarkers();
    this.markers = [];
    // draw the new markers
    this.createMarkers(this.props.centres);
  };

  setMarkerAsSelected = (marker) => {
    // set dom and content for info window
    // we use ReactDOMServer to return the react component
    // as string allowing us to have the same flexibility for  (not sure how legal this is)
    // this component as for the others (rebass, theme...)
    this.infoWindow.setContent(
      ReactDOMServer.renderToString(
        <CentreLocatorInfoWindow data={marker.data} />
      )
    );
    this.infoWindow.open(this.map, marker);
    // reset markers icons (so we don't end up
    // with 2 active markers)
    this.markers.map((m) => m.setIcon(ICON_STYLES.default));
    // set the currently selected marker to active
    marker.setIcon(ICON_STYLES.selected);
  };

  zoomAndPanToMarker = (marker) => {
    // centre map on selected marker
    this.map.panTo(marker.position);
    this.map.setZoom(MAX_ZOOM);
  };

  initMap = () => {
    this.map = new window.google.maps.Map(
      document.getElementById('google-map'),
      {
        maxZoom: MAX_ZOOM + 3,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false,
        draggable: true,
        gestureHandling: 'cooperative',
        styles: MAP_STYLES,
      }
    );

    // bind tilesloaded event to listen when map tiles are fully loaded
    // and hide loader component
    window.google.maps.event.addListenerOnce(this.map, 'tilesloaded', () =>
      this.setState({ isLoading: false })
    );

    // loop through each centre and draw on map
    this.createMarkers(this.props.centres);
  };

  attachEventListener = (index, marker) => {
    new window.google.maps.event.addListener(marker, 'click', () => {
      // called parent prop to update list item
      this.props.onSelect(index);
      // populate info window, pan map to, and update icon
      this.setMarkerAsSelected(marker);
    });
  };

  noResult = () => {
    // retrieve currently seleted state to zoom to it
    // fallback to entire Australia
    const currentState = NO_RESULT_POSITION[this.props.state || 'australia'];
    this.map.setCenter(currentState.position);
    this.map.setZoom(currentState.zoom);
  };

  createMarkers = (centres) => {
    // if there is no matching centres, we display a pin at
    // the center of australia and zoom to see the entire country
    // this is pending UX and design behavior approval
    if (!centres.length) {
      this.noResult();
      return;
    }
    // loop through all centres and create corresponding marker
    for (let index = 0; index < centres.length; index++) {
      const markerData = centres[index];
      // retrieve marker location and create position object
      const { lat, lng } = markerData.location;
      const position = new window.google.maps.LatLng(lat, lng);
      // create marker
      const marker = new window.google.maps.Marker({
        map: this.map,
        position: position,
        icon: ICON_STYLES.default,
        data: markerData,
      });
      // store marker
      this.markers.push(marker);
      // attach click event on marker
      this.attachEventListener(markerData.id, marker);
    }
    // create cluster
    this.clusterer = new MarkerClusterer(this.map, this.markers, {
      maxZoom: MAX_ZOOM - 1,
      gridSize: 20,
      styles: CLUSTER_STYLES,
    });
    // create info window (shared across markers)
    this.infoWindow = new window.google.maps.InfoWindow({});
    // fits the map to the bound of the markers
    this.clusterer.fitMapToMarkers(20);
    // if there is only one centre is the list we pre-select it
    if (centres.length === 1) this.setMarkerAsSelected(this.markers[0]);
  };

  onZoomIn = () => {
    this.map.setZoom(this.map.getZoom() + 1);
  };

  onZoomOut = () => {
    this.map.setZoom(this.map.getZoom() - 1);
  };

  render() {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        sx={{
          position: 'relative',
          width: ['100%', '100%', '70%', ''],
          height: ['300px', '300px', '430px', ''],
        }}
      >
        <Helmet>
          <script
            async={true}
            defer={true}
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBOBF4nyquXbWZtPqV5UYnjAn5vgbRj9CU&callback=initMap`}
          />
        </Helmet>
        <Box id="google-map" sx={{ width: '100%', height: '100%' }} />
        {this.state.isLoading && <Loader />}

        {/* map controls  */}
        <CentreLocatorMapControls
          onZoomIn={this.onZoomIn}
          onZoomOut={this.onZoomOut}
        />
      </Flex>
    );
  }
}

export default CentreLocatorMap;

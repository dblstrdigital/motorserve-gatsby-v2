import React from 'react';
import ReactPlayer from 'react-player';
import { Box } from 'rebass';

// React Player plugin - supports many video formats & sources, could be handy if source type changes.
// https://www.npmjs.com/package/react-player

const Video = ({ url, options = null }) => {
  return (
    <Box
      mb={3}
      sx={{
        paddingTop: '56.25%',
        position: 'relative',
        '.react-player': {
          position: 'absolute',
          top: 0,
          left: 0,
        },
      }}
    >
      <ReactPlayer
        controls={true}
        url={url}
        {...options}
        className="react-player"
        width="100%"
        height="100%"
      />
    </Box>
  );
};

export default Video;

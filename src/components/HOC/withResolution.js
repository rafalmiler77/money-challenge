import React from 'react';

const withResolution = resolution => Component => props => {
  return (
    <Component {...props} {...resolution} />
  )
}

export default withResolution;
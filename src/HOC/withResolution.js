import React from 'react';
import ResolutionProvider from './ResolutionProvider';

const withResolution = () => Component => props => {
  return (
    <ResolutionProvider>
      {
        (resolution) => <Component {...props} {...resolution} />
      }
    </ResolutionProvider>
  )
}

export default withResolution;
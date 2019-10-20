import React from 'react';

const withSthElse = config => Component => props => {
  console.log('config', config)
  return (
    <Component {...props} {...config} />
  )
}

export default withSthElse;
import React from 'react';

const MOBILE = 768;
const DESKTOP = 1024;

class ResolutionProvider extends React.Component {
  state = {
    isMobile: false,
    isDesktop: true
  };

  componentDidMount = () => {
    const body = document.body;
    const rect = body.getBoundingClientRect();
    const width = rect.width;
    const isMobile = width < MOBILE;
    const isDesktop = width >= DESKTOP;
    this.setState({
      isMobile,
      isDesktop
    })
  }

  render() {
    const config = {
      isMobile: this.state.isMobile,
      isDesktop: this.state.isDesktop,
    }
    return this.props.children(config)
  }
}

export default ResolutionProvider;

import React from 'react';
import fetch from 'unfetch';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

const isBrowser = typeof window !== 'undefined';
const SvgInjector = isBrowser ? require('svg-injector') : null;

/* Just a wrapper around ReactSVG to disable re rendering it */
class SVGLoader extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    onSVGReady: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      el: ''
    };
  }

  componentDidMount() {
    const svgEl = document.createElement('svg');
    const elStr = ReactDOMServer.renderToStaticMarkup(
      <img src={this.props.path} className="inject-me" />
    );
    svgEl.innerHTML = elStr;
    const injectEl = document.querySelector('.inject-me');
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.path !== this.props.path;
  }

  render() {
    return (
      <svg
        className={this.props.className}
        ref={this.onSVGReady}
        style={this.props.style}
        path={this.props.path}
        dangerouslySetInnerHTML={{ __html: this.state.el }}
      />
    );
  }
}
SVGLoader.defaultProps = {
  onSVGReady: () => {}
};

export default SVGLoader;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withShowing = () => (WrappedComponent) =>
  class Wrapper extends Component {
    static propTypes = {
      children: PropTypes.node,
    };
    static defaultProps = {
      children: null,
    };
    state = {
      shown: false,
    };
    componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    setRef = (node) => {
      this.node = node;
    };

    handleOutsideClick = (e) => {
      if (!this.node.contains(e.target) && this.state.shown) {
        this.setState({ shown: false });
      }
    };

    toggleMenu = () => {
      this.setState({ shown: !this.state.shown });
    };

    render() {
      return (
        <div ref={this.setRef} onClick={this.toggleMenu}>
          <WrappedComponent {...this.props} shown={this.state.shown}>
            {this.props.children}
          </WrappedComponent>
        </div>
      );
    }
  };

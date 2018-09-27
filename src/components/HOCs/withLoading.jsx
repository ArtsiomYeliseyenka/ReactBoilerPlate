import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withLoading = () => (WrappedComponent) =>
  class Wrapper extends Component {
    static propTypes = {
      children: PropTypes.node,
    };
    static defaultProps = {
      children: null,
    };
    state = {
      loading: true,
    };

    handleLoading = (value) => {
      value !== this.state.loading && this.setState({ loading: value });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          loading={this.state.loading}
          setLoading={this.handleLoading}
        >
          {this.props.children}
        </WrappedComponent>
      );
    }
  };

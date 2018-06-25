import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './containerWithTabs.scss';

const cx = classNames.bind(styles);

export class ContainerWithTabs extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
  };
  static defaultProps = {
    data: [],
  };

  state = {
    active: 0,
  };

  tabClickHandler = (e) => {
    const id = +e.currentTarget.dataset.id;
    if (this.state.active !== id) {
      this.setState({ active: id });
    }
  };

  render() {
    return (
      <div className={cx('container-with-tabs')}>
        <div className={cx('tabs-wrapper')}>
          {this.props.data.length
            ? this.props.data.map((item, id) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={id}
                  data-id={id}
                  className={cx({ tab: true, active: this.state.active === id })}
                  onClick={this.tabClickHandler}
                >
                  {item.name}
                </div>
              ))
            : null}
        </div>
        <div className={cx('content-wrapper')}>
          {this.props.data.length ? this.props.data[this.state.active].content : null}
        </div>
      </div>
    );
  }
}

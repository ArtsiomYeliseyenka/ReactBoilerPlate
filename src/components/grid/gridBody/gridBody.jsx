import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { ScrollWrapper } from 'components/scrollWrapper';
import { SpinningPreloader } from 'components/preloaders/spinningPreloader';
import { NoItemsView } from './noItemsView';
import { GridRow } from './gridRow';
import styles from './gridBody.scss';

const cx = classNames.bind(styles);

export class GridBody extends Component {
  static propTypes = {
    data: PropTypes.object,
    expandedRows: PropTypes.array,
    withScroll: PropTypes.bool,
    maxScrollHeight: PropTypes.number,
    loading: PropTypes.bool,
    selectable: PropTypes.bool,
    onSelect: PropTypes.func,
    onExpand: PropTypes.func,
    noItemsText: PropTypes.object,
  };
  static defaultProps = {
    data: {},
    expandedRows: [],
    withScroll: false,
    maxScrollHeight: 200,
    loading: false,
    selectable: false,
    onSelect: () => {},
    onExpand: () => {},
    noItemsText: {},
  };

  state = {
    selected: '',
  };

  componentWillMount() {
    const { selectable, data } = this.props;
    selectable && data.items.length && this.onSelect(data.items[0].id);
  }

  onSelect = (id) => {
    if (this.state.selected !== id) {
      this.setState({ selected: id });
      this.props.onSelect(id);
    }
    return id;
  };

  render() {
    const {
      data,
      loading,
      withScroll,
      maxScrollHeight,
      noItemsText,
      onExpand,
      expandedRows,
      ...rest
    } = this.props;
    return loading ? (
      <div className={cx('preloader-block')}>
        <SpinningPreloader />
      </div>
    ) : (
      <Fragment>
        {data.items.length ? (
          <ScrollWrapper
            disabled={!withScroll}
            autoHeight
            autoHeightMax={maxScrollHeight}
            hideTracksWhenNotNeeded
          >
            {data.items.map((rowData) => (
              <GridRow
                {...rest}
                key={rowData.id}
                data={rowData}
                meta={data.meta}
                selected={rowData.id === this.state.selected}
                onSelect={this.onSelect}
                onExpand={() => {
                  onExpand(rowData.id);
                }}
                expanded={!!expandedRows.find((id) => id === rowData.id)}
              />
            ))}
          </ScrollWrapper>
        ) : (
          <NoItemsView text={noItemsText} />
        )}
      </Fragment>
    );
  }
}

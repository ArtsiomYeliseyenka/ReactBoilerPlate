import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { columnPropTypes } from 'components/grid/propTypes';
import { ALIGN_LEFT } from 'components/grid/constants';
import styles from './gridCell.scss';

const cx = classNames.bind(styles);

const TextCell = ({ className, value }) => (
  <div className={cx(className, 'text-cell')}>
    <span>{value}</span>
  </div>
);
TextCell.propTypes = {
  className: PropTypes.string,
  value: PropTypes.any,
};
TextCell.defaultProps = {
  className: '',
  value: '',
};

export class GridCell extends PureComponent {
  static propTypes = {
    ...columnPropTypes,
    component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    value: PropTypes.object,
    refFunction: PropTypes.func,
  };

  static defaultProps = {
    component: TextCell,
    value: {},
    align: ALIGN_LEFT,
    formatter: (value) => value,
    title: {},
    refFunction: () => {},
  };

  render() {
    const { component, refFunction, value, align, formatter, title, customProps } = this.props;
    const CellComponent = component;
    return (
      <CellComponent
        className={cx('grid-cell', { [`align-${align}`]: align })}
        refFunction={refFunction}
        title={title}
        value={formatter(value)}
        customProps={customProps}
      />
    );
  }
}

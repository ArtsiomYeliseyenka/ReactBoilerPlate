import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { NOT_FOUND } from 'redux-first-router';
import { ModalContainer } from 'components/modal';
import { pageNames } from 'controllers/pages/constants';
import { pageSelector } from 'controllers/pages';
import { LocalizationSwitcher } from 'components/localization/localizationSwitcher';
import { ScreenLock } from 'components/screenLock';
import { Notifications } from 'components/notification';

import { AppLayout } from 'layouts/appLayout';
import { EmptyLayout } from 'layouts/emptyLayout';

import { NotFoundPage } from 'pages/outside/notFoundPage';
import { HomePage } from 'pages/inside/homePage';

import styles from './pageSwitcher.scss';

const pageRendering = {
  [NOT_FOUND]: { component: NotFoundPage, layout: EmptyLayout },
  HOME_PAGE: { component: HomePage, layout: AppLayout },
};

Object.keys(pageNames).forEach((page) => {
  console.log(page);
  if (!pageRendering[page]) {
    throw new Error(`Rendering for '$page' was not defined.`);
  }
});

class PageSwitcher extends React.PureComponent {
  static propTypes = { page: PropTypes.string };
  static defaultProps = { page: undefined };

  render() {
    const { page } = this.props;

    if (!page) return null;

    const { component: PageComponent, layout: Layout } = pageRendering[page];
    if (!PageComponent) throw new Error(`Page $page does not exist`);
    if (!Layout) throw new Error(`Page $page is missing layout`);

    const FullPage = () => (
      <div className={styles.pageSwitcher}>
        <Layout>
          <LocalizationSwitcher />
          <PageComponent />
        </Layout>
        <ModalContainer />
        <Notifications />
        <ScreenLock />
      </div>
    );
    return <FullPage />;
  }
}

export default connect((state) => ({ page: pageSelector(state) }))(PageSwitcher);

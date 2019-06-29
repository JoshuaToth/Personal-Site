import React from 'react';

import Layout from '../components/default-components/layout';
import SEO from '../components/default-components/seo';

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <SEO title='404: Not found' />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
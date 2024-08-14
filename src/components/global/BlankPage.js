import React from 'react';
// Components
import Layout from './Layout';
import Container from './Container';

const Page = ({ title, children }) => {
  return (
    <Layout title={title}>
      <Container>
        {children}
      </Container>
    </Layout>
  );
};

export default Page;

import React from 'react';
// Components
import Layout from './Layout';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';

const Page = ({ title, hideCTA, children }) => {
  return (
    <Layout title={title}>
      <Container>
        <Nav hideCTA={hideCTA} />
        {children}
        <Footer />
      </Container>
    </Layout>
  );
};

export default Page;

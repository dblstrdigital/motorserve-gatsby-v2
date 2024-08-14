/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

const SEO = ({ title, description, children }) => (
  <>
    <title>{title || ''}</title>
    <meta name={`description`} content={description || ''} />
    <meta name={`og:title`} content={title || ''} />
    <meta name={`og:description`} content={description || ''} />
    <meta name={`og:type`} content={`website`} />
    {children}
  </>
);

export default SEO;

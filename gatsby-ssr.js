import React from 'react';
import { ORIGINAL_SCRIPT_SRC } from './src/util/load-script';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      key="google-analytics-link"
      id="google-analytics-link"
      src="https://www.googletagmanager.com/gtag/js?id=G-NC5PCJ1F29"
      async
    />,
    <script
      key="google-analytics-code"
      id="google-analytics-code"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NC5PCJ1F29');`,
      }}
    />,
    <script
      key="iag-analytics"
      id="iag-analytics"
      dangerouslySetInnerHTML={{
        __html: `window.iagDataLayer = window.iagDataLayer || [];
        window.load = window.load || {};
        window.load.config = window.load.config || {};
        window.load.config.dataLayerName = 'iagDataLayer';
        window.load.config.brand = 'motorserve'
        window.load.config.apptype = 'brochureware'; 
        window.load.config.appname = 'motorserve-retail-web';  
        `,
      }}
    />,
    <script key="load" src={process.env.GATSBY_LOAD_URL}></script>,
    // <script
    //   id="podium-widget"
    //   key="podium-widget"
    //   src="https://connect.podium.com/widget.js#ORG_TOKEN=a166afcb-0f12-4671-bf28-930da28e125d"
    //   data-organization-api-token="a166afcb-0f12-4671-bf28-930da28e125d"
    // />,
    <script
      key="hotjar"
      dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5125301,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      }}
    />,
<script
      key="meta-pixel"
      id="meta-pixel"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1436834763631890'); 
          fbq('track', 'PageView');
        `,
      }}
    />,
  ]);

  setPostBodyComponents([
    <script
      id="dynamic-phone-number"
      key="dynamic-phone-number"
      src={ORIGINAL_SCRIPT_SRC}
      defer
    />,
    // <script
    //   id="podium-widget"
    //   key="podium-widget"
    //   src="https://connect.podium.com/widget.js#ORG_TOKEN=a166afcb-0f12-4671-bf28-930da28e125d"
    //   data-organization-api-token="a166afcb-0f12-4671-bf28-930da28e125d"
    // />,
  ]);
};

import React from 'react';
import {
  FooterContainer,
  RouteSection,
  RouteContainer,
  Route,
  FooterInfo,
} from './styles';
import routes from '../../routes';

const Footer = () => (
  <FooterContainer>
    <RouteSection noPad>
      <RouteContainer>
        {
          routes.map((link, index) => (
            <Route 
              to={link.route}
              key={index}
            >
              {link.title}
            </Route>
          ))
        }
      </RouteContainer>
    </RouteSection>
    <FooterInfo>
      <div>
        <h3>
          總公司：臺北市松山區民生東路5段168號　客服專線：02-2762-2100　傳真：02-2760-7630
        </h3>
        <h3>
          樺瑩企業股份有限公司 © 2014 Taiwan Hwa-in Ent. Co., Ltd. All Rights Reserved.
        </h3>
      </div>
      <div>
        <a href="http://www.eztrust.com.tw/html/about/index.aspx">網站設計</a> : <a href="http://www.eztrust.com.tw/">藝誠網頁設計</a>
      </div>
    </FooterInfo>
  </FooterContainer>
);

export default Footer;
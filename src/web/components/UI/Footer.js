import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => (
  <footer className="mt-5">
    <Row>
      <Col sm="12" className="text-left pt-3">
        <p>
          © 2020
          {' '}
          <a target="_blank" rel="noopener noreferrer" href="http://ssipr-rakyat-web-dev.ap-southeast-1.elasticbeanstalk.com/">
            SSIPR
          </a>
          {' '}
          &nbsp; | &nbsp; Hak Cipta Terpelihara.
          .
        </p>
      </Col>
    </Row>
  </footer>
);

export default Footer;

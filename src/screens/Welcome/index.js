import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// image assets
import img_study from '../../assets/images/vectors/studying.png';

export class Welcome extends Component {
  render() {
    return (
      <div>
        <Row type="flex" align="middle" style={{ height: '100vh' }}>
          <Col span={12}>
            <Row type="flex" justify="center">
              <Row>
                <div className="welcome-text">
                  Electronic Instructional Material
                </div>
                <Link to="/home">
                  <Button type="primary">Get Started</Button>
                </Link>
              </Row>
            </Row>
          </Col>
          <Col span={12}>
            <img src={img_study} alt="" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Welcome;

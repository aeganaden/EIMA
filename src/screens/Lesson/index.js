import React, { Component } from 'react';
import Layout from '@/layouts/App';
import svg_learning from '../../assets/images/vectors/learning.svg';
import { Row, Col, List, Button, Icon } from 'antd';
import styles from './Lesson.scss';

export class Lesson extends Component {
  render() {
    const { selectedLesson } = this.props.location.state;
    const { image, padding } = styles;
    return (
      <Layout logo_svg={svg_learning}>
        <Row type="flex" justify="space-between">
          <Col span={6} className={padding}>
            <Row type="flex" justify="center">
              <div className={image}>
                <img src={selectedLesson.img} alt="" />
              </div>
            </Row>
          </Col>
          <Col span={18}>
            <Row type="flex" style={{ height: '100%' }} align="middle">
              <div>
                <div style={{ fontSize: '36px' }}>{selectedLesson.title}</div>
                {selectedLesson.description}
              </div>
            </Row>
          </Col>
        </Row>
        <List
          className={padding}
          itemLayout="horizontal"
          dataSource={selectedLesson.outcomes}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description={
                  <div>
                    <ul>
                      {item.outline.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                }
              />
              <div>
                {' '}
                <Button type="link">
                  View <Icon type="right" />
                </Button>
              </div>
            </List.Item>
          )}
        />
      </Layout>
    );
  }
}

export default Lesson;

// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Card, Icon, Divider, Modal } from 'antd';
// Styles
import styles from './Home.scss';
// Layouts
import Layout from '@/layouts/App';
// Image assets
import svg_learning from '../../assets/images/vectors/learning.svg';
// data
import lessons from './lessons';
/**
 * Home
 *
 * @class Home
 * @extends {Component}
 */

//  Constants
const { modalDiv } = styles;
const { Meta } = Card;
class Home extends Component {
  state = {
    visible: false,
    selectedLesson: {},
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  onClickModal = (id) => {
    const selectedLesson = lessons.find((lesson) => lesson.id === id);
    this.setState({
      selectedLesson,
      visible: true,
    });
  };

  componentWillMount() {
    this.setState({
      selectedLesson: lessons[0],
    });
  }
  render() {
    const { visible, selectedLesson } = this.state;
    return (
      <Layout logo_svg={svg_learning}>
        {/* <div className={styles.home}>Hi world</div>
        <Link to="/">
          <Button>HEYLUU</Button>{' '}
        </Link> */}
        <h1> DASHBOARD </h1>
        <Row type="flex" justify="space-around">
          {lessons.map((lesson) => (
            <Col span={12} key={lessons.id}>
              <Card
                style={{ width: '90%' }}
                key={lesson.id}
                cover={<img alt="example" src={lesson.img} />}
                actions={[
                  <Icon key="1" type="arrow-right" />,
                  <Icon
                    key="2"
                    type="eye"
                    onClick={() => this.onClickModal(lesson.id)}
                  />,
                ]}
              >
                <Meta
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Modal
          title={`Learning Outcomes - ${selectedLesson.title}`}
          visible={visible}
          footer={[
            <Button key="back" type="primary" onClick={this.closeModal}>
              Close
            </Button>,
          ]}
        >
          {selectedLesson.outcomes.map((outcome, index) => (
            <div key={index}>
              <div className={modalDiv}>
                <p>{outcome.title}</p>
                <Button type="link">View</Button>
              </div>
              <Divider />
            </div>
          ))}
        </Modal>
      </Layout>
    );
  }
}

export default Home;

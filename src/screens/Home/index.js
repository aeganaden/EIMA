// Libs
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// Styles
import styles from './Home.scss';
// Layouts
import Layout from '@/layouts/App';
// Image assets
import svg_learning from '../../assets/images/vectors/learning.svg';
/**
 * Home
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout logo={svg_learning}>
        <div className={styles.home}>Hi world</div>
        <Link to="/">
          <Button>HEYLUU</Button>{' '}
        </Link>
      </Layout>
    );
  }
}

export default Home;

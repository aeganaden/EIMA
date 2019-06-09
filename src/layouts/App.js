// Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
// Styles
import { logo, titleWrapper } from './App.scss';
// Constants
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
// data
import lessons from '../screens/lessons';

/**
 * App
 *
 * @class App
 * @extends {Component}2s
 */
class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { children, logo_svg } = this.props;
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            background: '#ffffff',
            borderRight: '2px solid #dcd8d899',
          }}
        >
          <div className={logo}>
            <img src={logo_svg} alt="" />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
            <Menu.Item key="0">
              <Link to="/home">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="1">Pretest Exam</Menu.Item>
            <Divider>Lessons</Divider>
            {lessons.map((lesson) => (
              <SubMenu
                key={lesson.title}
                title={
                  <span>
                    <Icon type="layout" />
                    <span>{lesson.title}</span>
                  </span>
                }
              >
                <MenuItemGroup key={`L${lesson.id}`} title="Learning Outcomes">
                  {lesson.outcomes.map((outcome) => (
                    <Menu.Item key={outcome.title}>{outcome.title}</Menu.Item>
                  ))}
                </MenuItemGroup>
              </SubMenu>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content
            style={{
              overflow: 'initial',
              height: '100vh',
              background: '#ffffff',
            }}
          >
            <div style={{ padding: 24 }}>{children}</div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default App;

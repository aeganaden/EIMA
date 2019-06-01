// Libs
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
// Styles
import { logo, titleWrapper } from './App.scss';
// Constants
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
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
          }}
        >
          <div className={logo}>
            <img src={logo_svg} alt="" />
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['0']}>
            <div className={titleWrapper}>
              <h2>LESSONS</h2>
            </div>
            <Menu.Item key="0">Dashboard</Menu.Item>

            <SubMenu
              key="lesson1"
              title={
                <span>
                  <Icon type="layout" />
                  <span>Lesson 1</span>
                </span>
              }
            >
              <MenuItemGroup key="l1" title="Learning Outcomes">
                <Menu.Item key="1"> Outcome 1</Menu.Item>
                <Menu.Item key="2"> Outcome 2</Menu.Item>
                <Menu.Item key="3"> Outcome 3</Menu.Item>
                <Menu.Item key="4"> Outcome 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>

            <SubMenu
              key="lesson2"
              title={
                <span>
                  <Icon type="layout" />
                  <span>Lesson 2</span>
                </span>
              }
            >
              <MenuItemGroup key="l2" title="Learning Outcomes">
                <Menu.Item key="5"> Outcome 1</Menu.Item>
                <Menu.Item key="6"> Outcome 2</Menu.Item>
                <Menu.Item key="7"> Outcome 3</Menu.Item>
                <Menu.Item key="8"> Outcome 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>

            <SubMenu
              key="lesson3"
              title={
                <span>
                  <Icon type="layout" />
                  <span>Lesson 3</span>
                </span>
              }
            >
              <MenuItemGroup key="l3" title="Learning Outcomes">
                <Menu.Item key="9"> Outcome 1</Menu.Item>
                <Menu.Item key="10"> Outcome 2</Menu.Item>
                <Menu.Item key="11"> Outcome 3</Menu.Item>
                <Menu.Item key="12"> Outcome 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>

            <SubMenu
              key="lesson4"
              title={
                <span>
                  <Icon type="layout" />
                  <span>Lesson 4</span>
                </span>
              }
            >
              <MenuItemGroup key="l4" title="Learning Outcomes">
                <Menu.Item key="13"> Outcome 1</Menu.Item>
                <Menu.Item key="14"> Outcome 2</Menu.Item>
                <Menu.Item key="15"> Outcome 3</Menu.Item>
                <Menu.Item key="16"> Outcome 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
          <Content
            style={{
              overflow: 'initial',
              height: '100vh',
              background: '#6100ed00',
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

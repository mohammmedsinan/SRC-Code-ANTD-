import { Layout, Menu , Drawer , Dropdown , PageHeader} from 'antd';
import {MenuOutlined} from '@ant-design/icons'
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import logo from '../assests/logo.png'
import Media from 'react-media'
const { Header } = Layout;




export default function HeaderApp () {
      {/*===========================================menu================================================ */}

    const menu = ( 
        <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer"  >
              1st menu item
            </a>
        </Menu.Item>
      </Menu>
      );

      {/*===========================================Drawer code================================================ */}
      const [visible, setVisible] = useState(false);
    
      const onClose = () => {
        setVisible(false);
      };
      {/*================================================================================================== */}
    
    return (
      <Layout className="layout">
      <Header className="Header-antd" style={{backgroundColor:"white"  , display:"flex" , justifyContent:"space-around" , alignItems:"center"}}>
      <img width="130px" src={logo} style={{display:"inline"}}/>
      <div></div>
      <div></div>
      <div></div>
      {/*----------------------------------Nav section-------------------------------------------- */}
    <Media query="(min-width: 800px)">
      {(matches) => {return matches ? <Menu theme="light" mode="horizontal" defaultSelectedKeys={['']} style={{border:"none"}}>
        <Menu.Item key="1" className="pc-screen">Subscribe</Menu.Item>
          <Menu.Item key="2" className="pc-screen">
            <Dropdown overlay={menu}> 
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Hover me <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu> : <MenuOutlined className="colorHoverauqa" style={{cursor:"pointer" , zIndex:"100000"}} onClick={() => setVisible(!visible)}/>}}
   </Media>
      {/*-----------------------------------------drawer component------------------------------------- */}
     
  <>
    <Drawer 
      title= {
      <PageHeader style={{padding:"0px"}}
      onBack={() => setVisible(false)}
      title="Nav"
      subTitle="This is a subtitle"
    />}
      placement="top"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Menu theme="light" mode="vertical" defaultSelectedKeys={['']} style={{border:"none"}}>
        <Menu.Item key="1" className="pc-screen">Subscribe</Menu.Item>
          <Menu.Item key="2" className="pc-screen">
            <Dropdown overlay={menu}> 
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
               Hover me <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
        </Menu> 
    </Drawer>
  </>
      {/*-----------------------------------------drawer component------------------------------------- */}


      </Header>
    </Layout>
    )
  }

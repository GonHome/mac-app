import React from 'react';
import { inject, observer } from 'mobx-react';
import { Menu, Icon } from 'antd';
import { System, App } from '../store';
import { SelectParam } from 'antd/lib/menu';
import { IOpenTag } from '../models';
const { SubMenu, Item } = Menu;

interface IProps {
  system: System,
  app: App,
}

@inject("system", "app")
@observer
export default class LeftMenu extends  React.Component<IProps> {

  select = ({ item }: SelectParam) => {
    const { app } = this.props;
    const { addTag } = app;
    const { children, eventKey } = item.props;
    let param: IOpenTag;
    if (typeof children === 'string') {
      param = { code: eventKey, text: children };
    } else {
      param = { code: eventKey, text: children[1].props.children };
    }
    addTag(param);
  };

  render() {
    const { system, app } = this.props;
    const { checkedTag } = app;
    const { height, leftWidth, collapsed } = system;
    return (
      <Menu
        selectedKeys={[checkedTag]}
        mode="inline"
        theme="dark"
        onSelect={this.select}
        className="left"
        style={{ width: leftWidth, height: height - 50 }}
        inlineCollapsed={collapsed}
      >
        <Item key="home">
          <Icon type="home" theme="filled" />
          <span>首页</span>
        </Item>
        <SubMenu
          key="equipment"
          title={
            <span>
                <Icon type="desktop" />
                <span>设备管理</span>
              </span>
          }
        >
          <Item key="map">分布情况</Item>
        </SubMenu>
        <SubMenu
          key="record"
          title={
            <span>
                <Icon type="desktop" />
                <span>采集记录查询</span>
              </span>
          }
        >
          <Item key="phone">移动终端查询</Item>
          <Item key="hot">热点信息查询</Item>
          <Item key="fictitious">虚拟身份查询</Item>
        </SubMenu>
        <Item key="overAll">
          <Icon type="desktop" />
          <span>全局搜索</span>
        </Item>
        <Item key="mac">
          <Icon type="desktop" />
          <span>Mac信息</span>
        </Item>
      </Menu>
    )
  }
}


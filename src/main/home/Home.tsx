import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Card } from 'antd';
import { Icon } from '@blueprintjs/core';
import { ISystem } from '../../store';

@inject('system')
@observer
export default class Home extends  React.Component<ISystem> {
  render() {
    return (
      <div className="home">
        <Row gutter={24} className="card">
          <Col span={6}>
            <Card title={<span>终端&nbsp;<Icon icon="mobile-phone" iconSize={30}/></span>} bordered={false} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title={<span>热点&nbsp;<Icon icon="feed" iconSize={30}/></span>} bordered={false} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title={<span>虚拟身份&nbsp;<Icon icon="person" iconSize={30}/></span>} bordered={false} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title={<span>设备&nbsp;<Icon icon="cell-tower" iconSize={30}/></span>} bordered={false} >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Card title='区域设备状态统计'>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='布控告警列表'>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={24}>
            <Card title='单位统计'>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


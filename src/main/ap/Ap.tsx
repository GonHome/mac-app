import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Card, Button } from 'antd';
import { Icon, Tab, Tabs } from '@blueprintjs/core';
import * as _ from 'lodash';
import { App, System } from '../../store';
import Hot from './Hot';
import Phone from './Phone';
import { IOpenTag } from '../../models';
const { Meta } = Card;

interface IProps {
  system: System,
  app: App,
}

interface IStates {
  selectedTabId: string;
}

@inject('system', 'app')
@observer
export default class Ap extends  React.Component<IProps, IStates> {
  constructor(props: IProps){
    super(props);
    this.state = { selectedTabId: 'hot' };
  }

  tabChange = (selectedTabId: string) => {
    this.setState({ selectedTabId });
  };

  render() {
    const { system, app } = this.props;
    const { selectedTabId } = this.state;
    const { height, width } = system;
    return (
      <div className="mac">
        <Row gutter={24}>
          <Col span={6}>
            <span className="title">AP资料</span>
            <Card
              hoverable
              cover={<img alt="example" src="ap.png" />}
            >
              <Meta
                title="热点Mac: 78-88-6D-09-77-2B"
                description={
                  <div>
                    <div className="description">
                      <Icon icon="map-marker"/>宁波市公安局
                    </div>
                    <div className="description">
                      <Icon icon="timeline-events"/>2019-08-12 10:23:00
                    </div>
                  </div>} />
              <Button type="primary" size="small"><span><Icon icon="map-marker"/>地点轨迹</span></Button>
            </Card>
          </Col>
          <Col span={18}>
            <span className="title">最新动态</span>
            <Tabs id="TabsExample" selectedTabId={selectedTabId} onChange={this.tabChange}>
              <Tab
                id="hot"
                title={<div><Icon icon="feed" />热点AP信息</div>}
                panel={<Hot height={height - 230} />}
              />
              <Tab
                id="phone"
                title={<div><Icon icon="mobile-phone" />终端连接信息</div>}
                panel={<Phone height={height - 230} width={width} app={app}/>}
              />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}


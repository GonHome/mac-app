import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Card, Button } from 'antd';
import { Icon, Tab, Tabs } from '@blueprintjs/core';
import { App, System } from '../../store';
import Phone from './Phone';
import Hot from './Hot';
import Person from './Person';
import PlaceGraph from './PlaceGraph';
import TimerGraph from './TimerGraph';
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
export default class Mac extends  React.Component<IProps, IStates> {
  constructor(props: IProps){
    super(props);
    this.state = { selectedTabId: 'phone' };
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
            <span className="title">Mac资料</span>
            <Card
              hoverable
              cover={<img alt="example" src="mac.png" />}
            >
              <Meta
                title="终端Mac: 78-88-6D-09-77-2B"
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
                id="phone"
                title={<div><Icon icon="mobile-phone" />移动终端信息</div>}
                panel={<Phone height={height - 230} />}
              />
              <Tab
                id="place"
                title={<div><Icon icon="map-marker" />活动地点规律</div>}
                panel={<PlaceGraph height={height - 230} />}
              />
              <Tab
                id="timer"
                title={<div><Icon icon="timeline-events" />活动时间规律</div>}
                panel={<TimerGraph height={height - 230} />}
              />
              <Tab
                id="hot"
                title={<div><Icon icon="feed" />历史热点列表</div>}
                panel={<Hot height={height - 230} width={width} app={app}/>}
              />
              <Tab
                id="person"
                title={<div><Icon icon="person" />关联身份</div>}
                panel={<Person height={height - 230} />}
              />
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}


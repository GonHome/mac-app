import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Card, Button } from 'antd';
import { Icon, Tab, Tabs } from '@blueprintjs/core';
import { ISystem } from '../../store';
import Phone from './Phone';
import Hot from './Hot';
import Person from './Person';
const { Meta } = Card;

@inject('system')
@observer
export default class Mac extends  React.Component<ISystem> {
  render() {
    const { system } = this.props;
    const { height, rightWidth } = system;
    console.log(height, rightWidth);
    return (
      <div className="mac">
        <Row gutter={24}>
          <Col span={6}>
            <span className="title">个人资料</span>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
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
            <Tabs id="TabsExample">
              <Tab
                id="phone"
                title={<div><Icon icon="mobile-phone" />移动终端信息</div>}
                panel={<Phone height={height - 230} />}
              />
              <Tab id="place" title={<div><Icon icon="map-marker" />活动地点规律</div>}  />
              <Tab id="date" title={<div><Icon icon="timeline-events" />活动时间规律</div>}  />
              <Tab
                id="hot"
                title={<div><Icon icon="feed" />历史热点列表</div>}
                panel={<Hot height={height - 230} />}
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


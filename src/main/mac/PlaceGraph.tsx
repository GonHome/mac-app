import React from 'react';
import { observer } from 'mobx-react';
import ReactEcharts from 'echarts-for-react';
import { Button, Col, Row, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

interface IProps {
  height: number;
}
@observer
export default class PlaceGraph extends  React.Component<IProps> {

  render() {
    const { height } = this.props;
    const option = {
      title: {
        text: '活动地点规律',
        subtext: '高频排序前20',
      },
      tooltip: {},
      toolbox: {
        feature: {
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      legend: {
        data: ['出现次数'],
        align: 'left'
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '出现次数',
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        animationDelay: function (idx: number) {
          return idx * 10;
        }
      }],
      color: ['#3398DB'],
    };
    return (
      <div className="content" style={{ height }}>
        <div className="float">
          <Row gutter={12} className="bar-action">
            <Col span={3} className="bar-title">采集时间:</Col>
            <Col span={8}>
              <RangePicker size="small" />
            </Col>
            <Col span={3}>
              <Button type="primary" size="small">搜索</Button>
            </Col>
          </Row>
          <ReactEcharts option={option} style={{ height: height - 45, width: 'calc(100% - 40px)'}}/>
        </div>
      </div>
    )
  }
}


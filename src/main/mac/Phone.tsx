import React from 'react';
import { observer } from 'mobx-react';
import { Row, Col } from 'antd';
interface IProps {
  height: number;
}
@observer
export default class Phone extends  React.Component<IProps> {
  render() {
    const { height } = this.props;
    return (
      <div className="content phone" style={{ height }}>
        <ul>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                终端Mac:
              </Col>
              <Col span={18}>
                78-88-6D-09-77-2B
              </Col>
            </Row>
          </li>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                终端品牌:
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </li>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                首次出现时间:
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </li>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                首次出现地点:
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </li>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                本次出现时间:
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </li>
          <li>
            <Row gutter={24}>
              <Col span={6}>
                本次出现地点:
              </Col>
              <Col span={18}>
              </Col>
            </Row>
          </li>
        </ul>
      </div>
    )
  }
}


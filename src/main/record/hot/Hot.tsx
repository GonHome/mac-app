import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col } from 'antd';
import { ISystem } from '../../../store';
import InJect from '../../../util/InJect';
import LeftTree from './LeftTree';
import Main from './Main';

@inject('system')
@observer
export default class Hot extends  React.Component<ISystem> {

  render() {
    const { system } = this.props;
    const { height } = system;
    return (
      <div style={{ height: height - 100 }}>
        <Row gutter={24}>
          <Col span={6}>
            <InJect Component={LeftTree} />
          </Col>
          <Col span={18}>
            <InJect Component={Main} />
          </Col>
        </Row>
      </div>
    )
  }
}


import React from 'react';
import { observer } from 'mobx-react';
import { Row, Col, Card, Avatar, Pagination } from 'antd';
import { Classes, Popover, PopoverPosition } from '@blueprintjs/core';
import PhoneDetails from './PhoneDetails';
const { Meta } = Card;


interface IProps {
  selectMac: (mac: string) => void;
}


interface IState {
  openCard: string,
}

@observer
export default class Phone extends  React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { openCard: '' };
  }

  render() {
    const { selectMac } = this.props;
    const { openCard } = this.state;
    return (
      <div className="content">
        <Row gutter={12} className="card-row">
          <Col span={6}>
            <Card
              hoverable
              onClick={() => selectMac('1')}
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '1' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '1'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '2' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '2'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '3' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '3'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '4' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '4'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '5' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '5'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
            >
              <Meta
                avatar={
                  <Avatar src='mac.png' />
                }
                title="78-88-6D-09-77-2B"
                description={
                  <div
                    onMouseEnter={() => this.setState({ openCard: '6' })}
                    onMouseLeave={() => this.setState({ openCard: '' })}
                  >
                    <Popover
                      popoverClassName = {Classes.POPOVER_CONTENT_SIZING }
                      content={<PhoneDetails />}
                      modifiers ={{ arrow: { enabled: false } }}
                      position = {PopoverPosition.RIGHT_TOP}
                      isOpen={openCard === '6'}
                    >
                      <span/>
                    </Popover>
                    <ul>
                      <li>终端品牌:IPHONE</li>
                      <li>首次捕获时间:2019-08-13 15:02:00</li>
                      <li>首次捕获地点:宁波市公安局</li>
                      <li>末次捕获时间:2019-08-13 15:02:00</li>
                      <li>末次捕获地点:宁波市公安局</li>
                    </ul>
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
        <Pagination
          total={85}
          showTotal={(total, range) => `${range[0]}-${range[1]} 总共 ${total} 条`}
          pageSize={20}
          defaultCurrent={1}
          className="page"
        />
      </div>
    )
  }
}


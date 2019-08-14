import React from 'react';
import { observer } from 'mobx-react';
import { Table, Row, Col, DatePicker, Button } from 'antd';
import HotHistoryDialog from './HotHistoryDialog';
import { ColumnProps } from 'antd/lib/table';
import { IOpenTag } from '../../models';
import { App } from '../../store';
import MacInput from '../MacInput';

const { RangePicker } = DatePicker;

interface IProps {
  height: number;
  width: number;
  app: App;
}

interface IStates {
  pagination: { pageSize: number, current: number, total: number },
  data: any[];
  Dialog?: JSX.Element;
  mac: string;
}

interface IData {
  key: string;
  id: string;
  internalSign: string;
  chineseName: string;
  signName: number;
  objectType: string;
}

@observer
export default class Phone extends  React.Component<IProps, IStates> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      pagination: { pageSize: 10, current: 1, total: 0 },
      data: [{ internalSign: 'E4-2D-7B-39-14-F1', chineseName: 'SL', signName: 30, objectType: '2019-08-12 17:28:00'  }],
      Dialog: undefined,
      mac: '__-__-__-__-__-__',
    };
  }

  closeDialog = () => {
    this.setState({ Dialog: undefined });
  };

  openDialog = (mac: string) => {
    const { width, height } = this.props;
    const Dialog = (
      <HotHistoryDialog { ...{ width, height, mac } } closeDialog={this.closeDialog} />
    );
    this.setState({ Dialog })
  };

  select = (value: string) => {
    const { app } = this.props;
    const { addTag } = app;
    let param: IOpenTag = { code: `mac#${value}`, text: 'Mac信息' };
    addTag(param);
  };

  showColumns = () => {
    const { pagination } = this.state;
    const { pageSize, current } = pagination;
    const startIndex = (current - 1) * pageSize + 1;
    const columns: ColumnProps<IData>[] = [
      {
        title: '序号',
        dataIndex: 'id',
        width: '10%',
        render: (text: string, record: IData, index: number) => startIndex + index,
      },
      {
        title: '终端Mac',
        dataIndex: 'internalSign',
        sorter: true,
        width: '30%',
        render: (text:string) => {
          const value = text.replace(/[^0-9a-fA-F]/ig, '').toUpperCase();
          if (value.length === 12) {
            return <span
              className="link"
              onClick={() => this.select(text)}
            >{text}</span>
          }
          return text;
        }
      },
      {
        title: '连接次数',
        dataIndex: 'signName',
        sorter: true,
        width: '30%',
        render: (text:number, record: IData) => {
          if (text > 0) {
            return (
              <span
                className="link"
                onClick={() => this.openDialog(record.internalSign)}
              >
              {text}
            </span>
            );
          }
          return text;
        }
      },
      {
        title: '最近一次连接时间',
        dataIndex: 'objectType',
        sorter: true,
        width: '30%',
      },
    ];
    return columns;
  };

  macChange = (mac: string) => {
    this.setState({ mac });
  };

  render() {
    const { height } = this.props;
    const { data, pagination, Dialog, mac } = this.state;
    return (
      <div className="content" style={{ height }}>
        <Row gutter={12} className="bar-action">
          <Col span={3} className="bar-title">终端Mac:</Col>
          <Col span={6}>
            <MacInput value={mac} onChange={this.macChange} size="small"/>
          </Col>
          <Col span={3} className="bar-title">采集时间:</Col>
          <Col span={8}>
            <RangePicker size="small" />
          </Col>
          <Col span={3}>
            <Button type="primary" size="small">搜索</Button>
          </Col>
        </Row>
        <Table
          columns={this.showColumns()}
          dataSource={data}
          pagination={pagination}
          size="small"
          bordered
          scroll={{ y: height - 140 }}
        />
        {Dialog}
      </div>
    )
  }
}


import React from 'react';
import { observer } from 'mobx-react';
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

interface IProps {
  height: number;
}

interface IStates {
  pagination: { pageSize: number, current: number, total: number },
  data: any[];
}

interface IData {
  key: string;
  id: string;
  internalSign: string;
  chineseName: string;
  signName: string;
  objectType: string;
}

@observer
export default class Hot extends  React.Component<IProps, IStates> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      pagination: { pageSize: 10, current: 1, total: 0 },
      data: [{}],
    };
  }

  showColumns = () => {
    const { pagination } = this.state;
    const { pageSize, current } = pagination;
    const startIndex = (current - 1) * pageSize + 1;
    const columns: ColumnProps<IData>[] = [
      {
        title: '序号',
        dataIndex: 'id',
        width: '10%',
        render: (text: string, record: any, index: number) => startIndex + index,
      },
      {
        title: 'Mac地址',
        dataIndex: 'internalSign',
        sorter: true,
        width: '23%',
      },
      {
        title: 'SSID',
        dataIndex: 'chineseName',
        sorter: true,
        width: '22%',
      },
      {
        title: '连接次数',
        dataIndex: 'signName',
        sorter: true,
        width: '22%',
      },
      {
        title: '最近一次连接时间',
        dataIndex: 'objectType',
        sorter: true,
        width: '23%',
      },
    ];
    return columns;
  };

  render() {
    const { height } = this.props;
    const { data, pagination } = this.state;
    return (
      <div className="content" style={{ height }}>
        <Table columns={this.showColumns()} dataSource={data} pagination={pagination} size="small" bordered />
      </div>
    )
  }
}


import React from 'react';
import { observer } from 'mobx-react';
import { Modal, DatePicker, Table, Button } from 'antd';
import { ColumnProps } from 'antd/lib/table';
const { RangePicker } = DatePicker;
interface IProps {
  mac: string;
  height: number;
  width: number;
  closeDialog: () => void;
}

interface IStates {
  pagination: { pageSize: number, current: number, total: number },
  data: any[];
  Dialog?: JSX.Element;
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
export default class HotHistoryDialog extends  React.Component<IProps, IStates> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      pagination: { pageSize: 10, current: 1, total: 0 },
      data: [{ internalSign: 'E4-2D-7B-39-14-F8', chineseName: 'SL', objectType: '2019-08-12 17:28:00'  }],
      Dialog: undefined,
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
        render: (text: string, record: IData, index: number) => startIndex + index,
      },
      {
        title: '热点Mac',
        dataIndex: 'internalSign',
        width: '30%',
      },
      {
        title: '热点名称',
        dataIndex: 'chineseName',
        width: '30%',
      },
      {
        title: '采集时间',
        dataIndex: 'objectType',
        width: '30%',
      },
    ];
    return columns;
  };

  render() {
    const { closeDialog, height, width } = this.props;
    const { data } = this.state;
    return (
      <Modal
        title="历史连接热点明细"
        style={{ top: 20 }}
        width={width * 0.7}
        visible
        onCancel={closeDialog}
        maskClosable={false}
        bodyStyle={{ height: height + 100, overflowY: 'auto' }}
        footer={null}
      >
        <div className="bar">
          <span className="bar-title">采集时间:</span>
          <RangePicker size="small" />
          <Button className="bar-button" type="primary" size="small">查询</Button>
        </div>
        <Table size="small"  columns={this.showColumns()} bordered scroll={{ y: height - 60 }} dataSource={data} />
      </Modal>
    )
  }
}


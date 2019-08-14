import React from 'react';
import { observer } from 'mobx-react';

interface IProps {
}

@observer
export default class PhoneDetails extends  React.Component<IProps> {

  constructor(props: IProps) {
    super(props);
  }

  render() {
    return (
      <ul className="ul-details">
        <li>终端品牌:IPHONE</li>
        <li>首次捕获时间:2019-08-13 15:02:00</li>
        <li>首次捕获地点:宁波市公安局</li>
        <li>末次捕获时间:2019-08-13 15:02:00</li>
        <li>末次捕获地点:宁波市公安局</li>
      </ul>
    )
  }
}


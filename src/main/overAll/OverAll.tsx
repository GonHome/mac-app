import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Input } from 'antd';
import { Button, Intent, Checkbox } from '@blueprintjs/core';
import { App, System } from '../../store';
import MacInput from '../MacInput';
import { IOpenTag } from '../../models';
import { searchTypes } from '../../constants/app';
import Hot from './Hot';

interface IProps {
  system: System,
  app: App,
}


interface IState {
  searchType: string,
  value: string,
  isVague: boolean,
}

@inject('system', 'app')
@observer
export default class OverAll extends  React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { searchType: 'phone', value: '__-__-__-__-__', isVague: false  };
  }

  selectMac = (mac: string) => {
    const { app } = this.props;
    const { addTag } = app;
    let param: IOpenTag = { code: `mac#${mac}`, text: 'Mac信息' };
    addTag(param);
  };

  selectAp = (ap: string) => {
    const { app } = this.props;
    const { addTag } = app;
    let param: IOpenTag = { code: `ap#${ap}`, text: 'AP信息' };
    addTag(param);
  };

  inputChange = (value: string) => this.setState({ value });

  selectChange = (searchType: string) => {
    if (searchType === 'fictitious') {
      this.setState({ searchType, value: '' });
    } else {
      this.setState({ searchType, value: '__-__-__-__-__' })
    }
  };

  render() {
    const { isVague, value, searchType } = this.state;
    return (
      <div className="overAll">
        <div className="search-bar">
          <div className="nav_box">
            {searchTypes.map((item: { code: string, text: string }) => {
              return <Button
                key={item.code}
                text={item.text}
                minimal
                onClick={() => this.selectChange(item.code)}
                active={searchType === item.code}
              />
            })}
          </div>
          <Row gutter={24}>
            <Col span={18}>
              {
                searchType === 'fictitious'
                  ? <Input placeholder="请输入搜索条件" onChange={e => this.inputChange(e.currentTarget.value)} value={value} />
                  : <MacInput value={value} onChange={this.inputChange} />
              }
              <Button text="搜索" intent={Intent.PRIMARY} />
              <div className="result-tip">
                为你找到相关结果
                <span className="high">XX</span>个:
                <span className="high">{value}</span>
              </div>
            </Col>
            <Col span={4}>
              <Checkbox checked={isVague} onChange={() => { this.setState({ isVague: !isVague }) }} />
              模糊查询
            </Col>
          </Row>
        </div>
        <Hot selectAp={this.selectAp}/>
      </div>
    )
  }
}


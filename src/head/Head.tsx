import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, ButtonGroup, Icon } from '@blueprintjs/core';
import NavUser from './NavUser';

@inject('system')
@observer
export default class Head extends  React.Component {
  render() {
    return (
      <div className="head">
        <img src='favicon.ico' />
        <div className="head-logo-text">
          <div className="title hover-link">
            <span>M</span>
            <span>A</span>
            <span>C</span>
            <span>融</span>
            <span>合</span>
            <span>系</span>
            <span>统</span>
          </div>
          <div className="title hover-link">
            <span>M</span>
            <span>A</span>
            <span>C</span>
            <span>融</span>
            <span>合</span>
            <span>系</span>
            <span>统</span>
          </div>
        </div>
        <div className="head-toolbar">
          <ButtonGroup>
            <NavUser />
            <Button icon={<Icon icon="notifications" iconSize={18} />} minimal title="预警信息" />
            <Button icon={<Icon icon="log-out" iconSize={18} />} minimal title="退出系统" />
          </ButtonGroup>
        </div>
      </div>
    )
  }
}


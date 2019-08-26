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
        <img src='favicon.ico' alt='favicon' />
        <div className="head-logo-text">
          <img src='login_title_blue.png' alt='login_tilte'/>
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


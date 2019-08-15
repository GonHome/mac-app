import React from 'react';
import { inject, observer } from 'mobx-react';
import { Menu, MenuItem } from '@blueprintjs/core';
import { IUser } from '../store';


@inject('user')
@observer
export default class NavUserMenu extends  React.Component<IUser> {

  render() {
    const { user } = this.props;
    const { userInfo } = user;
    if (userInfo) {
      return (
        <Menu>
          <MenuItem text={userInfo.name} icon="person"/>
          <MenuItem text="修改密码" icon="edit"/>
        </Menu>
      )
    }
    return null;
  }
}


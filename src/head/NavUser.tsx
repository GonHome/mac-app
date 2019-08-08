import React from 'react';
import { observer } from 'mobx-react';
import { Button, Icon, PopoverInteractionKind, Position, Popover } from '@blueprintjs/core';
import NavUserMenu from './NavUserMenu';
import Inject from '../util/InJect';
@observer
export default class NavUser extends  React.Component {
  render() {
    return (
      <Popover
        position={Position.BOTTOM}
        interactionKind={PopoverInteractionKind.CLICK}
        content={<Inject Component={NavUserMenu} />}
      >
        <Button icon={<Icon icon="user" iconSize={18}/>} minimal title="用户信息" />
      </Popover>
    )
  }
}


import React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Button, Intent } from '@blueprintjs/core';
import { System, App } from '../store';
import NavTag from './NavTag';
import { IOpenTag } from '../models';

interface IProps {
  system: System,
  app: App,
}

@inject('system', 'app')
@observer
export default class NavBar extends  React.Component<IProps> {
  render() {
    const { system, app } = this.props;
    const { collapsed, changeCollapsed } = system;
    const { checkedTag, checkTag, cancelTag, closeOtherTags, closeRightTags } = app;
    return (
      <div className="nav-bar">
        <Button
          icon={collapsed ? "menu-open" : "menu-closed"}
          minimal
          onClick={() => changeCollapsed(!collapsed)}
        />
        <Button icon="double-chevron-left" minimal />
        <Button icon="double-chevron-right" minimal className="icon-right" />
        <div
          className={classNames("home nav-button", { active: checkedTag === 'home' })}
          onClick={() => checkTag('home')}
        >
          首页
        </div>
        {app.tags.map((item: IOpenTag) => {
          return <NavTag
            key={item.code}
            tag={item}
            checkedTag={checkedTag}
            checkTag={checkTag}
            cancelTag={cancelTag}
            closeOtherTags={closeOtherTags}
            closeRightTags={closeRightTags}
          />
        })}
      </div>
    )
  }
}



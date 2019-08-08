import React from 'react';
import { observer } from 'mobx-react';
import {  Menu, MenuItem, ContextMenu } from '@blueprintjs/core';
import { Icon } from 'antd';
import { IOpenTag } from '../models';
import classNames from 'classnames';

interface IProps {
  tag: IOpenTag,
  checkedTag: string,
  checkTag: (checkedTag: string,) => void;
  cancelTag: (tagCode: string,) => void;
  closeOtherTags: (tagCode: string,) => void;
  closeRightTags: (tagCode: string,) => void;
}
@observer
export default class NavTag extends  React.Component<IProps> {

  check = (checkedTag: string) => {
    const { checkTag } = this.props;
    checkTag(checkedTag);
  };

  cancel = (tagCode: string, e: React.MouseEvent) => {
    const { cancelTag } = this.props;
    cancelTag(tagCode);
    e.preventDefault();
    e.stopPropagation();
  };

  showContextMenu = (e: any, tag: IOpenTag) => {
    const { closeOtherTags, closeRightTags, cancelTag } = this.props;
    const menu =
      <Menu>
        <MenuItem text="关闭此项" onClick={() => cancelTag(tag.code)}/>
        <MenuItem text="关闭其他" onClick={() => closeOtherTags(tag.code)} />
        <MenuItem text="关闭右边" onClick={() => closeRightTags(tag.code)} />
      </Menu>;
    if(e.button === 2) {
      ContextMenu.show(
        menu, { left: e.clientX, top: e.clientY },
      );
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const { tag, checkedTag } = this.props;
    return (
      <div
        className={classNames("tag nav-button", { active: checkedTag === tag.code })}
        onClick={() => this.check(tag.code)}
        onContextMenu={(e) => this.showContextMenu(e, tag)}
      >
        <span>{tag.text}</span>&nbsp;
        <Icon
          type="close-circle"
          theme="filled"
          onClick={e => this.cancel(tag.code, e)}/>
      </div>
    )
  }
}


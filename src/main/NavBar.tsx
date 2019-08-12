import React from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Button } from '@blueprintjs/core';
import { System, App } from '../store';
import NavTag from './NavTag';
import { IOpenTag } from '../models';

interface IProps {
  system: System,
  app: App,
}

interface IState {
  transformX: number,
  tags: IOpenTag[],
  checkedTag: string;
  width: number;
}

const homeWidth = 65;
const tagWidth = 120;

@inject('system', 'app')
@observer
export default class NavBar extends  React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = { transformX: 0, tags: [], checkedTag: '', width: 0 };
  }

  componentWillUpdate(nextProps: Readonly<IProps>): void {
    if (this.state.tags.length !== nextProps.app.tags.length
      || this.state.checkedTag !== nextProps.app.checkedTag
      || this.state.width !== nextProps.system.rightWidth
    ) {
      this.calculateFlow(nextProps.app.checkedTag, nextProps.app.tags, nextProps.system.rightWidth);
    }
  }

  calculateFlow = (checkedTag: string, tags: IOpenTag[], width: number) => {
    if (checkedTag) {
      const tagCodes = tags.map((tag: IOpenTag) => tag.code );
      const index = tagCodes.indexOf(checkedTag);
      if (index > -1) {
        const transformX = homeWidth + tagWidth * (index + 1) - (width - 90);
        if (transformX > 0) {
          this.setState({ checkedTag, tags, transformX, width })
        } else {
          this.setState({ checkedTag, tags, width, transformX: 0 })
        }
      } else {
        this.setState({ checkedTag, tags, width, transformX: 0 })
      }
    } else {
      this.setState({ checkedTag, tags, width, transformX: 0 })
    }
  };

  scrollLeft = () => {
    const { rightWidth } = this.props.system;
    const { tags } = this.props.app;
    const scrollWidth = rightWidth - 90;
    const transformX = homeWidth + tagWidth * tags.length - scrollWidth;
    this.setState({ transformX });
  };

  scrollRight = () => {
    this.setState({ transformX: 0 });
  };

  render() {
    const { system, app } = this.props;
    const { transformX } = this.state;
    const { collapsed, changeCollapsed, rightWidth } = system;
    const { checkedTag, checkTag, cancelTag, closeOtherTags, closeRightTags, tags } = app;
    const scrollWidth = rightWidth - 90;
    const needScroll = tags.length * tagWidth + homeWidth > scrollWidth;
    const canFlowLeft = homeWidth + tagWidth * tags.length <= transformX + scrollWidth;
    return (
      <div className="nav-bar">
        <Button
          icon={collapsed ? "menu-open" : "menu-closed"}
          minimal
          onClick={() => changeCollapsed(!collapsed)}
        />
        <Button
          icon="double-chevron-left"
          minimal
          disabled={transformX === 0}
          onClick={this.scrollRight}
        />
        <Button
          icon="double-chevron-right"
          minimal
          className="icon-right"
          onClick={this.scrollLeft}
          disabled={!needScroll || canFlowLeft}
        />
        <div className="scroll" style={{ width: scrollWidth }}>
          <div className="scroll-bar" style={{ transform: `translate3d(-${transformX}px, 0px, 0px)` }}>
            <div
              className={classNames("home nav-button", { active: checkedTag === 'home' })}
              onClick={() => checkTag('home')}
            >
              首页
            </div>
            {tags.map((item: IOpenTag) => {
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
        </div>
      </div>
    )
  }
}



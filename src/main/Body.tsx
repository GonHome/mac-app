import React from 'react';
import { inject, observer } from 'mobx-react';
import { System, App } from '../store';
import InJect from '../util/InJect';
import { menuDom } from '../constants/app';
import { IOpenTag } from "../models";

interface IProps {
  system: System,
  app: App,
}

interface IState {
  checkedTag: string,
}
@inject('system', 'app')
@observer
export default class Body extends  React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { checkedTag: '' }
  }

  private domMap: {[key: string]: JSX.Element,} = {};

  componentWillUpdate(nextProps: Readonly<IProps>, nextState: Readonly<{}>, nextContext: any): void {
    if (this.state.checkedTag !== nextProps.app.checkedTag) {
      const isExist = nextProps.app.tags.some((tag: IOpenTag) => {
        return tag.code === this.state.checkedTag;
      });
      if (!isExist) {
        delete this.domMap[this.state.checkedTag];
        this.setState({ checkedTag: nextProps.app.checkedTag });
      }
    }
  }

  showDom = () => {
    const { app } = this.props;
    const { checkedTag } = app;
    if (!this.domMap[checkedTag]) {
      const tagList = checkedTag.split('#');
      if (menuDom[tagList[0]]) {
        // @ts-ignore
        const dom = <InJect  Component={menuDom[tagList[0]]}/>;
        this.domMap[checkedTag] = dom;
      }
    }
    const doms: JSX.Element[] = [];
    for(let i in (this.domMap)) {
      doms.push(<div style={{ display: checkedTag === i ? 'block' : 'none', height: '100%' }}>
        {this.domMap[i]}
      </div>);
    }
    return doms;
  };

  render() {
    const { system } = this.props;
    const { height } = system;
    return (
      <div className="body" style={{ height: height - 100 }}>
        {this.showDom()}
      </div>
    )
  }
}


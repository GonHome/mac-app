import React from 'react';
import { inject, observer } from 'mobx-react';
import { ISystem } from '../store';
import NavBar from './NavBar';
import InJect from '../util/InJect';
import Body from './Body';

@inject('system')
@observer
export default class Main extends  React.Component<ISystem> {
  render() {
    const { system } = this.props;
    const { height, width, leftWidth } = system;
    return (
      <div className="main" style={{ height, width: width - leftWidth, marginLeft: leftWidth }}>
        <InJect Component={NavBar} />
        <InJect Component={Body} />
      </div>
    )
  }
}


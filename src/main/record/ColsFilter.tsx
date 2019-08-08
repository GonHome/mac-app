import React from 'react';
import { observer } from 'mobx-react';
import { Checkbox } from '@blueprintjs/core';

interface IProps {
}

type stateTypes = {
  showBar: boolean;
  value: string;
}

@observer
export default class ColsFilter extends  React.Component<IProps, stateTypes> {

  render() {
    return (
      <div className="cols-filter" >
        <div className="cols-head ">
          <Checkbox /> 全选 / 反选
        </div>
        <div className="cols-content">
          <div className="cols-item"><Checkbox />列1</div>
          <div className="cols-item"><Checkbox />列2</div>
          <div className="cols-item"><Checkbox />列3</div>
          <div className="cols-item"><Checkbox />列4</div>
          <div className="cols-item"><Checkbox />列5</div>
          <div className="cols-item"><Checkbox />列6</div>
          <div className="cols-item"><Checkbox />列7</div>
        </div>
      </div>
    )
  }
}


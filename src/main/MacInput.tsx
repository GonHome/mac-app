import React from 'react';
import { observer } from 'mobx-react';
import * as _ from 'lodash';
import { InputGroup } from '@blueprintjs/core';

interface IProps {
  value: string,
  onChange: (value: string) => void,
}

type stateTypes = {
  showBar: boolean;
  value: string;
}

@observer
export default class MacInput extends  React.Component<IProps, stateTypes> {

  macChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = e.currentTarget.value;
    let newValue = value.replace(/[^0-9a-fA-F]/ig, '').toUpperCase().substr(0,12);
    const length = _.cloneDeep(newValue).length;
    for(let i = length; i < 12; i++) {
      newValue += '_';
    }
    newValue = newValue.replace(/(.{2})/g, "$1-").substr(0,17);
    onChange(newValue);
  };

  render() {
    const { value } = this.props;
    return (
      <InputGroup value={value} onChange={this.macChange}/>
    )
  }
}


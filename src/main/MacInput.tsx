import React from 'react';
import { observer } from 'mobx-react';
import { Input } from 'antd';
import InputMask, { InputState } from 'react-input-mask';

interface IProps {
  value: string,
  onChange: (value: string) => void,
  size?: "small" | "default" | "large";
}

type stateTypes = {
  value: string;
}

@observer
export default class MacInput extends  React.Component<IProps, stateTypes> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: this.props.value };
  }

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    console.log(value);
    // let newValue = value.replace(/[^0-9a-fA-F]/ig, '').toUpperCase().substr(0,12);
    // const length = _.cloneDeep(newValue).length;
    // for(let i = length; i < 12; i++) {
    //   newValue += '_';
    // }
    // newValue = newValue.replace(/(.{2})/g, "$1-").substr(0,17);
    this.setState({ value });
  };

  onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = e.currentTarget.value;
    const newValue = value.replace(/[^0-9a-fA-F]/ig, '').toUpperCase().substr(0,12);
    if (newValue.length === 12) {
      onChange(value);
    } else {
      this.setState({ value: '' });
    }
  };

  beforeMaskedValueChange = (newState: InputState, oldState: InputState, userInput: string) => {
    let { value } = newState;
    let selection = newState.selection;
    let cursorPosition = selection ? selection.start : null;
    value = value.toUpperCase();
    if (value.endsWith('-') && userInput !== '-' && !this.state.value.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--;
        selection = { start: cursorPosition, end: cursorPosition };
      }
      value = value.slice(0, -1);
    }
    return {
      value,
      selection
    };
  };

  render() {
    const { size } = this.props;
    const { value } = this.state;
    return (
      <InputMask
        mask="**-**-**-**-**-**"
        value={value}
        onChange={this.onChange}
        onBlur={this.onBlur}
        beforeMaskedValueChange={this.beforeMaskedValueChange}
      >
        {(inputProps: {
          value: string,
          onChange: (e: React.FormEvent<HTMLInputElement>) => void,
          onBlur: (e: React.FormEvent<HTMLInputElement>) => void,
        }) =>
          <Input {...inputProps} size={size ? size : 'default'}/>}
      </InputMask>
    )
  }
}


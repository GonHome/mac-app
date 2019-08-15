import React from 'react';
import { observer } from 'mobx-react';
import { Input } from 'antd';
import InputMask from 'react-input-mask';

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
    const value = e.currentTarget.value.toUpperCase();
    this.setState({ value });
  };

  onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const value = e.currentTarget.value;
    onChange(value);
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


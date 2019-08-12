import { observable, action, computed } from 'mobx';

// 系统状态
class System {
  @observable width: number;
  @observable height: number;
  @observable collapsed: boolean;

  constructor () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.collapsed = false;
  }

  @action resize () {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  @action changeCollapsed = (collapsed: boolean) => {
    this.collapsed = collapsed;
  }

  @computed
  get leftWidth(): number {
    if (this.collapsed) {
      return 80;
    }
    return 200;
  }

  @computed
  get rightWidth(): number {
    return this.width - this.leftWidth;
  }
}

export default System;

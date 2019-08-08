import { observable, action } from 'mobx';
import { IUser } from '../models';

// 登录注册状态
class User {
  @observable name: string;
  @observable username: string;
  @observable id: string;

  constructor () {
    this.name = '系统管理员';
    this.username = 'zladmin';
    this.id = '';
  }

  @action setUser ({ name, username, id }: IUser) {
    this.name = name;
    this.username = username;
    this.id = id;
  }

  @action signOut () {
    this.name = '';
    this.username = '';
    this.id = '';
  }
}

export default User;

import Home from '../main/home/';
import { Phone, Hot, Fictitious } from '../main/record';
import OverAll from '../main/overAll';
import Mac from '../main/mac';
import Ap from '../main/ap';

export const menuDom: { [key: string]: any } = {
  'home': Home,
  'phone': Phone,
  'hot': Hot,
  'fictitious': Fictitious,
  'overAll': OverAll,
  'mac': Mac,
  'ap': Ap,
};

export const searchTypes = [
  { code: 'phone', text: '终端MAC', },
  { code: 'hot', text: '热点AP', },
  { code: 'fictitious', text: '虚拟身份', },
];

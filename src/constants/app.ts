import Home from '../main/home/';
import { Phone, Hot, Fictitious } from '../main/record';
import OverAll from '../main/overAll';
import Mac from '../main/mac';

export const menuDom: { [key: string]: any } = {
  'home': Home,
  'phone': Phone,
  'hot': Hot,
  'fictitious': Fictitious,
  'overAll': OverAll,
  'mac': Mac,
};

export const searchTypes = [
  { code: 'phone', text: '终端MAC', },
  { code: 'fictitious', text: '虚拟身份', },
  { code: 'hot', text: '热点AP', },
];

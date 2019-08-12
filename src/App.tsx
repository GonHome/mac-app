import React from 'react';
import { inject, observer, Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from 'history';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import {
  Switch ,
  Router,
  Route,
} from 'react-router';
import Head from 'head';
import { rootStore } from './store';
import './index.scss';
import LeftMenu from './left';
import Main  from './main';
import InJect from './util/InJect';
import { ISystem } from './store';
const browserHistory = createBrowserHistory();
const routerStore =  new RouterStore();
// 同步路由与mobx的数据状态
const history = syncHistoryWithStore(browserHistory, routerStore);

@inject("system")
@observer
class Entry extends React.Component<ISystem> {
  componentDidMount(): void {
    window.onresize = () => this.props.system.resize();
    localStorage.clear();
  }
  render() {
    const { height, width } = this.props.system;
    return (
      <div style={{ height, width }}>
        <Head />
        <InJect Component={LeftMenu}/>
        <InJect Component={Main} />
      </div>
    )
  }
}

@observer
class App extends  React.Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider {...rootStore}>
          <Router history={history}>
            <Switch>
              <Route component={Entry}/>
            </Switch>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  }
}

export default App;

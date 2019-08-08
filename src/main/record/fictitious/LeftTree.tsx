import React from 'react';
import { inject, observer } from 'mobx-react';
import * as _ from 'lodash';
import { System, App } from '../../../store';
import { Tree, Classes, ITreeNode, Tooltip, Position, Icon, Intent, Button, InputGroup } from '@blueprintjs/core';
import { IOpenTag } from '../../../models';
import TreeModule from '../TreeModule';

const INITIAL_STATE: ITreeNode[] = [
  {
    id: 0,
    icon: "office",
    label: "Folder 0",
  },
  {
    id: 1,
    icon: "office",
    isExpanded: true,
    label: (
      <Tooltip content="I'm a folder <3" position={Position.RIGHT}>
        Folder 1
      </Tooltip>
    ),
    childNodes: [
      {
        id: 2,
        icon: "document",
        label: "Item 0",
        secondaryLabel: (
          <Tooltip content="An eye!">
            <Icon icon="eye-open" />
          </Tooltip>
        ),
      },
      {
        id: 3,
        icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
        label: "Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.",
      },
      {
        id: 4,
        hasCaret: true,
        icon: "folder-close",
        label: (
          <Tooltip content="foo" position={Position.RIGHT}>
            Folder 2
          </Tooltip>
        ),
        childNodes: [
          { id: 5, label: "No-Icon Item" },
          { id: 6, icon: "tag", label: "Item 1" },
          {
            id: 7,
            hasCaret: true,
            icon: "folder-close",
            label: "Folder 3",
            childNodes: [
              { id: 8, icon: "cell-tower", label: "Item 0" },
              { id: 9, icon: "cell-tower", label: "Item 1" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    hasCaret: true,
    icon: "folder-close",
    label: "Super secret files",
  },
];

interface IProps {
  system: System,
  app: App,
}

type stateTypes =  {
  nodes: ITreeNode[];
  value: string,
}

const domType = 'fictitious';
const localKey = 'fictitious.leftTree';

@inject('system', 'app')
@observer
export default class LeftTree extends  TreeModule {

  constructor(props: IProps) {
    super(props);
    this.state = { nodes: INITIAL_STATE, value: ''  };
  }

  componentDidMount(): void {
    const localValue = localStorage.getItem(localKey);
    if (localValue) {
      const state: stateTypes = _.cloneDeep(JSON.parse(localValue));
      const { value } = state;
      this.setState({ value });
    }
  }

  componentWillUnmount(): void {
    const { app } = this.props;
    const { value } = this.state;
    const { tags } = app;
    const isExist = tags.some((tag: IOpenTag) => tag.code === domType);
    if (isExist) {
      localStorage.setItem(localKey,  JSON.stringify({value}));
    } else {
      localStorage.setItem(localKey, '');
    }
  }

  render() {
    const { system } = this.props;
    const { value } = this.state;
    const { height } = system;
    return (
      <div className="left-tree" style={{ height: height - 120 }}>
        <div className="search">
          <InputGroup value={value} onChange={this.inputChange}/>
          <Button intent={Intent.PRIMARY} text="搜索" />
        </div>
        <div style={{ height: height - 197 }}>
          <Tree
            contents={this.state.nodes}
            onNodeCollapse={this.handleNodeCollapse}
            onNodeExpand={this.handleNodeExpand}
            onNodeClick={this.handleNodeClick}
            className={Classes.ELEVATION_0}
          />
        </div>
      </div>
    )
  }
}


import React from 'react';
import { System, App } from '../../store';
import { ITreeNode} from '@blueprintjs/core';

interface IProps {
  system: System,
  app: App,
}

type stateTypes =  {
  nodes: ITreeNode[];
  value: string,
}

class TreeModule extends  React.Component<IProps, stateTypes> {

  constructor(props: IProps) {
    super(props);
    this.state = { nodes: [], value: ''  };
  }

  public inputChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ value: e.currentTarget.value });
  };

  public handleNodeExpand = (nodeData: ITreeNode) => {
    nodeData.isExpanded = true;
    this.setState(this.state);
  };

  public handleNodeCollapse = (nodeData: ITreeNode) => {
    nodeData.isExpanded = false;
    this.setState(this.state);
  };

  forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
    if (nodes == null) {
      return;
    }
    for (const node of nodes) {
      callback(node);
      if (node.childNodes) {
        this.forEachNode(node.childNodes, callback);
      }
    }
  }

  public handleNodeClick = (nodeData: ITreeNode, _nodePath: number[], e: React.MouseEvent<HTMLElement>) => {
    const originallySelected = nodeData.isSelected;
    if (!e.shiftKey) {
      this.forEachNode(this.state.nodes, n => (n.isSelected = false));
    }
    nodeData.isSelected = originallySelected == null ? true : !originallySelected;
    this.setState(this.state);
  };

  render() {
    const { system } = this.props;
    const { height } = system;
    return (
      <div className="left-tree" style={{ height: height - 120 }}>

      </div>
    )
  }
}

export default TreeModule;

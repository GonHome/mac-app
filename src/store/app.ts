import { observable, action } from 'mobx';
import { IOpenTag } from '../models';
// app状态
class App {
  @observable tags: IOpenTag[];
  @observable checkedTag: string;
  @observable id: string;

  constructor () {
    this.tags = [];
    this.checkedTag = 'home';
    this.id = '';
  }

  @action addTag = (tag:IOpenTag) => {
    if (tag.code !== 'home') {
      const isExist = this.tags.some((item: IOpenTag) => item.code === tag.code);
      if (!isExist) {
        this.tags.push(tag);
      }
    }
    this.checkedTag = tag.code;
  };

  @action checkTag = (checkedTag: string) => {
    this.checkedTag = checkedTag;
  };

  @action cancelTag = (tagCode: string) => {
    let index = -1;
    this.tags = this.tags.filter((tag: IOpenTag, ind: number) => {
      if (tag.code === tagCode) {
        index = ind;
      }
      return tag.code !== tagCode;
    });
    const isExist = this.tags.some((tag: IOpenTag) => tag.code === this.checkedTag);
    if (!isExist) {
      if (this.tags[index]) {
        this.checkedTag = this.tags[index].code;
      } else if (this.tags[index - 1]) {
        this.checkedTag = this.tags[index - 1].code;
      } else {
        this.checkedTag = 'home';
      }
    }
  };

  @action closeOtherTags = (tagCode: string) => {
    this.tags = this.tags.filter((tag: IOpenTag) => {
      return tag.code === tagCode;
    });
    this.checkedTag = tagCode;
  }

  @action closeRightTags = (tagCode: string) => {
    const tagCodes: string[] = this.tags.map((tag: IOpenTag) => tag.code);
    const index: number = tagCodes.indexOf(tagCode);
    this.tags  = this.tags.filter((tag: IOpenTag, ind: number) => ind <= index);
    const isExist = this.tags.some((tag: IOpenTag) => tag.code === this.checkedTag);
    if (!isExist) {
      this.checkedTag = tagCode;
    }
  }

}

export default App;

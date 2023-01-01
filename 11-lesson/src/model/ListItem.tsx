// create interface
export interface Item {
  id: string;
  item: string;
  checked: boolean;
}
// create class by implement interface
// --> make sure that all interface property can used
// --> using setter vs getter to set up
export default class ListItem implements Item {
  constructor(private _id: string = "", private _item: string = "", private _checked: boolean = false) {}
  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this._id = id;
  }
  get item(): string {
    return this.item;
  }
  set item(item: string) {
    this._item = item;
  }
  get cheked(): boolean {
    return this._checked;
  }
  set checked(checked: boolean) {
    this._checked = checked;
  }
}

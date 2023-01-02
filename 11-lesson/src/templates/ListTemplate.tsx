import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  static instance: ListTemplate = new ListTemplate();
  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }
  clear(): void {
    this.ul.innerHTML = "";
  }
  render(fullList: FullList): void {
    this.ul.innerHTML = " ";
    fullList.list.forEach((item) => {
      const li = document.createElement("li") as HTMLElement;
      li.className = "item";
      //   1. set up checkbox input
      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbok";
      check.id = item.id;
      check.tabIndex = 0;
      check.checked = item.checked;
      li.append(check);
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });
      // 2. set up label
      const lalel = document.createElement("label") as HTMLLabelElement;
      lalel.htmlFor = item.id;
      lalel.textContent = item.item;
      li.append(lalel);
      //   3. set up button
      const button = document.createElement("button") as HTMLButtonElement;
      button.className = "button";
      button.textContent = "X";
      li.append(button);
      button.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });
      this.ul.append(li);
    });
  }
}

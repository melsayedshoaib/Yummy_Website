import { Search } from "./searchbyname.js";

export class Header {
  constructor() {
    this.displayHeader();
  }
  displayHeader() {
    let s = new Search();
    s.searchByName("");
    $("#sbn").hide();
    $("#sbfl").hide();
  }
}

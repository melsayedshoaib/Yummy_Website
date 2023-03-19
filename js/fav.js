export class checkFavIcon {
  constructor() {
    this.link = document.querySelector("link[rel~='icon']");
    if (!this.link) {
      this.link = document.createElement("link");
      this.link.rel = "icon";
      document.head.appendChild(this.link);
    }
    this.link.href = "../imgs/logo.png";
  }
}

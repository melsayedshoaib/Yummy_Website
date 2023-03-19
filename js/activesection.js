import { ToggleAside } from "./togglaside.js";

export class ActiveClass {
  constructor() {
    this.handleActive();
  }
  handleActive() {
    $(".link-one").click(function () {
      $(".sec-one").show();
      $(".sec-two,.sec-three,.sec-four,.sec-five").hide();
      $("#sbn").show();
      $("#sbfl").show();
      let toggle = new ToggleAside();
      toggle.closeAside();
    });
    $(".link-two").click(function () {
      $(".sec-two").show();
      $(".sec-one,.sec-three,.sec-four,.sec-five").hide();
      let toggle = new ToggleAside();
      toggle.closeAside();
    });
    $(".link-three").click(function () {
      $(".sec-three").show();
      $(".sec-one,.sec-two,.sec-four,.sec-five").hide();
      let toggle = new ToggleAside();
      toggle.closeAside();
    });
    $(".link-four").click(function () {
      $(".sec-four").show();
      $(".sec-one,.sec-two,.sec-three,.sec-five").hide();
      let toggle = new ToggleAside();
      toggle.closeAside();
    });
    $(".link-five").click(function () {
      $(".sec-five").show();
      $(".sec-one,.sec-two,.sec-three,.sec-four").hide();
      let toggle = new ToggleAside();
      toggle.closeAside();
    });
  }
}

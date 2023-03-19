export class ToggleAside {
  constructor() {
    // Start by closing the aside nav

    this.closeAside();

    // Checking for clicked button

    $(".open-close-btn").click(() => {
      if ($(".aside-nav").css("left") === "0px") {
        this.closeAside();
      } else {
        this.openAside();
      }
    });
  }

  /* Aside behavior */

  // Open aside

  openAside() {
    $(".aside-nav").animate(
      {
        left: 0,
      },
      500
    );
    $(".open-close-btn").addClass("fa-x");
    $(".open-close-btn").removeClass("fa-bars");
    let links = Array.from($(".links li"));
    for (let i = 0; i < links.length; i++) {
      $(".links li")
        .eq(i)
        .animate(
          {
            top: 0,
          },
          (i + 5) * 100
        );
    }
  }

  // Close aside

  closeAside() {
    let asideLinksWidth = $(".aside-links").outerWidth();
    $(".aside-nav").animate(
      {
        left: -asideLinksWidth,
      },
      500
    );
    $(".open-close-btn").removeClass("fa-x");
    $(".open-close-btn").addClass("fa-bars");
    let links = Array.from($(".links li"));
    for (let i = 0; i < links.length; i++) {
      $(".links li")
        .eq(i)
        .animate(
          {
            top: 300,
          },
          (i + 5) * 100
        );
    }
  }
}

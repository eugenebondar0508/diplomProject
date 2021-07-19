const goAnchors = () => {
  const links = document.querySelectorAll(".top-menu ul a");

  function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop;

      scroll({
          top: offsetTop,
          behavior: "smooth"
      });
  }
  for (const link of links) {
      link.addEventListener("click", clickHandler);
  }
};

export default goAnchors;
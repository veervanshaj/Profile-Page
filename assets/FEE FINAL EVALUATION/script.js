document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const images = document.querySelectorAll(".img");

  buttons.forEach((button) => {
    button.addEventListener("click", filterImages);
  });

  function filterImages() {
    const selectedFilter = this.getAttribute("data-filter");

    images.forEach((image) => {
      const imageFilters = image.classList;

      if (selectedFilter === "all" || imageFilters.contains(selectedFilter)) {
        image.style.display = "block";
      } else {
        image.style.display = "none";
      }
    });
  }
});

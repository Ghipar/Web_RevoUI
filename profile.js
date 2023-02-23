// Add "active" class to the header when the user scrolls down
window.onscroll = function() {
    const header = document.querySelector("header");
    if (window.pageYOffset > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
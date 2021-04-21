function toggleMobileNav() {
  var x = document.getElementById("mobileNav");
  if (x.className === "nav-content") {
    x.className += " mobile-nav-content";
  } else {
    x.className = "nav-content";
  }
}

const dropdown = document.querySelectorAll(".dropdown-toggle");

function clearDropdowns() {
  dropdown.forEach((item) => {
    item.nextElementSibling.className = "dropdown-content";
  });
}

dropdown.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.nextElementSibling.className === "dropdown-content") {
      item.nextElementSibling.className += " mobile-dropdown-content";
      item.lastElementChild.classList.add("arrow-active");
    } else {
      item.nextElementSibling.className = "dropdown-content";
      item.lastElementChild.classList.remove("arrow-active");
    }
  });
});

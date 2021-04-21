function toggleMobileNav() {
  var x = document.getElementById("mobileNav");
  if (x.className === "nav-content") {
    x.className += " mobile-nav-content";
  } else {
    x.className = "nav-content";
  }
}

const dropdown = document.querySelectorAll(".dropdown-toggle");
const mainHeader = document.querySelector(".main-header");

function clearDropdowns() {
  dropdown.forEach((item) => {
    item.nextElementSibling.className = "dropdown-content";
  });
}

function fun(item) {
  if (item.nextElementSibling.classList.contains("mobile-dropdown-content")) {
    item.nextElementSibling.classList.remove("mobile-dropdown-content");
    item.lastElementChild.classList.remove("arrow-active");
  } else {
    console.log("we here");

    item.nextElementSibling.classList.add("mobile-dropdown-content");
    item.lastElementChild.classList.add("arrow-active");
  }
}

dropdown.forEach((item) => {
  item.addEventListener("click", (e) => {
    clearDropdowns();
    console.log(
      item.nextElementSibling.classList.contains("mobile-dropdown-content")
    );
    fun(item);
  });
});

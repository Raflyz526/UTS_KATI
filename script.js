document.addEventListener("DOMContentLoaded", function () {
  const sidebarTips = document.querySelectorAll(".sidebar ul");

  sidebarTips.forEach((ul) => {
    ul.addEventListener(
      "mouseenter",
      () => (ul.style.backgroundColor = "#eef6ff")
    );
    ul.addEventListener(
      "mouseleave",
      () => (ul.style.backgroundColor = "transparent")
    );
  });

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      alert("Terima kasih! Formulir Anda akan segera diproses.");
    });
  }
});

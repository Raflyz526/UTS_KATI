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
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      nama: form.nama.value,
      email: form.email.value,
      telepon: form.telepon.value,
      layanan: form.layanan.value,
      tanggal: form.tanggal.value,
      alamat: form.alamat.value,
      catatan: form.catatan.value,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "struk.html";
  });
});

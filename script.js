function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.querySelector(".buttn").addEventListener("click", function () {
  if (this.textContent === "Copy My Invite") {
    navigator.clipboard.writeText("Invite Link").then(function () {
      window.location.href = "referral.html";
    });
  }
});

document.getElementById("copyButton").addEventListener("click", function () {
  if (this.textContent === "Copy to Clipboard") {
    navigator.clipboard.writeText(referralCode).then(function () {
      window.location.href = "copied-code.html";
    });
  }
});

document.getElementById("backButton").addEventListener("click", function () {
  window.history.back(); // Navigates to the home page
});

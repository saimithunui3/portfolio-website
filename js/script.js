
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "🌙 Toggle Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px";
  toggleBtn.style.zIndex = "1000";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "5px";
  toggleBtn.style.backgroundColor = "#444";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.cursor = "pointer";

  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.innerText = document.body.classList.contains("dark-mode") ? "☀️ Toggle Light Mode" : "🌙 Toggle Dark Mode";
  });
});

const themToggleBtn = document.querySelector(".theme-toggle-btn");

const toggleTheme = (btn, theme = null) => {
  const currentTheme = document.documentElement.getAttribute("theme");

  if (theme === "light" || !currentTheme || currentTheme === "light") {
    document.documentElement.setAttribute("theme", "dark");
    btn.textContent = "Light Mode";
  } else {
    document.documentElement.setAttribute("theme", "light");
    btn.textContent = "Dark Mode";
  }
};

themToggleBtn.addEventListener("click", () => toggleTheme(themToggleBtn));

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  toggleTheme(themToggleBtn, "dark");
}

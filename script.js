const themeToggleCheckbox = document.querySelector(".darkmodeswitch input");

const toggleTheme = (isChecked) => {
  if (isChecked) {
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    console.log("Dark mode activated");
  } else {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    console.log("Light mode activated");
  }
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    themeToggleCheckbox.checked = savedTheme === "dark";
    toggleTheme(themeToggleCheckbox.checked);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    themeToggleCheckbox.checked = true;
    toggleTheme(true);
  } else {
    themeToggleCheckbox.checked = false;
    toggleTheme(false);
  }
};

themeToggleCheckbox.addEventListener("change", () => {
  toggleTheme(themeToggleCheckbox.checked);
});

loadTheme();

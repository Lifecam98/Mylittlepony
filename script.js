const themeToggleCheckbox = document.querySelector(".darkmodeswitch input");

const toggleTheme = (isChecked) => {
  if (isChecked) {
    document.documentElement.setAttribute("theme", "dark");
    console.log("Dark mode activated");
  } else {
    document.documentElement.setAttribute("theme", "light");
    console.log("Light mode activated");
  }
};

themeToggleCheckbox.addEventListener("change", () => {
  toggleTheme(themeToggleCheckbox.checked);
});

// Sjekk brukerens foretrukne fargetema ved første lasting
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  themeToggleCheckbox.checked = true;
  toggleTheme(true); // Sett mørkt tema hvis bruker foretrekker det
} else {
  themeToggleCheckbox.checked = false;
  toggleTheme(false);
}

// YOUR CODE GOES HERE: document.addEventListener("DOMContentLoaded", function () {
  // add event listener to when html has been completely loaded
  /* will get save data to see if dark mode is enabled already */
  const darkMode = document.getElementById("darkMode"); // retrieve darkMode slider
  const saveDark = JSON.parse(localStorage.getItem("dark-mode")); // get dark mode toggle state from local storage

  if (saveDark) {
    // if darkmode is on
    document.body.classList.add("dark-mode"); // add darkmode to body
    darkMode.checked = true; // set darkmode state to true
  }

  darkMode.addEventListener("change", function () {
    // add event listener to any change made
    document.body.classList.toggle("dark-mode"); // turn dark mode on/off
    const isDark = document.body.classList.contains("dark-mode"); // retreive classes that have dark-mode parsed to it
    localStorage.setItem("dark-mode", isDark); // save dark mode state to local storage
  });
});

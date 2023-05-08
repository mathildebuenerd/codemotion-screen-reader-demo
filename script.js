/***
  Color switch
***/
const switchId = "checkbox-color";
const switchLabel = document.querySelector(`label[for="${switchId}"]`);
const switchInput = document.querySelector(`#${switchId}`);
const labels = ["Color mode", "Dark mode"];

switchInput.addEventListener("click", () => {
  const isDarkMode = switchInput.classList.contains("checked");
  if (isDarkMode) {
    // Set color mode
    switchInput.classList.remove("checked");
    switchLabel.textContent = labels[0];
    document.body.classList.remove("dark-mode");
  } else {
    // Set dark mode
    switchInput.classList.add("checked");
    switchLabel.textContent = labels[1];
    document.body.classList.add("dark-mode");
  }
});

/***
  Email status message
***/
const emailForm = document.querySelector("#email-form");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.srcElement[0].value;

  const feedbackMessage = document.querySelector(".feedback-message");

  // Show error message
  if (value === "mathilde@gmail.com") {
    feedbackMessage.innerHTML =
      "Error: email address <em>mathilde@gmail.com</em> is already subscribed";
    feedbackMessage.classList.remove("hidden");
    return;
  }

  // Show success message
  feedbackMessage.textContent = "Successfully subscribed!";
  feedbackMessage.classList.remove("hidden");
});

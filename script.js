const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  //variable
  const nameField = document.getElementById("contactName");
  const emailField = document.getElementById("contactEmail");
  const messageField = document.getElementById("contactMessage");
  const errorText = document.getElementById("error-text");

  // value
  const nameValue = nameField.value;
  const emailValue = emailField.value;
  const messageValue = messageField.value;
  const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
  };

  if (nameValue && emailValue && messageValue) {
    nameField.value = "";
    emailField.value = "";
    messageField.value = "";
    errorText.innerHTML = "";

    emailjs.send(
      "service_ruy6s0z",
      "template_hb232gm",
      templateParams,
      "9anbrVOVMBov2vQff"
    );
  } else {
    errorText.innerHTML = `<p class="text-warning">Please fill all the box</p>`;
  }
});

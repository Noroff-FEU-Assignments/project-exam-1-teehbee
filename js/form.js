const form = document.querySelector("#contact-form");

  /* Form validation */ 

  const name = document.querySelector("#name");
  const nameError = document.querySelector("#name-error");
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#e-mail-error");
  const subject = document.querySelector("#subject");
  const subjectError = document.querySelector("#subject-error");
  const message = document.querySelector("#message");
  const messageError = document.querySelector("#message-error");

  function validateForm() {
    event.preventDefault();

      /* Validating the name field */

      if (checkLength(name.value, 4) === true) {
        nameError.style.display = "none";
      } else {
        nameError.style.display = "block";
      }

    /* Validating the subject field */

    if (checkLength(subject.value, 14) === true) {
      subjectError.style.display = "none";
    } else {
      subjectError.style.display = "block";
    }

    /* Validating the message field */

    if (checkLength(message.value, 24) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }

  /* Validating the E-Mail field */

  if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  function checkLength(value, len) {
    if(value.trim().length > len) {
      return true;
    } else {
      return false;
    }
  }

    /* Validating E-Mail with regEx */

    function validateEmail(email) {
      const regEx = /\S+@\S+\.\S+/;
      const patternMatches = regEx.test(email);
      return patternMatches;
    }}

    form.addEventListener("submit", validateForm);
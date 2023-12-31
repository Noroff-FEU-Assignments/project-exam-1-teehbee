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
  const button = document.querySelector("#submit-button");
  const submitMessage = document.querySelector(".submit-message");

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
    }

    /* Clearing the fields and removing error text after submitting */

    if(
      checkLength(name.value, 4) &&
      checkLength(subject.value, 14) &&
      checkLength(message.value, 24) &&
      validateEmail(email.value)
    ) {
      name.value = "";
      subject.value = "";
      message.value = "";
      email.value = "";

      nameError.style.display = "none";
      subjectError.style.display = "none";
      messageError.style.display = "none";
      emailError.style.display = "none";

      /* Thank you modal showing upon submission of form */

      const thankYouModal = document.getElementById("thank-you-modal");
      thankYouModal.showModal();

      const closeModalButton = document.getElementById("closeModal")
      closeModalButton.addEventListener("click", () => {
        const thankYouModal = document.getElementById("thank-you-modal");
        thankYouModal.close();
      });

       /* Close by clicking outside */ 

       thankYouModal.addEventListener("click", (event) => {
        if (event.target === thankYouModal) {
          thankYouModal.close();
        }
       })
    } 
  }

    form.addEventListener("submit", validateForm);
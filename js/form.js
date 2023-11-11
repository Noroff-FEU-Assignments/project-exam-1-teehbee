const form = document.querySelector("#contact-form");

form.onsubmit = function() {

  event.preventDefault();

  console.log(event);

  const name = document.querySelector("#name");

  console.log(name.value);
}
const form = document.querySelector("[data-js-form]");
const template = document.querySelector("[data-js-template]");
const wrapper = document.querySelector("[data-js-wrapper]");

function handleSubmit(e) {
  e.preventDefault();

  const rating = new FormData(e.target).get("rating");

  if (rating) {
    wrapper.innerHTML = template.innerHTML.replace(/x/, rating);

    wrapper.computedStyleMap.height = wrapper.offsetHeight + "px";
  }
}

form.addEventListener("submit", handleSubmit);

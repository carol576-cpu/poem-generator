function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("#user-input").value;
  let poem = document.querySelector("#poem");

  poem.innerHTML = `Here is your poem about Love: <br /><br />
  The Love shines so bright,<br />
  A gentle glow in silent night.<br />
  Whispered dreams begin to flow,<br />
  In places only hearts can know.`;
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);

async function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("#user-input").value;
  let poem = document.querySelector("#poem");

  poem.innerHTML = "Generating poem... ✨";

  let apiKey = "133b8a2od0f4ca2tfb020bd8b7e2e212";

  let prompt = `Here is your poem about Love:

The Love shines so bright,
A gentle glow in silent night.
Whispered dreams begin to flow,
In places only hearts can know. ${input}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    console.log(data);

    poem.innerHTML = data.answer || data.text || "No poem generated 😢";
  } catch (error) {
    poem.innerHTML = "Sorry, something went wrong 😢";
  }
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);

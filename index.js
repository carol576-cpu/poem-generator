async function generatePoem(event) {
  event.preventDefault();

  let input = document.querySelector("#user-input").value;
  let poem = document.querySelector("#poem");

  poem.innerHTML = "Generating poem... ✨";

  let apiKey = "133b8a2od0f4ca2tfb020bd8b7e2e212";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt={prompt}&context={context}&key={key}`;

  try {
    let response = await fetch(apiUrl);
    let data = await response.json();

    poem.innerHTML = data.answer;
  } catch (error) {
    poem.innerHTML = "Sorry, something went wrong 😢";
  }
}

let form = document.querySelector("#poem-form");
form.addEventListener("submit", generatePoem);

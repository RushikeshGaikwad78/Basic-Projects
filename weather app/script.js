const url = "https://icanhazdadjoke.com/";
let joke = document.querySelector("#data");
let butt = document.querySelector(".butt");

async function getjoke() {
  try {
    let response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data = await response.json();
    joke.innerHTML = data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error.message);
  }
}


butt.addEventListener('click',getjoke);



// src/renderJoke.js

export function renderJoke(jokeText) {                   // Export a function that takes joke text as input
  const container = document.getElementById("result");   // Grab the div where the joke should appear

  if (container) {                                       // If the container exists
    container.textContent = jokeText;                    // Set the container’s text to the joke
  } else {                                               // If the container isn't found
    console.error("Joke container not found");           // Log an error to the console
  }
}

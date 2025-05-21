
// src/main.js

import { getJoke } from './joke.js';             // Get joke from API
import { renderJoke } from './renderJoke.js';    // Display joke in container

async function loadJoke() {
  const categorySelect = document.getElementById('category');     // Get the dropdown
  const category = categorySelect?.value || "Any";                // Get selected value
  const joke = await getJoke(category);                           // Fetch joke with category
  renderJoke(joke);                                               // Display joke
}

// Wait for DOM to load, then attach event
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('fetchBtn');             // Get the button
  if (button) {
    button.addEventListener('click', loadJoke);                   // On click, fetch joke
  } else {
    console.error('Button not found');
  }

});

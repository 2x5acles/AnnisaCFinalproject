  // src/joke.js

export async function getJoke(category = "Any") {          // Define an async function to get a joke by category (default is "Any")
    try {
      const response = await fetch(                          // Call the JokeAPI with the selected category
        `https://v2.jokeapi.dev/joke/${category}?type=single,twopart`
      );
  
      if (!response.ok) throw new Error("Network error");     // If response isn't okay, throw an error
      const data = await response.json();                     // Convert the response to JSON
  
      let joke = "";                                          // Initialize empty joke string
  
      if (data.type === "single") {                           // If it's a single-part joke
        joke = data.joke;                                     // Use the single joke text
      } else if (data.type === "twopart") {                   // If it's a two-part joke
        joke = `${data.setup} 😂 ${data.delivery}`;           // Combine setup and delivery with emoji
      } else {
        joke = "";                                            // Fallback if type is unknown
      }
  
      return joke;                                            // Return the final joke string
  
    } catch (error) {
      console.error("Fetch failed:", error);                  // Log the error if something goes wrong
      return "🤡 No Clown in Town 🤡";                       // Return a friendly error message
    }
  }
  
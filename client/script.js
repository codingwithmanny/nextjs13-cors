// Config
// ========================================================
const API_URL = "http://localhost:3000/api";

// Functions
// ========================================================
const requests = {
  GET: async (callback) => {
    const response = await fetch(`${API_URL}/users`);
    const data = await response.json();
    if (callback) {
      callback(data);
    }
  },
  POST: async (payload, callback) => {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    if (callback) {
      callback(data);
    }
  },
};

// Init
// ========================================================
/**
 * When window is loaded
 */
window.onload = () => {
  console.group("Window loaded");

  // Elements
  const formGet = document.getElementById("form-get");
  const resultGet = document.getElementById("result-get");
  const formPost = document.getElementById("form-post");
  const resultPost = document.getElementById("result-post");

  // Event Listeners
  formGet.addEventListener("submit", (event) => {
    event.preventDefault();
    requests.GET((data) => {
      resultGet.innerHTML = JSON.stringify(data, null, 2);
    });
  });
  formPost.addEventListener("submit", (event) => {
    event.preventDefault();
    requests.POST(
      JSON.parse(event.currentTarget.payload.value),
      (data) => {
        resultPost.innerHTML = JSON.stringify(data, null, 2);
      }
    );
  });

  console.groupEnd();
};

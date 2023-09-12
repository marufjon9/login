const token = JSON.parse(window.localStorage.getItem("token"));

if (token) {
  window.location.pathname = "index.html";
}

const email = document.querySelector(".name");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const nameSpan = document.querySelector(".name-span");

async function loginUSer(url, email, password) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (data.token) {
      window.localStorage.setItem("token", JSON.stringify(data));
      window.location.pathname = "index.html";
    } else if (data.error) {
      nameSpan.textContent = data.error;
    }
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  loginUSer("https://reqres.in/api/login", emailValue, passwordValue);
});

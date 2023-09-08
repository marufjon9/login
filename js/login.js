const firstName = document.querySelector(".name");
const password = document.querySelector(".password");
const form = document.querySelector(".form");
const nameSpan = document.querySelector(".name-span");
const passSpan = document.querySelector(".password-span");

const nameValue = firstName.value.trim();
const passwordValue = password.value.trim();

async function credential(url) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: nameValue,
        password: "",
      }),
    });
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const login = "https://reqres.in/api/login";
  credential(login);
});

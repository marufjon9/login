const token = JSON.parse(window.localStorage.getItem("token"));

if (!token) {
  window.location.pathname = "login.html";
}

const usersList = document.querySelector(".users-list");
const pageTitle = document.querySelector(".page-title");
const logOut = document.querySelector(".page__logout");

logOut.addEventListener("click", function () {
  window.location.pathname = "login.html";
  window.localStorage.clear();
});

const fragment = document.createDocumentFragment();

function renderUser(array) {
  array.forEach((element) => {
    const userItem = document.createElement("li");
    userItem.classList.add("user-item");

    const userImg = document.createElement("img");
    userImg.classList.add("user-img");
    userImg.setAttribute("src", element.avatar);
    userImg.setAttribute("alt", element.name);

    const userTextbox = document.createElement("div");
    userTextbox.classList.add("user-textbox");

    const userName = document.createElement("p");
    userName.classList.add("user-name");
    userName.textContent = element.first_name;

    const userLastName = document.createElement("p");
    userLastName.classList.add("user-lastName");
    userLastName.textContent = element.last_name;

    const userEmail = document.createElement("p");
    userEmail.classList.add("user-email");
    userEmail.textContent = element.email;

    userTextbox.append(userName, userLastName, userEmail);
    userItem.append(userImg, userTextbox);
    fragment.append(userItem);

    // pageTitle.textContent = element.name;
  });
  usersList.append(fragment);
}

async function getUsers(url) {
  try {
    const res = await fetch(url);
    const users = await res.json();
    renderUser(users.data);
  } catch (error) {
    console.log(error.message);
  }
}

getUsers("https://reqres.in/api/users?page=1");

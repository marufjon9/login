const usersList = document.querySelector(".users-list");

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

    usersList.append(fragment);
  });
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

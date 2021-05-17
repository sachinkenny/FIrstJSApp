const shuffle = document.getElementById("next-button");
const fullname = document.getElementById("full-name");
const firstname = document.getElementById("f-n");
const lastname = document.getElementById("l-n");
const email = document.getElementById("eml");
const profile_picture = document.getElementById("prof-pic");

let rand_user;

function getRandValues() {
  let val = Math.floor(Math.random() * 10) + 1;
  if (rand_user == undefined) {
      return Math.floor(Math.random() * 10) + 1;
  } else {
    if ((val) && (val != rand_user)) {
      getRandValues();
    } else {
      rand_user = val;
      return val;
    }
  }
}

async function getUserInfo() {
  url = "https://reqres.in/api/users/" + getRandValues();

  const response = await fetch(url);
  const user_data = await response.json();
  console.log(user_data.data);

  let user_name = user_data.data.first_name + " " + user_data.data.last_name;
  fullname.textContent = user_name;

  firstname.textContent = user_data.data.first_name;
  lastname.textContent = user_data.data.last_name;

  email.textContent = user_data.data.email;

  profile_picture.setAttribute("src", user_data.data.avatar);
}

// events
shuffle.addEventListener("click", getUserInfo);

// onload
getUserInfo();

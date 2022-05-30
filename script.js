//const pwd = document.getElementById("password");
//const pwd2 = document.getElementById("password2");

/*if (pwd.textContent!==""||pwd2.textContent!==""){    
    pwd.style.borderColor = 'red';
    pwd2.style.borderColor = 'red';
};
*/
const pwd = document.getElementById("password");
const pwd2 = document.getElementById("password2");

pwd.onclick = function () {
  if (pwd.style.borderColor = "red") {
    pwd.value = "";
    pwd.style.borderColor = "#e5e7eb";
    pwd2.style.borderColor = "#e5e7eb";
    document.querySelector("span").textContent = "";
  };
};

pwd2.onclick = function () {
    if (pwd2.style.borderColor = "red") {
      pwd2.value = "";
      pwd.style.borderColor = "#e5e7eb";
      pwd2.style.borderColor = "#e5e7eb";
      document.querySelector("span").textContent = "";
    };
  };

document.getElementById("button").onclick = function () {
  if (pwd.value !== pwd2.value) {
    pwd.style.borderColor = "red";
    pwd2.style.borderColor = "red";
    document.querySelector("span").textContent = "*Passwords do not match";
    document.querySelector("span").classList.add("addspan");
  }
};


var lower_case_letters = "abcdefghijklmnopqrstuvwxyz";
var upper_case_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special_characters = "#-_/@)({][}!%$?";

var btn = document.getElementById("btn");
var error_message = document.getElementById("error");
var success_message = document.getElementById("success");
var password_box = document.getElementById("password");
var copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  if (password_box.value != "") {
    password_box.select();
    document.execCommand("copy");
    success_message.style.visibility = "visible";
  }
});

btn.addEventListener("click", () => {
  var password = [];
  var string = "";
  var lowercase_box_status = document.getElementById("lowercase").checked;
  var uppercase_box_status = document.getElementById("uppercase").checked;
  var numbers_box_status = document.getElementById("numbers").checked;
  var chars_box_status = document.getElementById("chars").checked;
  var size = Number(document.getElementById("size").value);

  success_message.style.visibility = "hidden";

  let not_valid =
    lowercase_box_status == false &&
    uppercase_box_status == false &&
    numbers_box_status == false &&
    chars_box_status == false;

  if (not_valid || size == 0) {
    error_message.style.visibility = "visible";
  } else {
    error_message.style.visibility = "hidden";
    if (lowercase_box_status == true) {
      string = string.concat(lower_case_letters);
    }
    if (uppercase_box_status == true) {
      string = string.concat(upper_case_letters);
    }
    if (numbers_box_status == true) {
      string = string.concat(numbers);
    }
    if (chars_box_status == true) {
      string = string.concat(special_characters);
    }

    for (let i = 0; i < size; i++) {
      let index = Math.round(Math.random() * (string.length - 1));
      let randomLetter = string[index];
      password.push(randomLetter);
    }
    password = password.join("");
    console.log("the password is: " + password);

    password_box.value = password;
  }
});

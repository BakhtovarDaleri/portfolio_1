document.addEventListener("DOMContentLoaded", function () {
  const myButton = this.getElementById("myButton");

  myButton.addEventListener("click", function () {
    window.location.href = "https://github.com/BakhtovarDaleri";
  });
});

// Находим форму по ID
const form = document.getElementById("contacts");

//Добавляем обработчик события
form.addEventListener("submit", function (event) {
  event.preventDefault();

  //Получаем значения из полей формы
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log("Полное имя", fullName);
  console.log("Электронная почта:", email);
  console.log("Номер телефона", phone);
  console.log("Тема:", subject);
  console.log("Сообщение:", message);

  form.requestFullscreen();
});

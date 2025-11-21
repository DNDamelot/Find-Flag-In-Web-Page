// auction/login.js

const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Останавливаем стандартную отправку формы

  const user = document.getElementById("username-field").value.trim();
  const pass = document.getElementById("password-field").value.trim();

  // --- ПРОВЕРКА ДАННЫХ ---
  // Логин: SpeedDemon99
  // Пароль: Phoenix Turbo
  if (user === "SpeedDemon99" && pass === "Phoenix Turbo") {
    // Если все верно, перенаправляем на страницу профиля
    window.location.href = "profile.html";
  } else {
    // Если ошибка, показываем сообщение
    errorMsg.style.display = "block";
    // Трясем форму (анимация)
    loginForm.style.animation = "shake 0.5s";
    setTimeout(() => {
      loginForm.style.animation = "";
    }, 500);
  }
});

// Добавим CSS анимацию тряски прямо из JS для удобства
document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
</style>`
);

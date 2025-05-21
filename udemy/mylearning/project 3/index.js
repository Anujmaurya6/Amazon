const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error");
const showPasswordCheckbox = document.getElementById("showPassword");
const rememberMe = document.getElementById("rememberMe");
const container = document.querySelector(".login-container");

// 🔁 Load remembered username
window.onload = () => {
  const savedUser = localStorage.getItem("rememberedUser");
  if (savedUser) {
    usernameInput.value = savedUser;
    rememberMe.checked = true;
  }
};

// 👁️ Toggle Password
showPasswordCheckbox.addEventListener("change", () => {
  passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
});

// 🧠 Login Logic
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // 🧪 Basic Validations
  if (!username || !password) {
    showError("All fields are required!");
    return;
  }

  if (password.length < 4) {
    showError("Password must be at least 4 characters");
    return;
  }

  // ✅ Dummy Login Check
  if (username === "admin" && password === "1234") {
    errorMsg.style.color = "green";
    errorMsg.textContent = "✅ Login Successful!";
    container.style.boxShadow = "0 0 15px green";

    if (rememberMe.checked) {
      localStorage.setItem("rememberedUser", username);
    } else {
      localStorage.removeItem("rememberedUser");
    }

    // Redirect or show welcome
    setTimeout(() => {
      alert("Redirecting to dashboard...");
      // window.location.href = "dashboard.html"; // add your page
    }, 1000);
  } else {
    showError("❌ Invalid username or password");
  }
});

// 🧯 Error Function with Animation
function showError(message) {
  errorMsg.style.color = "red";
  errorMsg.textContent = message;

  container.classList.add("shake");
  setTimeout(() => {
    container.classList.remove("shake");
  }, 300);
}

  
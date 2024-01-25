let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword() {
    const generatedPassword = password.textContent; // Obtém a senha do elemento
    navigator.clipboard.writeText(generatedPassword)
        .then(() => alert("Senha copiada com sucesso!")) // Mostra o alerta após a cópia bem-sucedida
        .catch(error => alert("Erro ao copiar senha: " + error.message)); // Lidar com erros potenciais
}

if (navigator.clipboard) {
    // API Clipboard suportada
    navigator.clipboard.writeText(generatedPassword)
      .then(() => alert("Senha copiada com sucesso!"))
      .catch(error => alert("Erro ao copiar senha: " + error.message));
  } else {
    // API Clipboard não suportada
    alert("O navegador não suporta a cópia da senha.");
  }
  